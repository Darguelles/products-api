import sqs from '../aws/sqs/sqs'
import { DefaultApi } from '../supply-chain/client/dist'

const api = new DefaultApi()

const queueURL = 'http://localstack:4566/000000000000/product-queue'

function postToProductQueue(product) {
    sqs.sendMessage(queueURL, product)
}

function getProductsFromQueue() {
    console.log('Receiving messagers from queue: ' + queueURL)
    sqs.receiveMessage(queueURL)
    .then(data => {
        data.Messages.map(message => {
            sendToSupplyChainClient(message.Body)
        })
    })
    .catch(err => {
        console.log(err)
    })
}

function sendToSupplyChainClient(product) {
    api.supplyChainPost(product)
        .then(data => {
            console.log("Successfully posted product: " + data)
        })
        .catch(err => {
            evaluateErrorResponse(err.status, product)
        });
}

function evaluateErrorResponse(status, element) {
    if (status >= 500) {
        console.log("Element rejected due to Internal server error. Rejected element: " + JSON.stringify(element))
    } else if (status >= 400) {
        console.log("Error while posting element. Check the payload info. Rejected element: " + JSON.stringify(element))
    } else {
        // TODO remove from SQS
    }
}

module.exports = {postToProductQueue, getProductsFromQueue}