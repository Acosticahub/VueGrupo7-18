import httpClient from "./httpClient";

const END_POINT3 = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT3);

const countedUsers = () => httpClient.get("/api/countedusers");

const getUser = (username) => httpClient.get(END_POINT3 + "/" + username);

const createUser = (user) => httpClient.post(END_POINT3, user);

const updateUser = (username, user) =>
  httpClient.put(END_POINT3 + "/" + username, user);

const deleteUser = (username) => httpClient.delete(END_POINT3 + "/" + username);

const validateUser = (username, password) => {
  const user = {
    username: username,
    password: password,
  };
  return httpClient.post("/api/authenticate", user);
};

export {
  getAllUsers,
  countedUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  validateUser,
};
