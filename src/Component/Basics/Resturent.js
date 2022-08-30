import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";
import "./Style.css";

const uniqueList = [
  ...new Set(
    Menu.map((currElm) => {
      return currElm.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);

  const [menuList, setMenuList] = useState(uniqueList);
  console.log(setMenuList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElm) => {
      return currElm.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturent;
