import config from '../config'

const sqs = new config.AWS.SQS()

function sendMessage(queueURL, messageBody) {
    console.log('messagew: ' + messageBody)
    const params = {
        MessageBody: JSON.stringify(messageBody),
        QueueUrl: queueURL
    };
    sqs.sendMessage(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        }
        console.log("Post Message", data);
    });
}

function receiveMessage(queueURL) {
    const params = {
        MaxNumberOfMessages: 10,
        QueueUrl: queueURL,
        VisibilityTimeout: 20,
        WaitTimeSeconds: 0
    };

    return sqs.receiveMessage(params, function(err, data) {
        if (err) {
            console.log("Receive Error", err);
        }
    }).promise()
}

module.exports = {sendMessage, receiveMessage}