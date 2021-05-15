import React, { useEffect, useState } from "react";
import axios from "axios";
import growingUpMan from "./images/growing-up-man.svg";
import growingUpWoman from "./images/growing-up-woman.svg";
import mail from "./images/mail.svg";
import man from "./images/man.svg";
import map from "./images/map.svg";
import padlock from "./images/padlock.svg";
import phone from "./images/phone.svg";
import woman from "./images/woman.svg";
import "./Written";
import "./UserCard.css";
import Written from "./Written";

const UserCard = () => {
  const [userList, setUserList] = useState([]);
  const [currentData, setCurrentData] = useState({
    title: "name",
    info: " ",
  });
  const [written, setWritten] = useState([]);

  const getData = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUserList(res.data.results));
  };

  useEffect(() => getData(), []);

  return (
    <div className="user-card">
      {userList?.map((user, index) => (
        <div key={index}>
          <div className="profil-photo">
            <img id="profil-pic" src={user.picture.large} alt="" />
          </div>
          <div className="info">
            <p>My {currentData.title} is</p>
            <h2>{currentData.info}</h2>
          </div>

          <div className="icon-container">
            <img
              className="icons"
              src={user.gender === "female" ? woman : man}
              alt=""
              onMouseEnter={() =>
                setCurrentData({
                  title: "name",
                  info: user.name.first + " " + user.name.last,
                })
              }
            />
            <img
              className="icons"
              src={mail}
              alt=""
              onMouseEnter={() =>
                setCurrentData({
                  title: "e-mail",
                  info: user.email,
                })
              }
              onMouseLeave={() =>
                setCurrentData({
                  title: "name",
                  info: user.name.first + " " + user.name.last,
                })
              }
            />
            <img
              className="icons"
              src={user.gender === "female" ? growingUpWoman : growingUpMan}
              alt=""
              onMouseEnter={() =>
                setCurrentData({
                  title: "age",
                  info: String(user.dob.age),
                })
              }
              onMouseLeave={() =>
                setCurrentData({
                  title: "name",
                  info: user.name.first + " " + user.name.last,
                })
              }
            />
            <img
              className="icons"
              src={map}
              alt=""
              onMouseEnter={() =>
                setCurrentData({
                  title: "country",
                  info: user.location.country,
                })
              }
              onMouseLeave={() =>
                setCurrentData({
                  title: "name",
                  info: user.name.first + " " + user.name.last,
                })
              }
            />
            <img
              className="icons"
              src={phone}
              alt=""
              onMouseEnter={() =>
                setCurrentData({
                  title: "phone",
                  info: user.phone,
                })
              }
              onMouseLeave={() =>
                setCurrentData({
                  title: "name",
                  info: user.name.first + " " + user.name.last,
                })
              }
            />
            <img
              className="icons"
              src={padlock}
              alt=""
              onMouseEnter={() =>
                setCurrentData({
                  title: "pasword",
                  info: user.login.password,
                })
              }
              onMouseLeave={() =>
                setCurrentData({
                  title: "name",
                  info: user.name.first + " " + user.name.last,
                })
              }
            />
          </div>
          <div className="button-container">
            <button class="btn" onClick={getData}>
              Random User
            </button>
            <button
              className="btn"
              onClick={() => {
                let isRepeated = false;
                written.forEach((item) => {
                  if (userList[0] === item) {
                    isRepeated = true;
                  }
                });
                if (!isRepeated) setWritten(userList.concat(written));
                else alert("You can not add the same user to the list");
              }}
            >
              New User
            </button>
          </div>

          <div>{written.length !== 0 ? <Written info={written} /> : null}</div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
