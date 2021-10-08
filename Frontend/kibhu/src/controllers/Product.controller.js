import httpClient from "./httpClient";

const END_POINT2 = "/api/products";

const getAllProducts = () => httpClient.get(END_POINT2);

export { getAllProducts };
