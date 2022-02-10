import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3333",
});

export const getInfo = (url) => {
  return instance.get(url).then(response => {
    return response.data
  })
}