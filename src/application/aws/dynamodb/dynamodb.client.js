import config from '../config'

const ddb = new config.AWS.DynamoDB();

function saveItem(tableName, item) {
    const params = {
        TableName: tableName,
        Item: item
    };

    return ddb.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        }
    }).promise()
    .then(data => {
        return data
    });
}

function updateItem(tableName, id, item) {
    const params = {
        TableName: tableName,
        Key: {
            "id": {'S': id},
        },
        UpdateExpression: "set #nm = :n, price= :price, quantity= :quantity",
        ExpressionAttributeNames: {
            "#nm": "name"
        },
        ExpressionAttributeValues:{
            ":n":{'S': item.name},
            ":price":{'N': item.price},
            ":quantity": {'N': item.quantity},
        },
        ReturnValues:"UPDATED_NEW"
    };

    return ddb.updateItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        }
    }).promise()
    .then(data => {
        return config.AWS.DynamoDB.Converter.unmarshall(data.Attributes)
    });
}

function deleteItem(tableName, id) {
    console.log("id")
    console.log(id)
    const params = {
        TableName: tableName,
        Key: {
            "id": {'S': id},
        },
        ConditionExpression:"id = :id",
        ExpressionAttributeValues: {
            ":id": {'S': id},
        }
    };

    return ddb.deleteItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        }
    }).promise()
    .then(data => {
        return config.AWS.DynamoDB.Converter.unmarshall(data)
    });
}

function getAllItems(tableName) {
    const params = {
        TableName: tableName
    };
    return ddb.scan(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        }
    }).promise()
    .then(data => {
        return data.Items.map(item => {
            return config.AWS.DynamoDB.Converter.unmarshall(item)
        })
    });
}

function getItemByID(tableName, id) {
    const params = {
        TableName: tableName,
        Key:{
            "id": {'S': id},
        }
    };
    return ddb.getItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        }
    }).promise()
        .then(data => {
            return config.AWS.DynamoDB.Converter.unmarshall(data.Item)
        });
}

module.exports = {saveItem, getAllItems, updateItem, deleteItem, getItemByID}