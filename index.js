var AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});

var params = {
    Destination: {
        ToAddresses: [
            '<to_address>',
        ]
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "<h1>test</h1>"
            },
            Text: {
                Charset: "UTF-8",
                Data: "test"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    Source: '<source mail>',
    ReplyToAddresses: [
        '<reply to address>',
    ],
};

var sendPromise = new AWS.SES({
    apiVersion: '2010-12-01'
}).sendEmail(params).promise();

(async function () {
    try {
        let data = await sendPromise;
        console.log(data.MessageId);
    } catch (err) {
        console.log(err);
    }
})();