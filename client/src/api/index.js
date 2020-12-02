// import axios from "axios";
const axios = require("axios");

function generateFullUrl() {
  const domain =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_DOMAIN
      : "localhost:3001";
  const http = process.env.NODE_ENV === "production" ? "https" : "http";
  return `${http}://${domain}`;
}

const api = axios.create({
  baseURL: generateFullUrl() + "/api",
});
export const getAllProducts = () => api.get("/product");
// export const signin = (email,password)=> api.post('/user/auth',(email,password));

export const signin = (email,password)=> api.post('/user/auth', {email,password})

export const getAllCategories = () => api.get("/category");

// export const searchGuideById = (id) => api.get(`guides/:${id}`);
// export const searchGuides = (country, lang, city, cost, comments) =>
//   api.get(
//     `search?${new URLSearchParams({
//       country,
//       lang,
//       city,
//       cost,
//       comments,
//     }).toString()}`
//   );

// const apis = { getAllGuides, searchGuides,searchGuideById };
const apis = {getAllProducts,signin};

export default apis;



