// options-------------------------------------
// @file      : plugin.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/3 21:12
// -------------------------------------------

package options

import (
	"github.com/Autumn-27/ScopeSentry/internal/services/node"
	"github.com/Autumn-27/ScopeSentry/internal/services/poc"
	taskCommon "github.com/Autumn-27/ScopeSentry/internal/services/task/common"
	"github.com/redis/go-redis/v9"
	"go.mongodb.org/mongo-driver/mongo"
)

type PluginOption struct {
	DB                *mongo.Database
	RedisClinet       *redis.Client
	TaskCommonService taskCommon.Service
	PocService        poc.Service
	Node              node.Service
	SetStringVariable func(key string, value string)
	GetStringVariable func(key string) (value string)
	Log               func(msg string, tp ...string)
}
