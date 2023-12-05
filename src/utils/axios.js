//Instancio el cliente axios
import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost/api',//base de la api
})
export default instance;