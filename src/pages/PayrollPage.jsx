import React from "react";
import Payroll from "../components/Payroll/Payroll";
import Sidebar from "../components/sidebar/Sidebar";

const PayrollPage = () => {
  return (
    <div>
      <Sidebar />
      <Payroll />
    </div>
  );
};

export default PayrollPage;
