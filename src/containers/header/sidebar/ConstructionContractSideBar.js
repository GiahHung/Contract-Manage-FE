import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";

function ConstructionContractSideBar({ show, onClose }) {
  const dispatch = useDispatch();
  const [formConstruction, setFormConstruction] = useState({
    contract_code: "",
    type_id: "3",
    customer: "",
    employee_id: "",
    money: "",
    title: "",
    start_date: "",
    end_date: "",
    signed_date: "",
    filepathConstruction: "",
    location: "",
  });
  const [selectedFileConstruction, setSelectedFileConstruction] =
    useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  useEffect(() => {
    if (show) {
      setFormConstruction({
        contract_code: "",
        type_id: "3",
        customer: "",
        employee_id: "",
        money: "",
        title: "",
        start_date: "",
        end_date: "",
        signed_date: "",
        filepathConstruction: "",
        location: "",
      });
      setSelectedFileConstruction(null);
      setPreviewURL(null);
    }
  }, [show]);
  const validateForm = () => {
    const requiredFields = [
      "contract_code",
      "employee_id",
      "customer",
      "title",
      "money",
      "location",
      "start_date",
      "end_date",
      "signed_date",
    ];

    for (let field of requiredFields) {
      if (!formConstruction[field] || formConstruction[field].trim() === "") {
        toast.error(`Vui lòng nhập trường: ${field.replace(/_/g, " ")}`);

        return false;
      }
    }

    // Nếu cần kiểm tra ngày kết thúc >= ngày bắt đầu
    if (
      new Date(formConstruction.end_date) <
      new Date(formConstruction.start_date)
    ) {
      toast.error("Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["start_date", "end_date", "signed_date"].includes(name)) {
      setFormConstruction((prev) => ({ ...prev, [name]: formatDate(value) }));
    } else {
      setFormConstruction((prev) => ({ ...prev, [name]: value }));
    }
  };
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };
  const handleConstructFileChange = (e) => {
    console.log("file conaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const file = e.target.files[0];
    setSelectedFileConstruction(file);

    if (file) {
      setPreviewURL(URL.createObjectURL(file));
      setFormConstruction((prev) => ({
        ...prev,
        filepathConstruction: file.name,
      }));
    } else {
      setPreviewURL(null);
      setFormConstruction((prev) => ({ ...prev, filepathConstruction: "" }));
    }
  };
  const handleSubmit = () => {
    if (!validateForm()) return;
    dispatch(actions.createContract(formConstruction));
    setFormConstruction({
      contract_code: "",
      type_id: "3",
      customer: "",
      employee_id: "",
      money: "",
      title: "",
      start_date: "",
      end_date: "",
      signed_date: "",
      filepathConstruction: "",
      location: "",
    });
    setSelectedFileConstruction(null);
    setPreviewURL(null);
    onClose("construction");
  };
  console.log("formConstruction", formConstruction);
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
          <span>HỢP ĐỒNG XÂY DỰNG</span>
          <button
            onClick={() => {
              onClose("construction");
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
              name="contract_code"
              value={formConstruction.contract_code}
              onChange={handleChange}
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
              name="employee_id"
              value={formConstruction.employee_id}
              onChange={handleChange}
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập tên người tạo hợp đồng"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Bên B <span className="text-red-500">*</span>
            </label>
            <select
              name="customer"
              value={formConstruction.customer}
              onChange={handleChange}
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Chọn công ty --</option>
              <option value="aaaaa">Công ty A</option>
              <option value="bbbbbbb">Công ty B</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Tên hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              value={formConstruction.title}
              onChange={handleChange}
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã tên hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Địa điểm thi công <span className="text-red-500">*</span>
            </label>
            <input
              name="location"
              value={formConstruction.location}
              onChange={handleChange}
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập địa điểm thi công"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngân sách <span className="text-red-500">*</span>
            </label>
            <input
              name="money"
              value={formConstruction.money}
              onChange={handleChange}
              type="number"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập ngân sách"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày bắt đầu <span className="text-red-500">*</span>
            </label>
            <input
              name="start_date"
              value={formConstruction.start_date}
              onChange={handleChange}
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Dự kiến hoàn thành <span className="text-red-500">*</span>
            </label>
            <input
              name="end_date"
              value={formConstruction.end_date}
              onChange={handleChange}
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
              name="signed_date"
              value={formConstruction.signed_date}
              onChange={handleChange}
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã hợp đồng"
            />
          </div>
          <div className="flex flex-col col-span-2 mt-2">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Tệp đính kèm
            </label>

            <div
              className=" border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-400 transition-all"
              onClick={() =>
                document.getElementById("fileInputConstruction").click()
              }
            >
              {selectedFileConstruction ? (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281760.png" // icon file Word (hoặc icon bạn muốn)
                    alt="Word icon"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm text-gray-700 mb-1">
                    {selectedFileConstruction.name}
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
              id="fileInputConstruction"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleConstructFileChange}
              className="hidden "
            />
            {selectedFileConstruction && (
              <div className="">
                {selectedFileConstruction.type === "application/pdf" && (
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
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="bg-yellow-300 w-1/2 py-1 text-gray-400 hover:text-primary-400"
          >
            TẠO HỢP ĐỒNG
          </button>
        </div>
      </div>
    </>
  );
}

export default ConstructionContractSideBar;
