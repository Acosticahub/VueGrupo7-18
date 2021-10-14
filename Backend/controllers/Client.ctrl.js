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
    static async count(req, res) {
        try {
            const countclient = await clientModel.estimatedDocumentCount()
            res.status(200).json(countclient); 
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    static async getSorted(req, res) {
        try {
        const clients = await clientModel.find({}).sort({date: -1}).limit(5);
        res.status(200).json(clients);
        } catch (err) {
        res.status(404).json({message: err.message});
        }
    }
    static async getByCode(req, res) {
        try {
            const identification = req.params.identification;
            const client = await clientModel.findOne( {"identification": identification}  );
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
    static async update (req, res) {
        try {
            const identification = req.params.identification;
            const client = req.body;
            await clientModel.updateOne( {identification: identification}, client );
            res.status(200).json()
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    static async delete (req, res) {
        try {
            const identification = req.params.identification;
            await clientModel.deleteOne( {identification: identification}, );
            res.status(200).json()
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}