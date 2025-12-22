// plugin_template-------------------------------------
// @file      : nucleiMonitor.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/20 20:04
// -------------------------------------------

package plugin

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/Autumn-27/ScopeSentry/internal/utils/helper"

	"github.com/Autumn-27/ScopeSentry/internal/models"
	"github.com/Autumn-27/ScopeSentry/internal/options"
	"github.com/Autumn-27/ScopeSentry/internal/utils"
	"github.com/Autumn-27/ScopeSentry/internal/utils/random"
)

// API 响应结构
type templateResult struct {
	TemplateID string `json:"template_id"`
	Severity   string `json:"severity"`
	Name       string `json:"name"`
	Raw        string `json:"raw"`
}

type apiResponse struct {
	Results []templateResult `json:"results"`
}

func GetName() string {
	return "Nuclei Monitor"
}

// Cycle 运行周期
func Cycle() string {
	return "0 * * * *"
}

func Install() error {
	return nil
}

func Execute(op options.PluginOption) error {
	value := op.GetStringVariable("nuclei_init")
	if value != "true" {
		// 进行初始化直接导入poc zip
		tempDir := os.TempDir()
		fileName := random.GenerateString(5) + ".zip"
		filePath := filepath.Join(tempDir, fileName)
		op.Log("download ....https://codeload.github.com/projectdiscovery/nuclei-templates")
		err := utils.DownloadFile("https://codeload.github.com/projectdiscovery/nuclei-templates/zip/refs/heads/main", filePath, 10*time.Minute)
		if err != nil {
			op.Log(fmt.Sprintf("download fail: %s", err.Error()), "e")
			return err
		}
		_, err = op.PocService.ImportPoc(context.Background(), filePath)
		if err != nil {
			op.Log(fmt.Sprintf("ImportPoc fail: %s", err.Error()), "e")
			return err
		}
		op.SetStringVariable("nuclei_init", "true")
		op.Log("download nuclei-templates success")
		return nil
	}
	// 监控poc
	ctx := context.Background()
	offset := 0
	limit := 20

	for {
		results, err := fetchPocTemplates(offset, limit)
		if err != nil {
			op.Log(fmt.Sprintf("获取 POC 模板失败: %s", err.Error()), "e")
			return err
		}

		// 如果没有结果，退出循环
		if len(results) == 0 {
			break
		}

		// 遍历结果
		for _, result := range results {
			result.TemplateID = strings.Replace(result.TemplateID, "-draft", "", 1)
			// 检查 template_id 是否存在
			exists, err := op.PocService.TemplateIdExists(ctx, result.TemplateID)
			if err != nil {
				op.Log(fmt.Sprintf("检查 TemplateId 失败: %s, 错误: %s", result.TemplateID, err.Error()), "e")
				continue
			}

			if exists {
				// 如果存在，说明所有 poc 已经更新完毕，退出遍历
				op.Log("所有 poc 已更新完毕")
				return nil
			}
			var pt models.PocTemplate
			err = utils.Unmarshal([]byte(result.Raw), &pt)
			if err != nil {
				return fmt.Errorf("failed to unmarshal poc template: %w", err)
			}
			var searchValueOld interface{}
			var customQuery string
			if pt.Info.Metadata != nil {
				// 先尝试从 fofa-query 解析
				if fofaQueryValue := pt.Info.Metadata["fofa-query"]; fofaQueryValue != nil {
					searchValueOld = fofaQueryValue
					customQuery = helper.ConvertFofaToCustomQuery(fofaQueryValue)
					//op.Log(fmt.Sprintf("Fofa:%v 转换后的搜索语句: %s", fofaQueryValue, customQuery))
				}
				// 如果 fofa 解析结果为空，尝试从 shodan-query 解析
				if customQuery == "" {
					if shodanQueryValue := pt.Info.Metadata["shodan-query"]; shodanQueryValue != nil {
						searchValueOld = shodanQueryValue
						customQuery = helper.ConvertShodanToCustomQuery(shodanQueryValue)
						//op.Log(fmt.Sprintf("Shodan:%v 转换后的搜索语句: %s", shodanQueryValue, customQuery))
					}
				}
				if customQuery != "" {
					// 在这里可以使用 customQuery 值进行后续处理
				}
			}

			op.Log(fmt.Sprintf("发现新的 POC: TemplateID=%s, Name=%s, Severity=%s, OldSearch=%v, SaSSearch=%v", result.TemplateID, result.Name, result.Severity, searchValueOld, customQuery))
		}

		// 如果返回的结果数量小于 limit，说明已经是最后一页
		if len(results) < limit {
			break
		}

		// 移动到下一页
		offset += limit
	}

	return nil
}

// fetchPocTemplates 从 API 获取 POC 模板列表
func fetchPocTemplates(offset, limit int) ([]templateResult, error) {
	// 构建请求 URL
	reqURL := "https://api.projectdiscovery.io/v2/template/search"
	params := url.Values{}
	params.Set("scope", "public")
	params.Set("offset", strconv.Itoa(offset))
	params.Set("limit", strconv.Itoa(limit))
	params.Set("isSignedIn", "false")

	fullURL := reqURL + "?" + params.Encode()

	// 创建请求
	req, err := http.NewRequest("GET", fullURL, nil)
	if err != nil {
		return nil, fmt.Errorf("创建请求失败: %w", err)
	}

	// 设置请求头
	req.Header.Set("accept", "*/*")
	req.Header.Set("accept-language", "zh-CN,zh;q=0.9")
	req.Header.Set("content-type", "application/json")
	req.Header.Set("origin", "https://cloud.projectdiscovery.io")
	req.Header.Set("priority", "u=1, i")
	req.Header.Set("referer", "https://cloud.projectdiscovery.io/")
	req.Header.Set("sec-ch-ua", `"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"`)
	req.Header.Set("sec-ch-ua-mobile", "?0")
	req.Header.Set("sec-ch-ua-platform", `"Windows"`)
	req.Header.Set("sec-fetch-dest", "empty")
	req.Header.Set("sec-fetch-mode", "cors")
	req.Header.Set("sec-fetch-site", "same-site")
	req.Header.Set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36")
	req.Header.Set("x-team-id", "cus16bdim6vs73cqnh0g")

	// 创建 HTTP 客户端并发送请求
	client := &http.Client{
		Timeout: 30 * time.Second,
	}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("请求失败: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("HTTP 状态码异常: %d", resp.StatusCode)
	}

	// 解析响应
	var apiResp apiResponse
	if err := json.NewDecoder(resp.Body).Decode(&apiResp); err != nil {
		return nil, fmt.Errorf("解析响应失败: %w", err)
	}

	return apiResp.Results, nil
}
