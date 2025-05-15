import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";
function LabourContractSideBar({ show, onClose }) {
  const dispatch = useDispatch();
  const [formLabour, setFormLabour] = useState({
    contract_code: "",
    type_id: "1",
    customer: "",
    employee_id: "",
    money: "",
    title: "",
    start_date: "",
    end_date: "",
    signed_date: "",
    filepath: "",
    position: "",
    work_hour: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  useEffect(() => {
    if (show) {
      setFormLabour({
        contract_code: "",
        type_id: "1",
        customer: "",
        employee_id: "",
        money: "",
        title: "",
        start_date: "",
        end_date: "",
        signed_date: "",
        filepath: "",
        position: "",
        work_hour: "",
      });
      setSelectedFile(null);
      setPreviewURL(null);
    }
  }, [show]);
  const validateForm = () => {
    const requiredFields = [
      "contract_code",
      "employee_id",
      "customer",
      "title",
      "position",
      "money",
      "work_hour",
      "start_date",
      "end_date",
      "signed_date",
    ];

    for (let field of requiredFields) {
      if (!formLabour[field] || formLabour[field].trim() === "") {
        toast.error(`Vui lòng nhập trường: ${field.replace(/_/g, " ")}`);

        return false;
      }
    }

    // Nếu cần kiểm tra ngày kết thúc >= ngày bắt đầu
    if (new Date(formLabour.end_date) < new Date(formLabour.start_date)) {
      toast.error("Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // format date fields
    if (["start_date", "end_date", "signed_date"].includes(name)) {
      setFormLabour((prev) => ({ ...prev, [name]: formatDate(value) }));
    } else {
      setFormLabour((prev) => ({ ...prev, [name]: value }));
    }
  };
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreviewURL(URL.createObjectURL(file));
      setFormLabour((prev) => ({ ...prev, filepath: file.name }));
    } else {
      setPreviewURL(null);
      setFormLabour((prev) => ({ ...prev, filepath: "" }));
    }
  };
  const handleSubmit = () => {
    if (!validateForm()) return;
    dispatch(actions.createContract(formLabour));
    setFormLabour({
      contract_code: "",
      type_id: "1",
      customer: "",
      employee_id: "",
      money: "",
      title: "",
      start_date: "",
      end_date: "",
      signed_date: "",
      filepath: "",
      position: "",
      work_hour: "",
    });
    setSelectedFile(null);
    setPreviewURL(null);
    onClose("labour");
  };
  console.log("formLabour", formLabour);
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
          <span>HỢP ĐỒNG LAO ĐỘNG</span>
          <button
            onClick={() => {
              onClose("labour");
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
              value={formLabour.contract_code}
              onChange={handleChange}
              name="contract_code"
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
              value={formLabour.employee_id}
              onChange={handleChange}
              name="employee_id"
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập tên người tạo hợp đồng"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Bên B <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.customer}
              onChange={handleChange}
              name="customer"
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã tên đối tác"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Tên hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.title}
              onChange={handleChange}
              name="title"
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã tên hợp đồng"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Vị trí <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.position}
              onChange={handleChange}
              name="position"
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mã vị trí"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Mức lương <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.money}
              onChange={handleChange}
              name="money"
              type="number"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mức lương"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Giờ làm việc<span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.work_hour}
              onChange={handleChange}
              name="work_hour"
              type="text"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập giờ làm việc"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày bắt đầu <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.start_date}
              onChange={handleChange}
              name="start_date"
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày kết thúc <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.end_date}
              onChange={handleChange}
              name="end_date"
              type="date"
              className="w-full h-7 px-3 bg-gray-100 border border-gray-300 rounded focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500 mb-1">
              Ngày ký hợp đồng <span className="text-red-500">*</span>
            </label>
            <input
              value={formLabour.signed_date}
              onChange={handleChange}
              name="signed_date"
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
              onClick={() => document.getElementById("fileInput").click()}
            >
              {selectedFile ? (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281760.png"
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

export default LabourContractSideBar;
