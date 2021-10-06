const clientModel = require("../models/client.model")

module.exports = class ClientApi {
    static async getAll(req, res) {
        try {
            const clients = await clientModel.find();
            res.status(200).json(clients); 
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    static async getByCode(req, res) {
        try {
            const code = req.params.identification;
            const client = await clientModel.findOne( {"code": code}  );
            if(client == null) {
                res.status(404).json({message: "Not found"}  );
            } else {
                res.status(200).json(client);
            }            
        } catch (err){
            res.status(400).json({ message: err.message});
        }
    }
    static async create(req, res) {
        try {
            let client = req.body;
            client = await clientModel.create(client);
            res.status(201).json(client);
        } catch (err){
            res.status(400).json({message: err.message})
        }
    }
}