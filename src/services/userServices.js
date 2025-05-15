import axios from "../axios";

const handleLoginService = (data) => {
  return axios.post("/api/user/login", data);
};

const createContractService = (data) => {
  return axios.post("/api/contract/create-contract", data);
};
const handleLogout = (refreshToken) => {
  return axios.post("/api/employee/logout", refreshToken);
};

export { handleLoginService, handleLogout, createContractService };
