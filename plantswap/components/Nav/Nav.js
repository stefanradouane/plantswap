"use client";

import styles from "./nav.module.scss";
import LangChanger from "../LangChanger/LangChanger";
import NavLink from "./NavLink";
import NavToggle from "../NavToggle/NavToggle";
import { useState, useEffect, useRef } from "react";

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
  console.log(open);
  useEffect(() => {
    const method = open ? "add" : "remove";
    list.current.classList[method](styles["nav__list--active"]);
    // console.log(list.current);
    // console.log(open);
    // console.log(styles["nav__list--active"]);
    // const navToggle = document.querySelector(`.${styles.nav__toggle}`);
    // const navList = document.querySelector(`.${styles.nav__list}`);
    // navToggle.addEventListener("click", () => {
    //   navList.classList.toggle(styles["nav__list--active"]);
    //   setOpen(!open);
    // });
  }, [open]);

  // useEffect(() => {
  //   const navToggle = document.querySelector(`.${styles.nav__toggle}`);
  //   const navList = document.querySelector(`.${styles.nav__list}`);
  //   navToggle.addEventListener("click", () => {
  //     navList.classList.toggle(styles["nav__list--active"]);
  //     setOpen(!open);
  //   });
  // }, []);

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
      <div
        className={styles.nav__toggle}
        onClick={() => {
          setOpen(!open);
        }}>
        <span></span>
        <span></span>
      </div>
      {/* <NavToggle styles={styles} /> */}
      <LangChanger locale={locale} dictionary={dictionary} open={open} />
    </nav>
  );
};

export default Nav;
