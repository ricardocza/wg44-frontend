import axios from "axios";

export const api = axios.create({
    baseURL: "https://wg44.up.railway.app/api/market/new/database/",
    // baseURL: "http://127.0.0.1:8000/api/market/new/database/",
    timeout: 7000
    }
)