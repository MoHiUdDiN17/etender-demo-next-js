"use client";
import React, { useState } from "react";
import { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SideMenus from "./SideMenus";
const SideMenu = () => {
  const [isShow,setIsShow] = useState(0);
  const { authentication, setAuthentication } = useContext(AuthContext);
  const leftMenu = [
    {
      "id": 1,
      "name" : "Setup",
      "image" : "/icon_set8.png",
      "hoverImage" : "/icon_set8_.png",
      "subMenu" : [
        "Tender Workflow",
        "Transfer Authority"
      ]
    },
    {
      "id": 2,
      "name" : "Tender Process",
      "image" : "/icon_set2.png",
      "hoverImage" : "/icon_set2_.png",
      "subMenu" : [
        "Tender List",
        "Participant In Tender Offline",
        "EoI List",
        "Pre Bid Meeting"
      ]
    },
    {
      "id": 3,
      "name" : "Supplier Management",
      "image" : "/icon_set9.png",
      "hoverImage" : "/icon_set9_.png",
      "subMenu" : [
        "Supplier Registration",
        "Supplier Approve List",
        "Supplier List",
        "Visitor List"
      ]
    },
    {
      "id": 4,
      "name" : "Tender Evaluation",
      "image" : "/icon_set10.png",
      "hoverImage" : "/icon_set10_.png",
      "subMenu" : [
        "Tender ShortList",
        "Tender Evaluation List"
      ]
    }
  ]
  return (
    <div className={authentication ? "w-[385px] md:w-full" : "hidden"}>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen text-xl">
        <div className="flex items-center p-4 mt-10 left-menu rounded">
          <Image
            className="h-25"
            src="/icon_set1.png"
            width={40}
            height={30}
            alt="Brac Logo"
          />
          <span className="ml-8 pink-color font-bold"> Dashboard</span>
        </div>
        <div className="grid max-w-xl mx-auto mt-2">
        {
          leftMenu.map( (menu,index) =><SideMenus menu={menu} key={index} isShow={isShow} setIsShow={setIsShow}></SideMenus>)
        }
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
