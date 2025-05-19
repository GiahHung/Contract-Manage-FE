import React, { Fragment, useState, useEffect } from "react";
import InfoSideBar from "./sidebar/InfoSideBar";
import LabourContractSideBar from "./sidebar/LabourContractSideBar";
import CommercialContractSideBar from "./sidebar/CommercialContractSideBar";
import ConstructionContractSideBar from "./sidebar/ConstructionContractSideBar";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
function Profile() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const [arrEmployee, setArrEmployee] = useState([]);
  const [arrCustomer, setArrCustomer] = useState([]);
  const [payment, setPayment] = useState([]);
  const listEmployee = useSelector((state) => state.user.arrUser);
  const listCustomer = useSelector((state) => state.contract.listCustomer);
  const listPayment = useSelector((state) => state.contract.listPayment);
  const [showModal, setShowModal] = useState(false);
  const [showInfoSidebar, setShowInfoSidebar] = useState(false);
  const [user, setUser] = useState(userInfo);
  const toggleInfoSidebar = () => setShowInfoSidebar((prev) => !prev);
  const [showLabourContractSidebar, setShowLabourContractSidebar] =
    useState(false);
  const [showCommercialContractSidebar, setShowCommercialContractSidebar] =
    useState(false);
  const [showConstructionContractSidebar, setShowConstructionContractSidebar] =
    useState(false);

  // Redux
  useEffect(() => {
    dispatch(actions.fetchListCustomer());
    dispatch(actions.fetchAllUserPage("", "", "id", "asc"));
    dispatch(actions.fetchPayment());
  }, [dispatch]);
  useEffect(() => {
    if (listEmployee && listEmployee.length > 0) {
      setArrEmployee(listEmployee);
    }
    if (listCustomer && listCustomer.length > 0) {
      setArrCustomer(listCustomer);
    }
    if (listPayment && listPayment.length > 0) {
      setPayment(listPayment);
    }
  }, [listEmployee, listCustomer, listPayment]);
  const toggleModal = () => setShowModal((prev) => !prev);
  const openContractSidebar = (contractType) => {
    if (contractType === "labour") {
      setShowLabourContractSidebar(true);
    } else if (contractType === "commercial") {
      setShowCommercialContractSidebar(true);
    } else if (contractType === "Construction") {
      setShowConstructionContractSidebar(true);
    }
    setShowModal(false);
  };
  const closeContractSidebar = (contractType) => {
    if (contractType === "labour") {
      setShowLabourContractSidebar(false);
    } else if (contractType === "commercial") {
      setShowCommercialContractSidebar(false);
    } else if (contractType === "construction") {
      setShowConstructionContractSidebar(false);
    }
  };
  return (
    <Fragment>
      {/* Header Bar */}
      <div className="relative border-b border-gray-200 h-10 flex items-center justify-end px-5">
        <button
          onClick={toggleModal}
          className="mr-4 bg-yellow-400 hover:bg-yellow-300 px-2 py-1 rounded"
        >
          <i class="fa-solid fa-plus"></i> ADD NEW
        </button>
        <span className="mr-2">{userInfo.name}</span>
        <span
          onClick={toggleInfoSidebar}
          className="px-2 py-1 rounded-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer"
        >
          <i className="fa-solid fa-user-tie"></i>
        </span>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl mb-4 font-bold">
              Chọn loại hợp đồng{" "}
              <i className="fa-regular fa-file ml-2 text-[30px]"></i>
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  openContractSidebar("labour");
                }}
                className="px-4 py-2 bg-white border hover:bg-yellow-400 text-black rounded"
              >
                <div className="flex items-center text-gray-500 hover:text-primary-400">
                  <i className="fa-solid fa-users mr-2 text-[35px]"></i>
                  <span className="text-lg">Lao động</span>
                </div>
              </button>
              <button
                onClick={() => {
                  openContractSidebar("commercial");
                }}
                className="px-4 py-2 bg-white border hover:bg-yellow-400 text-black rounded"
              >
                <div className="flex items-center text-gray-500 hover:text-primary-400">
                  <i className="fa-solid fa-money-check-dollar mr-2 text-[35px]"></i>
                  <span className="text-lg">Thương mại</span>
                </div>
              </button>
              <button
                onClick={() => {
                  openContractSidebar("Construction");
                }}
                className="px-4 py-2 bg-white border hover:bg-yellow-400 text-black rounded"
              >
                <div className="flex items-center text-gray-500 hover:text-primary-400">
                  <i className="fa-solid fa-wrench mr-2 text-[35px]"></i>
                  <span className="text-lg">Xây dựng</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <LabourContractSideBar
        show={showLabourContractSidebar}
        onClose={closeContractSidebar}
        arrEmployee={arrEmployee}
        arrCustomer={arrCustomer}
      />
      <CommercialContractSideBar
        show={showCommercialContractSidebar}
        onClose={closeContractSidebar}
        arrEmployee={arrEmployee}
        arrCustomer={arrCustomer}
        payment={payment}
      />
      <ConstructionContractSideBar
        show={showConstructionContractSidebar}
        onClose={closeContractSidebar}
        arrEmployee={arrEmployee}
        arrCustomer={arrCustomer}
      />
      <InfoSideBar
        info={user}
        show={showInfoSidebar}
        onClose={toggleInfoSidebar}
      />
    </Fragment>
  );
}

export default Profile;
