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

const handleGetRoleService = () => {
  return axios.get("/api/user/get-list-role");
};

const handleCreateUserService = (data) => {
  return axios.post("/api/user/create", data);
};
const handleEditUserService = (data) => {
  return axios.put("/api/user/edit-user", data);
};
const handleDeleteUserService = (userId) => {
  return axios.delete(`/api/user/delete-user?id=${userId}`);
};
const handleCreateCustomerService = (data) => {
  return axios.post("/api/customer/create-customer", data);
};
const handleEditCustomerService = (data) => {
  return axios.put("/api/customer/edit-customer", data);
};
const handleDeleteCustomerService = (userId) => {
  return axios.delete(`/api/customer/delete-customer?id=${userId}`);
};
const handleGetAllCustomerWithPageService = (
  page,
  limit,
  sortField,
  sortOrder
) => {
  return axios.get(
    `/api/customer/get-all-customer-with-page?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`
  );
};
const handleGetAllUserWithPageService = (page, limit, sortField, sortOrder) => {
  return axios.get(
    `/api/user/get-all-user?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`
  );
};
export {
  handleLoginService,
  handleLogout,
  createContractService,
  handleEditUserService,
  handleGetRoleService,
  handleCreateUserService,
  handleDeleteUserService,
  handleCreateCustomerService,
  handleEditCustomerService,
  handleDeleteCustomerService,
  handleGetAllCustomerWithPageService,
  handleGetAllUserWithPageService,
};
