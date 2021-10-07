import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 3000,
    headers: {
        "Content-type": "application/json"
    }
});

export default httpClient;