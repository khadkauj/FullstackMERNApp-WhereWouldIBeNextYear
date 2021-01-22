import axios from "axios";
const instance = axios.create({
      baseURL: "https://fullstack-me-next-year.herokuapp.com",
      headers: { "Access-Control-Allow-Origin": "*" },
});

export default instance;
