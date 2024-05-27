"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Link from "next/link";
import Login from "../Login/Login";
import { getSession } from "../../lib";
import Logout from "../Logout/Logout";
import SignUp from "../SignUp/SignUp";
const Menu = ({ currentUser }) => {
  const { authentication, setAuthentication } = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);
  const [isDropdownMenu, setDropdownMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalSignUp,setOpenModalSignUp] = useState(false);
  const toggleMenu = () => {
    setDropdownMenu(!isDropdownMenu);
  };
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = await getSession();
      if (currentUser) {
        setAuthentication(currentUser);
      } else {
        setAuthentication(null);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between sticky-top bg-white shadow-md">
        <div className="flex justify-between pink-bg-color py-2">
          {authentication ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 mt-2" width="35" height="50" viewBox="0 0 576 512" fill='#FFFFFF'>
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <></>
          )}

          <Image
            className="h-14 lg:h-auto py-2 ml-4 lg:ml-14 mr-32"
            src="/logo-white.png"
            width={150}
            height={45}
            alt="Brac Logo"
          />

          <button onClick={toggleMenu} type="button" className="lg:hidden">
            <svg
              className="w-5 h-7 text-slate-900 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
              />
            </svg>
          </button>
        </div>

        <div
          className={
            isDropdownMenu
              ? "hidden lg:block md:w-auto py-2"
              : "lg:block md:w-auto pb-0"
          }
        >
          {authentication ? (
            <ul className="flex flex-col lg:flex-row justify-end text-right">
              <li className="py-2 lg:py-4 pr-2 lg:pr-4">
                <button className="bg-transparent hover:text-red-500 pink-color font-semibold py-2 px-4 border-pink pink-color round-100px">
                  Procurement
                </button>
              </li>
              <li className="py-1 lg:py-4 flex justify-end mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2"
                  width="40"
                  height="30"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                </svg>
              </li>
              <li
                className="py-1 lg:py-4 text-right flex justify-end"
                onMouseEnter={() => setIsShown(true)}
              >
                <Image
                  className="h-10 lg:h-auto py-1 ml-2 rounded-full"
                  src="/user-icon.jpg"
                  width={40}
                  height={10}
                  alt="Brac Logo"
                />
                <div className="ml-3 text-xl py-2 mr-3">
                  Welcome {authentication?.user?.username}
                </div>
              </li>
              <li className="hidden lg:block">
                <button
                  onMouseEnter={() => setIsShown(true)}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  type="button"
                  className="py-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-5 mr-10 mt-3"
                    width="50"
                    height="25"
                    aria-hidden="true"
                    viewBox="0 0 448 512"
                    fill="#c5c9cd"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </button>
              </li>
              <li className="block lg:hidden">
                <Logout></Logout>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col lg:flex-row justify-end py-4">
              <li className="text-xl text-right pr-2 lg:pr-4 py-2">
                <Link href="/">
                  <b>HOME</b>
                </Link>
              </li>
              <li className="text-xl text-right pr-2 lg:pr-4 py-2">
                <Link href="/">
                  <b>ABOUT</b>
                </Link>
              </li>
              <li className="text-xl text-right pr-2 lg:pr-4 py-2">
                <Link href="/">
                  <b>PARTNER SERVICES</b>
                </Link>
              </li>
              <li className="text-right py-2 lg:py-0 pr-2 lg:pr-4">
                  <button 
                  onClick={() => {
                    setOpenModal(false);
                    setOpenModalSignUp(true);
                  }}
                  className="bg-transparent hover:text-red-500 pink-color font-semibold py-2 px-4 border-pink pink-color round-100px">
                    SIGN UP
                  </button>
              </li>
              <li className="text-right py-2 lg:py-0 pr-2 lg:pr-14">
                <button
                  onClick={() => {
                    setOpenModal(true);
                    setOpenModalSignUp(false);
                  }}
                  className="bg-transparent hover:text-red-500 pink-color font-semibold py-2 px-4 border-pink pink-color round-100px"
                >
                  LOGIN
                </button>
              </li>
            </ul>
          )}
        </div>
        <Login openModal={openModal} setOpenModal={setOpenModal} setOpenModalSignUp={setOpenModalSignUp}></Login>
        <SignUp setOpenModal={setOpenModal} openModalSignUp={openModalSignUp} setOpenModalSignUp={setOpenModalSignUp}></SignUp>
      </div>
      <div className="hidden lg:flex justify-end mr-12 ">
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={
            isShown
              ? " bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute"
              : "hidden"
          }
        >
          <Logout></Logout>
        </div>
      </div>
    </div>
  );
};

export default Menu;
