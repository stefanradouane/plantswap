"use client";

import styles from "./nav.module.scss";
import LangChanger from "../LangChanger/LangChanger";
import NavLink from "./NavLink";
import NavToggle from "../NavToggle/NavToggle";
import { useState, useEffect, useRef } from "react";
// import LangChanger from "../LangChanger/LangChanger";

const getMenu = (dictionary, locale) => {
  return [
    { text: dictionary.nav.home, href: `/${locale}` },
    { text: dictionary.nav.plant, href: `/${locale}` + "/planten" },
    { text: dictionary.nav.swap, href: `/${locale}` + "/swap" },
  ];
};

const Nav = ({ locale, dictionary }) => {
  const [open, setOpen] = useState(false);
  const list = useRef(null);
  const menu_list = getMenu(dictionary, locale);

  useEffect(() => {
    const method = open ? "add" : "remove";
    list.current.classList[method](styles["nav__list--active"]);
  }, [open]);

  return (
    <nav className={styles.nav}>
      <ul ref={list} className={styles.nav__list}>
        {menu_list.map((item, key) => (
          <NavLink
            key={key}
            item={item}
            styles={styles}
            locale={locale}
            menu={menu_list}
          />
        ))}
      </ul>
      <LangChanger
        locale={locale}
        dictionary={dictionary}
        className={styles.langchanger}
      />
      <div
        className={styles.nav__toggle}
        onClick={() => {
          setOpen(!open);
        }}>
        <span></span>
        <span></span>
      </div>
      {/* <NavToggle styles={styles} setOpen={setOpen}  /> */}
    </nav>
  );
};

export default Nav;
