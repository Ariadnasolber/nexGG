// models/profileModel.js
const { supabase } = require("../supabaseClient");

const ProfileModel = {
    async getAllProfiles() {
        const { data, error } = await supabase.from("profiles").select("*");
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },

    async getProfileById(id) {
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", id);
        if (error) throw new Error(error.message);
        return data;
    },

    async createProfile(profile) {
        const { data, error } = await supabase
            .from("profiles")
            .insert([profile]);
        if (error) throw new Error(error.message);
        return data;
    },

    async updateProfile(id, profile) {
        const { data, error } = await supabase
            .from("profiles")
            .update(profile)
            .eq("id", id);
        if (error) throw new Error(error.message);
        return data;
    },

    async deleteProfile(id) {
        const { data, error } = await supabase
            .from("profiles")
            .delete()
            .eq("id", id);
        if (error) throw new Error(error.message);
        return data;
    },
};

module.exports = ProfileModel;
