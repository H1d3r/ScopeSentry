// plugins-------------------------------------
// @file      : plugins.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/3 20:33
// -------------------------------------------

package plugins

import (
	"github.com/Autumn-27/ScopeSentry/internal/interfaces"
	"github.com/Autumn-27/ScopeSentry/internal/options"
	"github.com/traefik/yaegi/interp"
	"github.com/traefik/yaegi/stdlib"
	"reflect"
)

func LoadPlugin(code string, plgId string) (interfaces.Plugin, error) {
	// 初始化 yaegi 解释器
	interp := interp.New(interp.Options{})
	// 加载标准库和符号
	err := interp.Use(stdlib.Symbols)
	if err != nil {
		return nil, err
	}
	err = interp.Use(map[string]map[string]reflect.Value{
		"os/exec": stdlib.Symbols["os/exec"],
	})
	_, err = interp.Eval(code)
	if err != nil {
		return nil, err
	}
	// 获取Execute
	v, err := interp.Eval("plugin.Execute")
	if err != nil {
		return nil, err
	}
	executeFunc := v.Interface().(func(op options.PluginOption) error)

	// 获取Cycle
	v, err = interp.Eval("plugin.Cycle")
	if err != nil {
		return nil, err
	}
	cycleFunc := v.Interface().(func() string)

	// 获取Cycle
	v, err = interp.Eval("plugin.Install")
	if err != nil {
		return nil, err
	}
	installFunc := v.Interface().(func() error)

	// 获取Cycle
	v, err = interp.Eval("plugin.GetName")
	if err != nil {
		return nil, err
	}
	getNameFunc := v.Interface().(func() string)

	plg := NewPlugin(plgId, installFunc, executeFunc, getNameFunc, cycleFunc)

	return plg, err
}
