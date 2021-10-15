//esto no tiene nada que ver con cliente, esto sirve pa to2

import axios from "axios";

const httpClient = axios.create({
    timeout: 30000,
    headers: {
        "Content-type": "application/json"
    }
});

export default httpClient;