import httpClient from "./httpClient";

const END_POINT2 = "/api/products";

const getAllProducts = () => httpClient.get(END_POINT2);

const getProduct = (reference) => httpClient.get(END_POINT2 + "/" + reference);

const createProduct = (product) => httpClient.post(END_POINT2, product);

const updateProduct = (reference, product) =>
  httpClient.put(END_POINT2 + "/" + reference, product);

const deleteProduct = (reference) =>
  httpClient.delete(END_POINT2 + "/" + reference);

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
