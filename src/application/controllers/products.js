import {Product} from "../../domain/product/product";
import {ProductDynamodbRepository} from "../repository/product.dynamodb.repository";
import {postToProductQueue} from '../services/product.service'

const store = new ProductDynamodbRepository();

exports.list = async (req, res) => {
    return store.getAll()
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json(err);
        });
};


exports.create = async (req, res) => {
    const {id, name, price, quantity} = req.body;
    const myProduct = new Product(
        id,
        name,
        price,
        quantity
    );
    return store.persist(myProduct)
        .then(data => {
            postToProductQueue(data);
            return res.status(201).json(data);
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json('Unable to create element. Check the application logs for details.');
        });
};

exports.update = async (req, res) => {
    const {id, name, price, quantity} = req.body;
    const myProduct = new Product(
        id,
        name,
        price,
        quantity
    );
    return store.merge(myProduct)
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json('Unable to update element. Check the application logs for details.');
        });
};


exports.delete = async (req, res) => {
    return store.remove(req.params.productId)
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json('Unable to remove element. Check the application logs for details.');
        });
};

exports.read = async (req, res) => {
    return store.findById(req.params.productId)
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json("Unable to read element. Check the application logs for details.");
        });
};
