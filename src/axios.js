import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
instance.defaults.headers["Authorization"] = "AUTH-TOKEn-FROM-INSTANCE";

export default instance;
