import axios from "axios";


export interface iApiError {
    error: string;
    message: string;
  }

const api = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000 //5 sec
})

export default api