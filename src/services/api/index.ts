import axios from "axios";

const Api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://node-js-collection-links-back-end.vercel.app/",
});

export default Api;
