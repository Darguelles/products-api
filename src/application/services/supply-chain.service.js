import DefaultApi from "../../../supply-chain/client/src/api/DefaultApi";

const supplyChainClient = new DefaultApi()

function sendToSupplyChainService(product) {
   supplyChainClient.supplyChainPost(product, null)
}

module.exports = {sendToSupplyChainService}