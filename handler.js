'use strict';
const aws = require('aws-sdk');

const tableName = 'Moods';

//POST users/:userid/moods
exports.createMood = (event, context) => {

    const dynamo = new aws.DynamoDB.DocumentClient();

    const payload = {
        TableName: tableName,
        Item: {
            userId: event.path.userid,
            date: event.body.date,
            mood: event.body.mood
        }
    };

    dynamo.put(payload, (err, data) => {
        if (err) {
            context.fail(err);
        } else {
            context.succeed(data);
        }
    });
};

//GET users/:userid/moods
exports.getAllMoods = (event, context) => {

    const dynamo = new aws.DynamoDB.DocumentClient();

    const payload = {
        TableName: tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.path.userid
        }
    };

    dynamo.query(payload, (err, data) => {
        if (err) {
            context.fail(err);
        } else {
            context.succeed(data.Items);
        }
    });
};
