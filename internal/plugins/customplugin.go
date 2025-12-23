// plugins-------------------------------------
// @file      : customplugin.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/3 20:44
// -------------------------------------------

package plugins

import (
	"fmt"
	"github.com/Autumn-27/ScopeSentry/internal/config"
	"github.com/Autumn-27/ScopeSentry/internal/database/redis"
	"github.com/Autumn-27/ScopeSentry/internal/interfaces"
	"github.com/Autumn-27/ScopeSentry/internal/logger"
	"github.com/Autumn-27/ScopeSentry/internal/options"
	"github.com/Autumn-27/ScopeSentry/internal/utils/helper"
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
	op.GetStringVariable = GetStringVariable
	op.SetStringVariable = SetStringVariable
	op.Log = p.Log
	op.Notification = config.Notification
	return p.ExecuteFunc(op)
}

func (p *Plugin) GetName() string {
	return p.GetNameFunc()
}

func (p *Plugin) Log(msg string, tp ...string) {
	var logTp string
	if len(tp) > 0 {
		logTp = tp[0] // 使用传入的参数
	} else {
		logTp = "i"
	}

	switch logTp {
	case "i":
		logger.Info(msg)
		msg = "[info] " + msg
	case "e":
		logger.Error(msg)
		msg = "[error] " + msg
	case "d":
		logger.Debug(msg)
		msg = "[debug] " + msg
	case "w":
		logger.Warn(msg)
		msg = "[warning] " + msg

	}
	key := fmt.Sprintf("logs:server_plugins:%v", p.Id)
	err := redis.SendPluginLogToRedis(key, fmt.Sprintf("[%v] %v", helper.GetNowTimeString(), msg))
	if err != nil {
		logger.Error(err.Error())
	}
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
		CycleFunc:       p.CycleFunc,
	}
}
