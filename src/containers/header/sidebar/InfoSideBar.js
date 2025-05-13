import React from "react";

function InfoSideBar({ show, onClose }) {
  return (
    <>
      {/* Overlay background (optional) */}
      {show && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}

      {/* InfoSideBar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-96 bg-yellow-300 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${show ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          {/* Close button */}
          <button onClick={onClose} className="text-xl leading-none">
            &times;
          </button>
        </div>
        <div className="p-4">
          {/* Content */}
          <h2 className="text-xl font-semibold mb-4">Thông tin cá nhân</h2>
          <div className="flex flex-col items-center mb-6">
            <span className="px-6 py-5 rounded-full bg-white shadow">
              <i className="fa-solid fa-user-tie text-2xl"></i>
            </span>
            <span className="mt-2 text-lg font-medium">
              Trịnh Quốc Gia Hưng
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-bold">Chức vụ:</span>
              <span>Giám đốc</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Số điện thoại:</span>
              <span>0918123762</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Email:</span>
              <span>giahung@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Ngày bắt đầu làm việc:</span>
              <span>11/12/2025</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSideBar;
