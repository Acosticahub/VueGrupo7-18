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
  static async count(req, res) {
    try {
        const countproduct = await productModel.estimatedDocumentCount()
        res.status(200).json(countproduct); 
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}
  static async getByCode(req, res) {
    try {
      const reference = req.params.reference;
      const product = await productModel.findOne({ reference: reference });
      if (product == null) {
        res.status(404).json({ message: "No encontrado en la base de datos" });
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
      if (req.file != undefined) {
        const imageName = req.file.filename;
        product.imageUrl = "/" + imageName;
      }
      if (product.reference == undefined) {
        res
          .status(400)
          .json({ message: "Producto no puede ser guardado sin codigo" });
      } else {
        if (typeof product.categories === "string") {
          product.categories = JSON.parse(product.categories);
        }
        product = await productModel.create(product);
        res.status(201).json(product);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async update(req, res) {
    try {
      const reference = req.params.reference;
      const product = req.body;
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
  static async changeProductImage(req, res) {
    try {
      const code = req.params.code;
      const imageName = req.file.filename;
      await productModel.updateOne(
        { code: code },
        { imageUrl: "/" + imageName }
      );
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
