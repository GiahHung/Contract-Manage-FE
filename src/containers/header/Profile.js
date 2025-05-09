import React, { Fragment, useState } from "react";

function Profile() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <Fragment>
      {/* Header Bar */}
      <div className="relative border-b border-gray-200 h-10 flex items-center justify-end px-5">
        <span className="mr-2">Trịnh Quốc Gia Hưng</span>
        <span
          onClick={toggleSidebar}
          className="px-2 py-1 rounded-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer"
        >
          <i className="fa-solid fa-user-tie"></i>
        </span>
      </div>

      {/* Overlay background (optional) */}
      {showSidebar && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-96 bg-yellow-300 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${showSidebar ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          {/* Close button */}
          <button onClick={toggleSidebar} className="text-xl leading-none">
            &times;
          </button>
        </div>
        <div className="p-4">
          {/* Nội dung sidebar */}
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
    </Fragment>
  );
}

export default Profile;
