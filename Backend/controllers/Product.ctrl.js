const productModel = require("../models/product.model");

module.exports = class ProductApi {
  static async getAll(req, res) {
    try {
      const products = await productModel.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async getByCode(req, res) {
    try {
      const reference = req.params.reference;
      const product = await productModel.findOne({ Referencia: reference });
      if (product == null) {
        res.status(404).json({ message: "Not Found" });
      } else {
        res.status(200).json(product);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async create(req, res) {
    try {
      let product = req.body;
      product = await productModel.create(product);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async update(req, res) {
    try {
      const reference = req.params.reference;
      const productModel = reference.body;
      await productModel.updateOne({ reference: reference }, product);
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async delete(req, res) {
    try {
      const reference = req.params.reference;
      await productModel.deleteOne({ reference: reference });
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
