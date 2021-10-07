const userModel = require("../models/user.model")

module.exports = class UserApi {
    static async getAll(req, res) {
        try {
            const users = await userModel.find();
            res.status(200).json(users); 
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    static async getByCode(req, res) {
        try {
            const code = req.params.identification;
            const user = await userModel.findOne( {"code": code}  );
            if(user == null) {
                res.status(404).json({message: "Not found"}  );
            } else {
                res.status(200).json(user);
            }            
        } catch (err){
            res.status(400).json({ message: err.message});
        }
    }
    static async create(req, res) {
        try {
            let user = req.body;
            user = await userModel.create(user);
            res.status(201).json(user);
        } catch (err){
            res.status(400).json({message: err.message})
        }
    }
}