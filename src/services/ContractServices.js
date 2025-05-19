import axios from "../axios";

const handleGetListCustomerService = () => {
  return axios.get("/api/customer/get-list-customer");
};
const handleGetPaymentService = () => {
  return axios.get("/api/contract/get-list-payment");
};
const handleGetAllContractService = (page, limit, sortField, sortOrder) => {
  return axios.get(
    `/api/contract/get-all-contract
?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}`
  );
};

const deleteProductService = (productId) => {
  return axios.delete(`/api/product/delete-product?id=${productId}`);
};

export { handleGetListCustomerService, handleGetPaymentService, handleGetAllContractService };
