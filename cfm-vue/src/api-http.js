import axios from "axios";
export default axios.create({
  baseURL: "http://120.79.189.218:12530/api",
  headers: {
    "Content-type": "application/json"
  }
});