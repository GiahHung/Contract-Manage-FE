import axios from "../axios";

const handleGetAllCodeService = (type) => {
  return axios.get(`/api/all_code?type=${type}`);
};
const handleGetAllProductService = (
  pageInput,
  limitInput,
  sort,
  direction,
  search
) => {
  return axios.get(
    `/api/product/get-page-product?page=${pageInput}&size=${limitInput}&sortBy=${sort}&direction=${direction}&search=${search}`
  );
};

const deleteProductService = (productId) => {
  return axios.delete(`/api/product/delete-product?id=${productId}`);
};

export {
  handleGetAllCodeService,
  handleGetAllProductService,


};
