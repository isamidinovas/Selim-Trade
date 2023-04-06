import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://161.35.29.179:8090/",
});

export default customFetch;
