import React from "react";
import "./Payroll.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { Dropdown, DropdownButton } from "react-bootstrap";
import img1 from "../../asset/Frame579.png";
import img2 from "../../asset/Frame571.png";
import img3 from "../../asset/Frame572.png";
import img4 from "../../asset/Frame573.png";
import img5 from "../../asset/Frame574.png";
import img6 from "../../asset/Frame575.png";
import img7 from "../../asset/Frame576.png";
import img8 from "../../asset/Frame577.png";
import img9 from "../../asset/Frame578.png";
import img10 from "../../asset/Frame580.png";
import { Link } from "react-router-dom";

const Payroll = () => {
  const data = [
    {
      title: "All",
      input: "checkbox",
    },
    {
      title: "A-Z",
      input: "checkbox",
    },
    {
      title: "Z-A",
      input: "checkbox",
    },
    {
      title: "Highest to Least Paid",
      input: "checkbox",
    },
    {
      title: "Least to Highest Paid",
      input: "checkbox",
    },
    {
      title: "Payment Status",
      cName: "active",
    },
  ];

  const dataTwo = [
    {
      img: img1,
      firstName: "Wasiu",
      lastName: "Tiamiyu",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Paid",
      cName: "paid",
    },
    {
      img: img2,
      firstName: "Oyinkosola",
      lastName: "Oshokoya",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Failed",
      cName: "failed",
    },
    {
      img: img3,
      firstName: "Toyin",
      lastName: "Faleke",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Pending",
      cName: "pending",
    },
    {
      img: img4,
      firstName: "Ada",
      lastName: "Ofuomalu",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Failed",
      cName: "failed",
    },
      {
          cEdward: "cEdward",
      img: img5,
      firstName: "Edward",
      lastName: "Madaki",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Paid",
      cName: "paid",
    },
    {
      img: img6,
      firstName: "Inoscent",
      lastName: "Makanaki",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Paid",
      cName: "paid",
    },
    {
      img: img7,
      firstName: "Rashidat",
      lastName: "Oluwasegun",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Paid",
      cName: "paid",
    },
    {
      img: img8,
      firstName: "Tunde",
      lastName: "Kelani",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Paid",
      cName: "paid",
    },
    {
      img: img9,
      firstName: "Efosa",
      lastName: "The Boss",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Pending",
      cName: "pending",
    },
    {
      img: img10,
      firstName: "Sandra",
      lastName: "Odinakachi",
      grossPay: "N356,015.94",
      netPay: "N356,015.94",
      datePaid: "02/09/2022",
      status: "Pending",
      cName: "pending",
    },
  ];
  return (
    <div className="payroll">
      <div className="payroll__wrapper contain">
        <div className="payroll__navigation">
          <p>Payroll / Payroll History</p>
          <Link to="/">
            <div className="payroll__back">
              <IoIosArrowBack />
              <p>Back</p>
            </div>
          </Link>
        </div>
        <div className="payroll__input-button__wrapper">
          <div className="input__wrapper">
            <input type="text" placeholder="Search employee" />
            <div className="icon__wrapper">
              <FiSearch className="icon" />
            </div>
          </div>
          <div className="payroll__navigation-right">
            <DropdownButton
              className="btn"
              id="dropdown-basic-button"
              title={"Filter All"}
            >
              {data.map(({ title, input, cName }) => (
                <div className="dropdown__content">
                  {input && <input type={input} />}
                  <Dropdown.Item className={cName}>{title}</Dropdown.Item>
                </div>
              ))}
            </DropdownButton>
            <button className="payroll__btn">Run Payroll</button>
            <button className="payslip__btn">Send Payslip(s)</button>
          </div>
        </div>

        <div className="payroll__summary">
          <h5>Total Run Payroll For August 2022</h5>
          <div className="payroll__summary-content">
            <div className="payroll__summary-content-ind">
              <p>Total Staff Paid</p>
              <h4>120</h4>
            </div>
            <div className="payroll__summary-content-ind">
              <p>Total Gross Salary</p>
              <h4>N10,234,654.00</h4>
            </div>
            <div className="payroll__summary-content-ind">
              <p>Total Net Salary</p>
              <h4>N10,234,654.00</h4>
            </div>
            <div className="payroll__summary-content-ind">
              <p>Total Deduction</p>
              <h4>N234,654.00</h4>
            </div>
          </div>
        </div>

        <div className="payroll__table-wrapper">
          <div className="payroll__table-header">
            <div className="payroll__table-header__left">
              <h4>August 2022</h4>
            </div>
            <div className="payroll__table-header__right">
              <div className="payroll__table-header__right-ind">
                <p>Download</p>
                <BsDownload />
              </div>
              <div className="payroll__table-header__right-ind">
                <p>Share</p>
                <BiShareAlt />
              </div>
              <div className="payroll__table-header__right-ind">
                <p>Print</p>
                <AiOutlinePrinter />
              </div>
            </div>
          </div>
          <div className="payroll__table-body">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">FIRST NAME</th>
                  <th scope="col">LAST NAME</th>
                  <th scope="col">GROSS PAY</th>
                  <th scope="col">NET PAY</th>
                  <th scope="col">DATE PAID</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {dataTwo.map(
                  ({
                    img,
                    firstName,
                    lastName,
                    grossPay,
                    netPay,
                    datePaid,
                    status,
                    cName,
                    cEdward,
                  }) => (
                    <tr>
                      <th scope="row" className={cEdward}>
                        <input type="checkbox" />
                      </th>
                      <td className={cEdward ? cEdward : "td-bgs"}>
                        <img src={img} alt="" />
                        {firstName}
                      </td>
                      <td className={cEdward ? cEdward : "td-bg"}>
                        {lastName}
                      </td>
                      <td className={cEdward}>{grossPay}</td>
                      <td className={cEdward}>{netPay}</td>
                      <td className={cEdward}>{datePaid}</td>
                      <td className={cEdward ? cEdward : cName}>{status}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <div className="table__footer">
              <p>Page</p>
              <p>1</p>
              <p>of</p>
              <p>5</p>
              <IoIosArrowBack className="icon_left" />
              <IoIosArrowForward className="icon_right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
