import httpClient from "./httpClient";

const END_POINT1 = "/api/clients";

const getAllClients = () => httpClient.get(END_POINT1);

const sortedClients = () => httpClient.get("/api/sortedclients");

const getClient = (identification) => httpClient.get(END_POINT1+"/"+identification);

const createClient = (client) => httpClient.post(END_POINT1, client);

const updateClient = (identification, client) => httpClient.put(END_POINT1+"/"+identification, client);

const deleteClient = (identification) => httpClient.delete(END_POINT1+"/"+identification);
export {
    getAllClients,
    sortedClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
}