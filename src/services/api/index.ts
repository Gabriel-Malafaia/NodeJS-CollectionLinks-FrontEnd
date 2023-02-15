import axios from "axios";

const Api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://collectionlinks.onrender.com",
});

export default Api;
