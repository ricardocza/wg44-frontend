import axios from "axios";

export const api = axios.create({
    baseURL: "https://web-production-d0f1c.up.railway.app",
    // baseURL: "http://127.0.0.1:8000",
    timeout: 7000
    }
)