const userModel = require("../models/user.model");

module.exports = class UserApi {
  static async getAll(req, res) {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async count(req, res) {
    try {
      const countuser = await userModel.estimatedDocumentCount();
      res.status(200).json(countuser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async getByCode(req, res) {
    try {
      const username = req.params.username;
      const user = await userModel.findOne({ username: username });
      if (user == null) {
        res.status(404).json({ message: "Not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async create(req, res) {
    try {
      let user = req.body;
      user = await userModel.create(user);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async update(req, res) {
    try {
      const username = req.params.username;
      const user = req.body;
      await userModel.updateOne({ username }, user);
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async delete(req, res) {
    try {
      const username = req.params.username;
      await userModel.deleteOne({ username: username });
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  static async validateUser(req, res) {
    try {
      const credential = req.body;
      const user = await userModel.findOne({ username: credential.username });
      if (user == undefined || user == null) {
        res.status(404).json({ message: "Usuario no existe" });
      } else if (user.password != credential.password) {
        res.status(403).json({ message: "Usuario / contrase??a no valido" });
      } else {
        user.password == undefined;
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
