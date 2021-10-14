import httpClient from "./httpClient";

const END_POINT3 = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT3);

const countedUsers = () => httpClient.get("/api/countedusers");


export {
    getAllUsers,
    countedUsers
}