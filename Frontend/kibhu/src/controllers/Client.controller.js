import httpClient from "./httpClient";

const END_POINT1 = "/api/clients";

const getAllClients = () => httpClient.get(END_POINT1);

export {
    getAllClients
}