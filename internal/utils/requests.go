// utils-------------------------------------
// @file      : requests.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/22 22:14
// -------------------------------------------

package utils

import (
	"bytes"
	"io"
	"net/http"
	"time"
)

type HttpResponse struct {
	Url           string
	StatusCode    int
	Headers       map[string]string
	Body          []byte
	Redirect      string
	ContentLength int
}

/*
request 结构（可扩展：超时、代理、重试等）
*/
type request struct {
	client *http.Client
}

/*
创建一个 request 实例
*/
func NewRequest(timeout time.Duration) *request {
	return &request{
		client: &http.Client{
			Timeout: timeout,
		},
	}
}

/*
HttpGet 方法
*/
func (r *request) HttpGet(uri string) (HttpResponse, error) {
	req, err := http.NewRequest(http.MethodGet, uri, nil)
	if err != nil {
		return HttpResponse{}, err
	}

	resp, err := r.client.Do(req)
	if err != nil {
		return HttpResponse{}, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return HttpResponse{}, err
	}

	headers := make(map[string]string)
	for k, v := range resp.Header {
		if len(v) > 0 {
			headers[k] = v[0]
		}
	}

	res := HttpResponse{
		Url:           uri,
		StatusCode:    resp.StatusCode,
		Headers:       headers,
		Body:          body,
		ContentLength: int(resp.ContentLength),
	}

	if res.ContentLength < 0 {
		res.ContentLength = len(body)
	}

	if loc := resp.Header.Get("Location"); loc != "" {
		res.Redirect = loc
	}

	return res, nil
}

func (r *request) HttpPost(uri string, requestBody []byte, ct string) (HttpResponse, error) {
	req, err := http.NewRequest(http.MethodPost, uri, bytes.NewReader(requestBody))
	if err != nil {
		return HttpResponse{}, err
	}

	switch ct {
	case "json":
		req.Header.Set("Content-Type", "application/json")
	case "form":
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	case "text":
		req.Header.Set("Content-Type", "text/plain")
	}

	resp, err := r.client.Do(req)
	if err != nil {
		return HttpResponse{}, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return HttpResponse{}, err
	}

	headers := make(map[string]string)
	for k, v := range resp.Header {
		if len(v) > 0 {
			headers[k] = v[0]
		}
	}

	res := HttpResponse{
		Url:           uri,
		StatusCode:    resp.StatusCode,
		Headers:       headers,
		Body:          body,
		ContentLength: int(resp.ContentLength),
	}

	if res.ContentLength < 0 {
		res.ContentLength = len(body)
	}

	if loc := resp.Header.Get("Location"); loc != "" {
		res.Redirect = loc
	}

	return res, nil
}
