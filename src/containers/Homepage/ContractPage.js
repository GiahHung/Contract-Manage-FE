import React,{useEffect,useState} from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  XCircleIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";
function ContractPage() {
  const dispatch = useDispatch();
  const listContract = useSelector((state)=>state.contract.listContract);
  const totalPage = useSelector((state)=>state.contract.totalPage);
  const [arrContract, setArrContract] = useState([]);

  useEffect(() => {
    dispatch(actions.fetchListContract(1, 5, "id", "asc"));
  }, [dispatch]);
  useEffect(() => {
    if (listContract && listContract.length > 0) {
      setArrContract(listContract);
    }
  }, [listContract]);
  console.log("arrContract", arrContract);
  return (
    <div>
      <div class="p-4 bg-white shadow rounded">
        <h2 class="text-xl font-semibold mb-4">Contracts</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div>
            <label class="block text-sm font-medium mb-1" for="customer">
              Customer
            </label>
            <input
              id="customer"
              type="text"
              placeholder="Customer"
              class="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1" for="contractName">
              Contract Name
            </label>
            <input
              id="contractName"
              type="text"
              placeholder="Contract Name"
              class="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1" for="contractType">
              Contract Type
            </label>
            <select
              id="contractType"
              class="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
            >
              <option value="">All types</option>
              <option>Type A</option>
              <option>Type B</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1" for="status">
              Status
            </label>
            <select
              id="status"
              class="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
            >
              <option value="">All statuses</option>
              <option>Active</option>
              <option>Expired</option>
            </select>
          </div>

          <div class="flex space-x-2 mt-2 lg:mt-0">
            <button
              type="button"
              class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:ring focus:ring-yellow-200"
            >
              Filter
            </button>
            <button
              type="button"
              class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 focus:ring focus:ring-gray-200"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-1">
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
            </button>
            <div className="flex space-x-1">
              <button className="w-8 h-8 rounded bg-blue-100 text-blue-600 font-medium">
                1
              </button>
              <button className="w-8 h-8 rounded hover:bg-gray-100">2</button>
              <button className="w-8 h-8 rounded hover:bg-gray-100">3</button>
              <button className="w-8 h-8 rounded hover:bg-gray-100">4</button>
              <button className="w-8 h-8 rounded hover:bg-gray-100">5</button>
            </div>
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="date"
              className="py-1 px-2 border border-gray-300 rounded"
            />
            <span>–</span>
            <input
              type="date"
              className="py-1 px-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-medium text-gray-700">
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">KHÁCH HÀNG</th>
              <th className="px-6 py-3">MÃ HỢP ĐỒNG</th>
              <th className="px-6 py-3">TÊN HỢP ĐỒNG</th>
              <th className="px-6 py-3">GIÁ TRỊ</th>

              <th className="px-6 py-3">NGÀY HẾT HẠN</th>
              <th className="px-6 py-3">TRẠNG THÁI</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {arrContract && arrContract.length > 0 && arrContract.map((item,index)=>{
              return (
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-600 font-medium">
                    <a href="#">{item.id}</a>
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="text-sm">
                      <div className="font-medium">{item.customer}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{item.contract_code}</td>
                  <td className="px-6 py-4 text-sm">{item.title}</td>

                  <td className="px-6 py-4 text-sm">
                    <div>
                      {Number(item.money).toLocaleString("vi-VN") + "đ"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">
                      {moment(item.end_date).format("DD-MM-YYYY")}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <DocumentTextIcon className="h-5 w-5" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <EyeIcon className="h-5 w-5" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <XCircleIcon className="h-5 w-5 text-red-500" />
                    </button>
                  </td>
                </tr>
              );
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContractPage;
