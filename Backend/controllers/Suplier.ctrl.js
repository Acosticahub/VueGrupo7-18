const suplierModel = require("../models/suplier.model")

module.exports = class SuplierApi {
    static async getAll(req, res) {
        try {
            const supliers = await suplierModel.find();
            res.status(200).json(supliers); 
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    static async count(req, res) {
        try {
            const countsuplier = await suplierModel.estimatedDocumentCount()
            res.status(200).json({message: countsuplier}); 
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    }
    static async getByCode(req, res) {
        try {
            const ruc = req.params.ruc;
            const suplier = await suplierModel.findOne( {"ruc": ruc}  );
            if(suplier == null) {
                res.status(404).json({message: "Not found"}  );
            } else {
                res.status(200).json(suplier);
            }            
        } catch (err){
            res.status(400).json({ message: err.message});
        }
    }
    static async create(req, res) {
        try {
            let suplier = req.body;
            suplier = await suplierModel.create(suplier);
            res.status(201).json(suplier);
        } catch (err){
            res.status(400).json({message: err.message})
        }
    }
    static async update (req, res) {
        try {
            const ruc = req.params.ruc;
            const suplier = req.body;
            await suplierModel.updateOne( {ruc: ruc}, suplier );
            res.status(200).json()
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    static async delete (req, res) {
        try {
            const ruc = req.params.ruc;
            await suplierModel.deleteOne( {ruc: ruc}, );
            res.status(200).json()
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}