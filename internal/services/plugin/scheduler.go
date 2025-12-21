// plugin-------------------------------------
// @file      : scheduler.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/20 17:50
// -------------------------------------------

package plugin

import (
	"fmt"
	"github.com/Autumn-27/ScopeSentry/internal/logger"
	schedulerCore "github.com/Autumn-27/ScopeSentry/internal/scheduler"
)

func AddJob(hash string, schedule string) error {
	job := &schedulerCore.Job{
		ID:        hash,
		Name:      "server_plugin",
		Handler:   "server_plugin",
		Params:    hash,
		CycleType: "cron",
		Schedule:  schedule,
	}

	if err := schedulerCore.GetGlobalScheduler().AddJob(job); err != nil {
		logger.Error(err.Error())
		return fmt.Errorf("failed to add scheduled task: %w", err)
	}
	return nil
}
