"use client";
import Link from "next/link";
import styles from "./nav.module.scss";
import { useState } from "react";
import LangChanger from "../LangChanger/LangChanger";
import { usePathname } from "next/navigation";

const Nav = ({ locale }) => {
  const pathname = usePathname();
  const currentPage = pathname.replace(`/${locale}`, "");

  const menu_list = [
    { text: "Home", href: `/${locale}` },
    { text: "Alle stekjes", href: `/${locale}` + "/planten" },
    { text: "Swap", href: `/${locale}` + "/swap" },
    // { text: "Doneren", href: `/${locale}` + "/doneren" },
    // { text: "Contact", href: `/${locale}` + "/contact" },
    // { text: "Over ons", href: `/${locale}` + "/over-ons" },
  ];

  const [open, setOpen] = useState(false);
  const [activeName, setActiveName] = useState(
    menu_list
      .map((item, i) => {
        if (item.href === pathname) return item.text;
      })
      .find((x) => x)
  );

  return (
    <nav className={styles.nav}>
      {/* Set nav active (mobile) */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={styles.nav__toggle}>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${styles.nav__list} ${
          open ? styles["nav__list--active"] : ""
        }`}>
        {menu_list.map((item) => (
          <li
            key={item.text}
            className={`${styles["nav__list-item"]} ${
              item.text === activeName ? styles["nav__list-item--active"] : ""
            }`}>
            <Link href={item.href} className={styles.nav__item}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <LangChanger locale={locale} currentPage={currentPage} />
    </nav>
  );
};

export default Nav;
