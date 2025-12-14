// plugins-------------------------------------
// @file      : customplugin.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/3 20:44
// -------------------------------------------

package plugins

import (
	"fmt"
	"github.com/Autumn-27/ScopeSentry/internal/interfaces"
	"github.com/Autumn-27/ScopeSentry/internal/options"
)

type Plugin struct {
	Id              string
	CycleFunc       func() string
	InstallFunc     func() error
	ExecuteFunc     func(op options.PluginOption) error
	GetNameFunc     func() string
	GetPluginIdFunc func() string
}

func NewPlugin(plgId string, installFunc func() error, executeFunc func(op options.PluginOption) error, getNameFunc func() string, cycleFunc func() string) *Plugin {
	return &Plugin{
		Id:          plgId,
		InstallFunc: installFunc,
		ExecuteFunc: executeFunc,
		GetNameFunc: getNameFunc,
		CycleFunc:   cycleFunc,
	}
}

func (p *Plugin) Cycle() string {
	return p.CycleFunc()
}

func (p *Plugin) Install() error {
	return p.InstallFunc()
}

func (p *Plugin) Execute(op options.PluginOption) error {
	return p.ExecuteFunc(op)
}

func (p *Plugin) GetName() string {
	return p.GetNameFunc()
}

func (p *Plugin) Log(msg string, tp ...string) {
	fmt.Printf("dd")
}
func (p *Plugin) GetPluginId() string {
	return p.Id
}

func (p *Plugin) Clone() interfaces.Plugin {
	return &Plugin{
		Id:              p.Id,
		InstallFunc:     p.InstallFunc,
		ExecuteFunc:     p.ExecuteFunc,
		GetNameFunc:     p.GetNameFunc,
		GetPluginIdFunc: p.GetPluginIdFunc,
	}
}
