import React from "react";
import "./QuickLone.css";
import { MdAdd } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import img1 from "../../asset/Frame774.png";
import img2 from "../../asset/Frame775.png";
import img3 from "../../asset/Frame776.png";
import img4 from "../../asset/Frame777.png";
import { Link } from "react-router-dom";

const QuickLone = () => {
  const data = [
    {
      img: img1,
      text: "Ada Okonye",
    },
    {
      img: img2,
      text: "Edward Madaki",
    },
    {
      img: img3,
      text: "Adekule Ajasin",
    },
    {
      img: img4,
      text: "Zainab Muhammad",
    },
  ];

  const dataTwo = [
    {
      text: "View Employee",
    },
    {
      text: "Add Bonus and Deduction",
    },
    {
      text: "Add Compliance",
    },
    {
      text: "Edit Compliance",
    },
    {
      text: "Transaction History",
    },
    {
      text: "Fund Wallet",
    },
    {
      text: "Manage Inventory",
    },
    {
      text: "Manage Invoice",
    },
    {
      text: "Manage Receipt",
    },
    {
      text: "Manage Receipt",
    },
    {
      text: "Book Keeping Settings",
    },
  ];

  const dataThree = [
    {
      text: "Purchase or Change Plan",
    },
    {
      text: "Add Employee",
    },
    {
      text: "Edit Employee",
    },
    {
      text: "Add Salary",
    },
    {
      text: "Edit Salary",
    },
    {
      text: "Run Payroll",
    },
    {
      text: "Archive Employee",
    },
    {
      text: "Pay Compliance",
    },
    {
      text: "Fund Wallet",
    },
    {
      text: "Withdraw from Wallet",
    },
    {
      text: "Manage Account",
    },
    {
      text: "Manage Business Profile",
    },
    {
      text: "Manage Team",
    },
  ];
  return (
    <div className="quickLone">
      <div className="quickLone__wrapper contain">
        <div className="quickLone__wrapper--header">
          <Link to="/">
            <p className="settings">Settings / Manage Account</p>
          </Link>
          <h4>Settings</h4>
          <div className="quickLone__wrapper-nav">
            <p>Profile</p>
            <p>Manage Account</p>
            <p>Business Profile</p>
            <p className="active">Team</p>
            <p>Security</p>
            <p>Refer</p>
          </div>
        </div>
        <div className="quickLone__wrapper-body">
          <div className="quickLone__wrapper-body-header">
            <h4>Manage Roles</h4>
          </div>
          <div className="quickLone__wrapper-content__container">
            <div className="quickLone__wrapper-body-left">
              <p>DEFAULT ROLES</p>
              <p>Admin</p>
              <p>Assistant</p>
              <p>Auditor</p>
              <p>Custom Roles</p>
              <p>Head Account</p>
              <p>
                You can create your own custom roles, and choose exactly what
                team members can see and do.
              </p>
              <button className="btn__wrapper">
                <MdAdd />
                Create New Role
              </button>
            </div>
            <div className="quickLone__wrapper-body-right">
              <div className="quickLone__wrapper-body-right-top">
                <h5>Head Account</h5>
                <button>
                  Edit
                  <BiEditAlt />
                </button>
              </div>
              <p className="first-p">
                Head make sure that financial reports are up-to-date and
                compliant with standards. They produce periodic activity updates
                for top management and an annual budget proposal.
              </p>
              <p className="first-p">Team Members with the role</p>
              <div className="quickLone__button-wrapper">
                {data.map(({ img, text }) => (
                  <button>
                    <img src={img} alt="" />
                    {text}
                  </button>
                ))}
              </div>
              <div className="quickLone__wrapper-body-main__container">
                <div className="quickLone__wrapper-body-main-left">
                  <h4>What Role Can Access</h4>
                  {dataTwo.map(({ text }) => (
                    <div className="quickLone__wrapper-body-main-left-body">
                      <p>{text}</p>
                      <IoMdCheckmark />
                    </div>
                  ))}
                </div>
                <div className="quickLone__wrapper-body-main-right">
                  <h4>What Role Cannot Access</h4>
                  {dataThree.map(({ text }) => (
                    <div className="quickLone__wrapper-body-main-right-body">
                      <p>{text}</p>
                      <AiOutlineClose />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLone;
