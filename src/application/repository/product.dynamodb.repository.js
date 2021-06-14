import {ProductStore} from "../../domain/product/product.store";
import {saveItem, getAllItems, updateItem, deleteItem, getItemByID} from "../aws/dynamodb/dynamodb.client"
import {Product} from "../../domain/product/product";
import { v4 as uuidv4 } from 'uuid';

export class ProductDynamodbRepository extends ProductStore {

    constructor() {
        super();
        this.tableName = "Product"
    }

    async persist(product) {
        const context = this;
        // Generate unique random ID
        if (product.id == null) {
            // Automatically define a productID
            product.id = uuidv4()
        }
        return await new Promise(function (resolve, reject) {
            resolve(saveItem(context.tableName, context.toAWSItem(product)));
        }).then(() => {
            return getItemByID(this.tableName, product.id)
        });
    }

    async getAll() {
        const context = this;
        return getAllItems(context.tableName)
    }

    async merge(product) {
        const context = this;
        return updateItem(context.tableName, product.id, product)
    }

    async remove(productId) {
        const context = this;
        return deleteItem(context.tableName, productId)
    }

    async findById(productId) {
        const context = this;
        return getItemByID(context.tableName, productId)
    }

    toAWSItem(product) {
        return {
            'id' : {'S': product.id},
            'name' : {'S': product.name},
            'price' : {'N': product.price},
            'quantity' : {'N': product.quantity}
        }
    }

}