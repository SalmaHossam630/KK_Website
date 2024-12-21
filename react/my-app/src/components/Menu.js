import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Menu.css";
import image1 from "./assets/Menu1.png";
import image2 from "./assets/Menu2.png";
import image3 from "./assets/Menu3.png";

const Menu = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({ top: "0" });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setHeaderStyle({ top: "-150px" });
      } else {
        setHeaderStyle({ top: "0" });
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const showSidebar = () => {
    const sidebar = document.querySelector(".side-bar");
    if (sidebar) {
      sidebar.style.display = "flex";
    }
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".side-bar");
    if (sidebar) {
      sidebar.style.display = "none";
    }
  };

  return (
    <div>
      <Header style={headerStyle} />

      <main>
        <img src={image1} alt="kk's menu" className="menu" />
        <img src={image2} alt="kk's menu" className="menu" />
        <img src={image3} alt="kk's menu" className="menu" />
      </main>

      <footer></footer>
    </div>
  );
};

export default Menu;
