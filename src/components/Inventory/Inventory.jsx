import React from "react";
import "./Inventory.css";
import { RiAddLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import img1 from "../../asset/IMG-00281.png";
import img2 from "../../asset/Frame708.png";
import img3 from "../../asset/IMG-00282.png";
import img4 from "../../asset/Frame709.png";
import img5 from "../../asset/IMG-00287.png";
import img6 from "../../asset/Frame705.png";
import { Link } from "react-router-dom";

const Inventory = () => {
  const data = [
    {
      passport: img1,
      name: "Tiamiyu Wasiu Oladimeji",
      email: "tmwasiu7@gmail.com",
      phone: "08160178711",
      bvn: "8160178711",
      address: "16, Adebanjo Ammed Street, Ajah",
      idPhoto: img2,
      bgColor: "lightBlue",
    },
    {
      passport: img3,
      name: "Ejiro Odiamakwu Kelvin",
      email: "tmwasiu7@gmail.com",
      phone: "08160178711",
      bvn: "8160178711",
      address: "16, Adebanjo Ammed Street, Ajah",
      idPhoto: img4,
      bgColor: "lightGray",
    },
    {
      passport: img5,
      name: "Aderonke Emmanuel Victor",
      email: "Aderonke34@gmail.com",
      phone: "08160178711",
      bvn: "8160178711",
      address: "16, Adebanjo Ammed Street, Ajah",
      idPhoto: img6,
      bgColor: "gold",
    },
  ];
  return (
    <div className="inventory">
      <div className="inventory__wrapper contain">
        <div className="quickLone__wrapper--header">
          <Link to="/">
            <p className="settings">Settings / Manage Account</p>
          </Link>
          <h2>Settings</h2>
          <div className="quickLone__wrapper-nav">
            <p>Profile</p>
            <p>Manage Account</p>
            <p className="active">Business Profile</p>
            <p>Team</p>
            <p>Security</p>
            <p>Refer</p>
          </div>
        </div>

        <div className="inventory__body">
          <div className="inventory__body-left">
            <p>Company</p>
            <p>CEO/Founder</p>
            <p>Company Directors</p>
            <p>Account Information</p>
            <p>Branch/Department</p>
          </div>
          <div className="inventory__body-right">
            <div className="inventory__body-right-top">
              <h5>Business Owner/CEO/Founder</h5>
              <button>
                <RiAddLine />
                Add More
              </button>
            </div>
            {data.map(
              ({
                passport,
                name,
                email,
                phone,
                bvn,
                address,
                idPhoto,
                bgColor,
              }) => (
                <div className="inventory__body-right-body">
                  <div className={`inventory__body-right-body-left ${bgColor}`}>
                    <img src={passport} alt="" />
                    <button className="upload">
                      <FiUpload />
                      Upload
                    </button>
                    <button className="cancel">
                      <GiCancel />
                      Cancel
                    </button>
                  </div>
                  <div className="inventory__body-right-body-right">
                    <h3>{name}</h3>
                    <p>
                      Email: <span>{email}</span>
                    </p>
                    <p>
                      Phone Number: <span>{phone}</span>
                    </p>
                    <p>
                      BVN: <span>{bvn}</span>
                    </p>
                    <p>
                      House Address:
                      <span>{address}</span>
                    </p>
                    <div className="inventory__body-right-body-right-bottom">
                      <p>Means of Identification</p>
                      <div className="image--wrapper">
                        <img src={idPhoto} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
