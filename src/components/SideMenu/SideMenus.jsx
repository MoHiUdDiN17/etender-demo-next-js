import React, { useState } from "react";
import Image from "next/image";
const SideMenus = ({menu,setIsShow,isShow}) => {
  const [isHovering,setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  const showSingleGrid = inx => {
    if(isShow == inx){
      setIsShow(0);
    }
    else{
      setIsShow(inx);
    }
  }
    return (
        <div>
            <div className={isShow == menu?.id ? "left-menu p-4 rounded" : "left-menu-color p-4 rounded"} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <div className="flex items-center rounded font-medium cursor-pointer list-none left-menu-text"
              onClick={() => showSingleGrid(menu?.id)}
              >  
                {
                  (isHovering || isShow == menu?.id)?
                  <Image
                  className="h-25"
                  src={menu.hoverImage}
                  width={40}
                  height={30}
                  alt="Brac Logo"
                /> :
                <Image
                  className="h-25"
                  src={menu.image}
                  width={40}
                  height={30}
                  alt="Brac Logo"
                />
                }
                <span className={isShow == menu?.id ? "ml-8 font-bold pink-color" : "ml-8 font-bold"}> {menu.name}</span>
                <div className={isShow == menu?.id ? "ml-auto pink-color" : "ml-auto"}>
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </div>
              </div>
              <div className={isShow == menu?.id ? "mt-4" : "hidden"} >
                {
                    menu?.subMenu.map( (subMenu,index) => <div className="left-menu-text hover:bg-red-300 py-2 pl-20 rounded">{subMenu}</div>)
                }
              </div>
            </div>
        </div>
    );
};

export default SideMenus;