import axios from "axios";
<<<<<<< HEAD
const baseUrl = 'http://127.0.0.1:8000/'
=======
const baseUrl = 'http://localhost:8000/'
>>>>>>> 371ce00d7f23e58ef8125bf5eb2c797254b06f90

const AxiosInstance = axios.create({
    baseURL : baseUrl,
    timeout: 5000,
    headers:{
        "Content-Type": "application/json",
        accept: "application/json"
    }
})

export default AxiosInstance