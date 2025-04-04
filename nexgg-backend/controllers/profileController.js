const ProfileModel = require("../models/profileModel");

const ProfileController = {
    async getAll(req, res) {
        try {
            const profiles = await ProfileModel.getAllProfiles();
            res.status(200).json(profiles);
        } catch (error) {
            console.error("Error fetching profiles:", error);
            res.status(500).json({ error: "Error fetching profiles" });
        }
    },

    async getById(req, res) {
        try {
            const profile = await ProfileModel.getProfileById(req.params.id);
            res.status(200).json(profile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const profile = await ProfileModel.createProfile(req.body);
            res.status(201).json(profile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const profile = await ProfileModel.updateProfile(req.params.id, req.body);
            res.json(profile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            await ProfileModel.deleteProfile(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = ProfileController;
