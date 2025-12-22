// config-------------------------------------
// @file      : notification.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/22 22:08
// -------------------------------------------

package config

import (
	"fmt"
	"github.com/Autumn-27/ScopeSentry/internal/global"
	"github.com/Autumn-27/ScopeSentry/internal/models"
	"github.com/Autumn-27/ScopeSentry/internal/utils"
	"go.uber.org/zap"
	"strings"
	"time"
)

var NotificationApi []models.NotificationApi

func Notification(msg string) {
	cli := utils.NewRequest(10 * time.Second)
	for _, api := range NotificationApi {
		uri := strings.Replace(api.Url, "*msg*", msg, -1)
		if api.Method == "GET" {
			_, err := cli.HttpGet(uri)
			if err != nil {
				global.Log.Error(fmt.Sprintf(msg), zap.Error(err))
			}
		} else {
			data := strings.Replace(api.Data, "*msg*", msg, -1)
			_, err := cli.HttpPost(uri, []byte(data), api.ContentType)
			if err != nil {
				global.Log.Error(fmt.Sprintf(msg), zap.Error(err))
			}
		}
	}
}
