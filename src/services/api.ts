import axios from "axios";

export const api = axios.create({
    baseURL: "https://wg44-ricardocza.onrender.com/api/market/new/database/",
    timeout: 7000
    }
)