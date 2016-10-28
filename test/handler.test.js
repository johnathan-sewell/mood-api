'use strict'
const sinon = require('sinon');
const assert = require('assert');
const aws = require('aws-sdk');
const handler = require('./../handler.js');

var sandbox;

describe('handler', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    describe('createMood', () => {
        it('calls put on an awsDynamo object', () => {
            const eventStub = {
                path: {
                    userId: 4
                },
                body: {
                    date: '010101'
                }
            };

            const contextStub = {
                fail: sandbox.stub(),
                succeed: sandbox.stub()
            };

            const dynamoStub = {
                put: sandbox.stub()
            };

            sandbox.stub(aws.DynamoDB, 'DocumentClient').returns(dynamoStub);

            handler.createMood(eventStub, contextStub);

            assert.equal(dynamoStub.put.callCount, 1);
        });
    });
});
