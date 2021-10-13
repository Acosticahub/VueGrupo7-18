import httpClient from "./httpClient";

const END_POINT4 = "/api/supliers";

const getAllSupliers = () => httpClient.get(END_POINT4);

const getSuplier = (ruc) => httpClient.get(END_POINT4+"/"+ruc);

const createSuplier = (suplier) => httpClient.post(END_POINT4, suplier);

const updateSuplier = (ruc, suplier) => httpClient.put(END_POINT4+"/"+ruc, suplier);

const deleteSuplier = (ruc) => httpClient.delete(END_POINT4+"/"+ruc);
export {
    getAllSupliers,
    getSuplier,
    createSuplier,
    updateSuplier,
    deleteSuplier
}