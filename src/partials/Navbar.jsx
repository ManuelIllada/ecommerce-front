import React from "react";
import Cart from "./Cart";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDropdownMenu } from "react-icons/rx";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import LogOutModal from "./LogOutModal";
import ProfileEdit from "./ProfileEdit";

function NavBar() {
  const stateCart = useSelector((state) => state.productCart);
  const [background, setBackground] = useState(false);
  const [category, setCategory] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      setCategory(response.data);
    };
    getCategory();
  }, []);
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setBackground(true);
    } else if (window.innerWidth < 992 && window.scrollY < 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  window.addEventListener("resize", changeBackground);
  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      id="prueba"
      className={` fixed-top navbar navbar-expand-lg ${
        background ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="col-lg-12 col-12"
            style={{ height: "3rem" }}
            src="https://cdn.discordapp.com/attachments/992571782294929533/1089839115530412063/logo.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <RxDropdownMenu size={40} color="white" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-align-right">
            {category.map((item) => (
              <li
                key={item.id}
                className="nav-item ms-3 d-flex justify-content-end"
              >
                <Link
                  state={item}
                  key={item.id}
                  to={`/${item.slug}`}
                  className="text-decoration-none  text-white fw-bold "
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-3 d-flex justify-content-end">
              <AiOutlineSearch
                className="text-decoration-none text-white fw-bold"
                size={24}
              />
            </li>
            {user === null ? (
              <li className="nav-item ms-3 d-flex justify-content-end">
                <Link
                  to={`/login`}
                  className="text-decoration-none text-white fw-bold"
                >
                  <FaUserAstronaut size={20} />
                </Link>
              </li>
            ) : (
              <li className="nav-item ms-3 d-flex justify-content-end dropdown">
                <Button
                  className="btn text-white bg-transparent p-0 me-auto"
                  variant="link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserAstronaut size={20} />
                </Button>
                <ul class="dropdown-menu bg-dark bg-opacity-50">
                  <li>
                    <ProfileEdit user={user} />
                  </li>
                  <li>
                    <a class="link-secondary dropdown-item text-white" href="#">
                      ShopList
                    </a>
                  </li>
                  <li>
                    <LogOutModal />
                  </li>
                </ul>
              </li>
            )}
            <li className="nav-item ms-3 d-flex justify-content-end">
              <div className="position-relative">
                <Button className="bg-transparent p-0 me-auto" variant="link">
                  <Cart />
                </Button>
                <div className="text-warning  text-center position-absolute top-0 start-100 translate-middle">
                  {stateCart.reduce(
                    (accumulator, currentItem) =>
                      accumulator + currentItem.quantity,
                    0
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
