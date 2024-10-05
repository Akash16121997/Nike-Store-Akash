import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import logo from "../../src/assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../App/CartSlice";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const navScroll = () => {
    if (window.scrollY > 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          !navbar
            ? "absolute  left-0 right-0 bg-black opacity-100 h-[50px] z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav
          className=" flex items-center justify-between nike-container m-3
            "
        >
          <div className=" flex items-cente">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navbar && "filter brightness-0"}`}
            />
          </div>
          <ul className=" flex items-center justify-between gap-2">
            <li className=" grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navbar && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className=" grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navbar && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className=" grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className=" border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navbar && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navbar
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
