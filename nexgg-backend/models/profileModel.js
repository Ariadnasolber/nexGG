const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ProfileModel = {

    async getAllProfiles() {
        const { data, error } = await supabase.from("profiles").select("*");
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },

    async getProfileById(id){
        const { data, error } = await supabase.from("profiles").select("*").eq("id", id);
        if (error) throw error;
        return data;
    },


    async createProfile(profile) {
        const { data, error } = await supabase.from("profiles").insert([profile]);
        if (error) throw error;
        return data;
    },

    async updateProfile(id, profile) {
        const { data, error } = await supabase.from("profiles").update(profile).eq("id", id);
        if (error) throw error;
        return data;
    },

    async deleteProfile(id) {
        const { data, error } = await supabase.from("profiles").delete().eq("id", id);
        if (error) throw error;
        return data;
    },
}

module.exports = ProfileModel;