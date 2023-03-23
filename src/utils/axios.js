import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://198.199.91.23/",
});

export default customFetch;
