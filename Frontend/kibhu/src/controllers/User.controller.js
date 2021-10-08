import httpClient from "./httpClient";

const END_POINT3 = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT3);

export {
    getAllUsers
}