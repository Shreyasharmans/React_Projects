import Axios from "axios"; //npm i axios

export const getAllPhotos = () =>
  Axios.put("https://jsonplaceholder.typicode.com/photos");