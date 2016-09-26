#Mood API
A [Serverless](https://serverless.com/) API for the mood frontend app

## Setting up for development/deploying

The Serverless framework uses an IAM (AWS Identity and Access Management) account to deploy to various AWS services. Ensure the account details are exported to your machine:

```bash
export AWS_ACCESS_KEY_ID=<key>
export AWS_SECRET_ACCESS_KEY=<secret>
```

## Deploying

`npm run deploy`

This just runs `serverless deploy`, and Serverless does it's magic.

## Logging

Your Lambda function can contain logging statements. AWS Lambda writes these logs to CloudWatch. If you use the Lambda console to invoke your Lambda function, the console displays the same logs.

The following Node.js statements generate log entries:

```javascript
console.log()
console.error()
console.warn()
console.info()
```

(more at http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html)

