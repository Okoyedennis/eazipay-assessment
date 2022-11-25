import React, { useState } from "react";
import "./Home.css";
import { AiOutlineEye } from "react-icons/ai";
import img1 from "../../asset/Frame530.png";
import img2 from "../../asset/Frame24.png";
import img3 from "../../asset/Frame26.png";
import img4 from "../../asset/Frame27.png";
import img5 from "../../asset/Frame28.png";
import img6 from "../../asset/Ellipse25.png";
import img7 from "../../asset/Ellipse26.png";
import img8 from "../../asset/Ellipse27.png";
import Chart from "react-apexcharts";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  const [toggleShow, setToggleShow] = useState(true);

  const [chart] = useState({
    options: {
      colors: ["#e4572e", "#08B64E"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        data: [40, 20, 55, 40, 69, 40, 80, 31],
      },
    ],
  });

  const handleToggleShow = () => {
    setToggleShow(!toggleShow);
  };

  const data = [
    {
      img: img2,
      title: "Add Employee",
      path: "/",
    },
    {
      img: img3,
      title: "Run Payroll",
      path: "/payroll",
    },
    {
      img: img4,
      title: "Quick Loan",
      path: "/loan",
    },
    {
      img: img5,
      title: "Inventory",
      path: "/inventory",
    },
  ];

  const activeData = [
    {
      img: img6,
      name: "Adewale Ajasin",
      details: "Took loan from eazipay",
      date: "August 15, 2022",
      time: "10:35pm",
      processing: "Processing",
    },
    {
      img: img7,
      name: "Badmus Kemis",
      details: "Paid leave allowance..",
      date: "August 13, 2022",
      time: "09:35am",
      processing: "Processing",
    },
    {
      img: img8,
      name: "Dara Ventures",
      details: "Sent invoice and receipt",
      date: "August 12, 2022",
      time: "10:39am",
      processing: "Processing",
    },
    {
      img: img8,
      name: "Dara Ventures",
      details: "Sent invoice and receipt",
      date: "August 12, 2022",
      time: "10:39am",
      processing: "Processing",
    },
    {
      img: img8,
      name: "Dara Ventures",
      details: "Sent invoice and receipt",
      date: "August 12, 2022",
      time: "10:39am",
      processing: "Processing",
    },
  ];
  return (
    <div className="home">
      <div className="home__wrapper contain">
        <section>
          <div className="home-header">
            <h2>Welcome Abasiama</h2>
            <p>Pay and manage your employee in minutes</p>
          </div>

          <div className="home__wallet">
            <div className="home__wallet-left">
              <div className="home__wallet-left-top">
                <div className="home__wallet-left-top--left">
                  <p>Wallet Balance</p>
                  <div className="home__show-hide">
                    <h5>
                      {toggleShow ? "N12,560,078.00" : "****************"}
                    </h5>
                    <AiOutlineEye onClick={handleToggleShow} />
                  </div>
                </div>
                <div className="home__wallet-left-right"></div>
                <div className="home__wallet-left-top--right">
                  <button>Fund Wallet</button>
                </div>
              </div>
              <div className="home__wallet-left-bottom">
                {data.map(({ img, title, path }) => (
                  <Link to={path}>
                    <div className="home__wallet-left-bottom-ind">
                      <img src={img} alt="" />
                      <p>{title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="home__wallet-right">
              <div className="home__wallet-right-top">
                <header>Active Loans</header>
                <small className="next">Next Repayment</small>
                <small className="date">Septermber 20,2022</small>
                <small className="amount">N100,000.00</small>
              </div>
              <div className="home__wallet-right-bottom">
                <p>Total Employee</p>
                <h5>50</h5>
                <img src={img1} alt="" />
                <div className="home__wallet-right-bottom-flex">
                  <small>Male</small>
                  <small>Female</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="graph__wrapper contain">
            <div className="graph-top">
              <div className="graph__first-row">
                <p>Inflow</p>
                <h5>N1,567,552</h5>
              </div>
              <div className="graph__first-second">
                <p>Outflow</p>
                <h5>N1,567,552</h5>
              </div>
              <div className="graph__first-third">
                <select>
                  <option>
                    Sort By <span>Month</span>
                  </option>
                  <option>Custom</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
              <div className="graph__first-fourth">
                <p>Inflow/Outflow</p>
              </div>
            </div>
            <Chart
              options={chart.options}
              series={chart.series}
              type="line"
              width="600"
              className="graph"
            />
          </div>
        </section>
        <section>
          <div className="home__recent-activity">
            <h2>Recent Activities</h2>
            <div className="input__wrapper">
              <input type="text" placeholder="Search recent activities" />
              <div className="icon__wrapper">
                <FiSearch className="icon" />
              </div>
            </div>
            <div className="home__table-wrapper">
              {activeData.map(
                ({ img, name, details, date, time, processing }) => (
                  <div className="home__table-body">
                    <div className="table-body__name">
                      <img src={img} alt="" />
                      <p>{name}</p>
                    </div>
                    <p>{details}</p>
                    <p>{date}</p>
                    <p>{time}</p>
                    <p className="processing">{processing}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
