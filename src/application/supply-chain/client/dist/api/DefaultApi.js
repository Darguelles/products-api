"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Product = _interopRequireDefault(require("../model/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Supply Chain API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
* Default service.
* @module api/DefaultApi
* @version 1
*/
class DefaultApi {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || _ApiClient.default.instance;
  }
  /**
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Product>} and HTTP response
   */


  supplyChainGetWithHttpInfo() {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [_Product.default];
    return this.apiClient.callApi('/supply-chain', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Product>}
   */


  supplyChainGet() {
    return this.supplyChainGetWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * @param {String} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  supplyChainIdDeleteWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling supplyChainIdDelete");
    }

    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi('/supply-chain/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * @param {String} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */


  supplyChainIdDelete(id) {
    return this.supplyChainIdDeleteWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * @param {String} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
   */


  supplyChainIdGetWithHttpInfo(id) {
    let postBody = null; // verify the required parameter 'id' is set

    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling supplyChainIdGet");
    }

    let pathParams = {
      'id': id
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = _Product.default;
    return this.apiClient.callApi('/supply-chain/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * @param {String} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
   */


  supplyChainIdGet(id) {
    return this.supplyChainIdGetWithHttpInfo(id).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
  /**
   * @param {module:model/Product} product 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
   */


  supplyChainPostWithHttpInfo(product) {
    let postBody = product; // verify the required parameter 'product' is set

    if (product === undefined || product === null) {
      throw new Error("Missing the required parameter 'product' when calling supplyChainPost");
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = _Product.default;
    return this.apiClient.callApi('/supply-chain', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
  }
  /**
   * @param {module:model/Product} product 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
   */


  supplyChainPost(product) {
    return this.supplyChainPostWithHttpInfo(product).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

}

exports.default = DefaultApi;
//# sourceMappingURL=DefaultApi.js.map