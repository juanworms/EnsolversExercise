import axios from "axios";

export default axios.create({
  baseURL: "https://blooming-dawn-71825.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});