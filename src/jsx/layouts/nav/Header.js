import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import LogoutPage from './Logout';
import profile from "../../../images/profile/17.jpg";
import { ThemeContext } from "../../../context/ThemeContext";

const Header = ({ onNote }) => {
  const { background, changeBackground } = useContext(ThemeContext);
  const [userName, setUserName] = useState("");
  const [finalName, setFinalName] = useState(""); // Corrected variable name
  const location = useLocation();

  // Extracting and updating finalName whenever the path changes
  useEffect(() => {
    const path = location.pathname.split("/");
    const name = path[path.length - 1].split("-");
    const filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
    const finalName = filterName
      .filter(
        (f) =>
          ![
            "app",
            "ui",
            "uc",
            "basic",
            "jquery",
            "table",
            "page",
            "email",
            "ecom",
            "chart",
            "editor",
          ].includes(f)
      )
      .join(" ");
    setFinalName(finalName); // Corrected function name
  }, [location.pathname]);

  // Function to toggle theme mode
  function ChangeMode() {
    if (background.value === "light") {
      changeBackground({ value: "dark", label: "Dark" });
    } else {
      changeBackground({ value: "light", label: "Light" });
    }
  }

  // Function to set the user name
  useEffect(() => {
    const storedUserName = localStorage.getItem("name");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {finalName.length === 0 ? "Dashboard" : finalName}
              </div>
            </div>

            <ul className="navbar-nav header-right">

              <li className="nav-item dropdown notification_dropdown"
                  onClick={ChangeMode}
              >
                  <Link to={"#"} className={`nav-link bell dz-theme-mode ${background.value==="dark" ? 'active': ''}`}
                  >
                      <i id="icon-light" className="fas fa-sun"></i>
                      <i id="icon-dark" className="fas fa-moon"></i>									
                  </Link>
							</li>


    

              <Dropdown as="li" className="nav-item dropdown header-profile">
                <Dropdown.Toggle
                  variant=""
                  className="nav-link i-false"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <img src={profile} width={20} alt="" />
                  <div className="header-info">
                    <span className="text-black">
                      <strong >{userName.toUpperCase()}</strong>
                    </span>
                    <p className="fs-12 mb-0">Super Admin</p>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu align="right" className="mt-2">
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <span className="ms-2">Profile </span>
                  </Link>
                  <Link to="/email-inbox" className="dropdown-item ai-icon">
                    <svg
                      id="icon-inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-success"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="ms-2">Inbox </span>
                  </Link>
                  <LogoutPage />
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
