//Instancio el cliente axios
import axios from "axios";
const instance = axios.create({
    baseURL: 'https://run.mocky.io/v3',//base de la api
})
export default instance;