import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api", // ← Puerto correcto
});

// 📘 Invocador
export const getSummonerProfile = async (summonerName) => {
  const res = await api.get(`/profile/${summonerName}`);
  return res.data;
};

// 📘 Campeones
export const getChampions = async () => {
  const res = await api.get('/champions');
  return res.data;
};

// 📘 Tierlists
export const getTierlists = async () => {
  const res = await api.get('/tierlist');
  return res.data;
};

export const createTierlist = async (tierlist) => {
  const res = await api.post('/tierlist', tierlist);
  return res.data;
};

// 📘 Builds
export const getBuilds = async (championId) => {
  const res = await api.get(`/builds/${championId}`);
  return res.data;
};

export const createBuild = async (build) => {
  const res = await api.post('/builds', build);
  return res.data;
};
