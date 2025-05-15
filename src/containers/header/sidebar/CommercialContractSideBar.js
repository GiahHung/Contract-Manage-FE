import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";

function CommercialContractSideBar({ show, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreviewURL(URL.createObjectURL(file));
    } else {
      setPreviewURL(null);
    }
  };
  console.log("selectedFile", selectedFile);
  return (
    <>
      {show && <div className="fixed inset-0 bg-black bg-opacity-30 z-40" />}
      <div
        className={`
           fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-50
           transform transition-transform duration-300 ease-in-out
           ${show ? "translate-x-0" : "translate-x-full"}
         `}
      >
        <div className="flex justify-end p-4 flex items-center justify-between bg-yellow-300">
          <span>HỢP ĐỒNG THƯƠNG MẠI</span>
          <button
            onClick={() => {
              onClose("commercial");
            }}
            className="text-xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mx-6 my-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Mã hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã hợp đồng"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Người tạo hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập tên người tạo hợp đồng"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Bên B <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400">
              <option value="active">Công ty A</option>
              <option value="inactive">Công ty B</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Tên hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã tên hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Mặt hàng <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mặt hàng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Phương thức thanh toán <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400">
              <option value="active">Chuyển khoản</option>
              <option value="inactive">Tiền mặt</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Giá trị <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập giá trị hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày bắt đầu <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày kết thúc <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày ký hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Trạng thái <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400">
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Ngừng hoạt động</option>
            </select>
          </div>
          <div className="flex flex-col col-span-2 mt-2">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Tệp đính kèm
            </label>

            <div
              className=" border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-400 transition-all"
              onClick={() => document.getElementById("fileInput").click()}
            >
              {selectedFile ? (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281760.png" // icon file Word (hoặc icon bạn muốn)
                    alt="Word icon"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-gray-700 mb-1">
                    {selectedFile.name}
                  </p>
                </>
              ) : (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                    alt="Upload icon"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-gray-400">Upload File</p>
                </>
              )}
            </div>

            <input
              id="fileInput"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden "
            />
            {selectedFile && (
              <div className="">
                {selectedFile.type === "application/pdf" && (
                  <iframe
                    src={previewURL}
                    title="PDF Preview"
                    className="mt-2 w-full h-60 border"
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <button className="bg-gray-200 w-1/2 py-1 text-gray-400 hover:text-primary-400">
            XÓA
          </button>
          <button className="bg-yellow-300 w-1/2 py-1 text-gray-400 hover:text-primary-400">
            TẠO HỢP ĐỒNG
          </button>
        </div>
      </div>
    </>
  );
}

export default CommercialContractSideBar;
