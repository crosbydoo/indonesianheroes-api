const Pahlawan = require("../models/Pahlawan");

module.exports = {
    createData: async (req, res)=>{
        const newHeroes = new Pahlawan(req.body);

        try {
            const savedHeroes = await newHeroes.save();
            const { __v, createdAt, updatedAt, ...newHeroesInfo } = savedHeroes._doc;

            //respond status
            res.status(200).json(newHeroesInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateData: async (req, res) => {
        try {
            const updateHeroes = await Pahlawan.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { $new: true }
            );
            const {__v, createdAt, updatedAt, ...updateHeroesInfo } = updateHeroes._doc;

            res.status(200).json(updateHeroesInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteHeroes: async (req,res) => {
        try {
            const id = req.params.id;
            const data = await Pahlawan.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    getHeroes: async (req, res) => {
        try {
            const heroesData = await Pahlawan.findById(req.params.id)
            res.status(200).json(heroesData);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllHeroes: async (req, res) => {
        try {
            const allHeroes = await Pahlawan.find()
            res.status(200).json(allHeroes);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}