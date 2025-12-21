// plugins-------------------------------------
// @file      : utils.go
// @author    : Autumn
// @contact   : rainy-autumn@outlook.com
// @time      : 2025/12/20 20:15
// -------------------------------------------

package plugins

import (
	"context"
	"fmt"
	"github.com/Autumn-27/ScopeSentry/internal/logger"

	"github.com/Autumn-27/ScopeSentry/internal/database/mongodb"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func SetStringVariable(key, value string) {
	ctx := context.Background()
	collection := mongodb.DB.Collection("variable")

	filter := bson.M{"key": key}
	update := bson.M{"$set": bson.M{"key": key, "value": value}}

	opts := options.Update().SetUpsert(true)
	_, err := collection.UpdateOne(ctx, filter, update, opts)
	if err != nil {
		logger.Error(fmt.Sprintf("Error updating variable %s: %v", key, err))
	}
}

func GetStringVariable(key string) string {
	ctx := context.Background()
	collection := mongodb.DB.Collection("variable")

	var result bson.M
	err := collection.FindOne(ctx, bson.M{"key": key}).Decode(&result)
	if err != nil {
		logger.Error(fmt.Sprintf("Error getting variable %s: %v", key, err))
		return ""
	}

	if value, ok := result["value"].(string); ok {
		return value
	}
	return ""
}
