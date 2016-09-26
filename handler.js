'use strict';
const aws = require('aws-sdk');

const dynamo = new aws.DynamoDB.DocumentClient();
const tableName = 'Moods';

//POST users/:userid/moods
exports.createMood = (event, context) => {
    console.log('event', event);

    const payload = {
        TableName: tableName,
        Item: event.body
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
    console.log('event', event);

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
