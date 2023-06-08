import styles from "./nav.module.scss";
import LangChanger from "../LangChanger/LangChanger";
import NavLink from "./NavLink";

const Nav = async ({ locale, dictionary }) => {
  const open = false;
  const menu_list = [
    { text: dictionary.nav.home, href: `/${locale}` },
    { text: dictionary.nav.plant, href: `/${locale}` + "/planten" },
    { text: dictionary.nav.swap, href: `/${locale}` + "/swap" },
    // { text: dictionary.nav.about, href: `/${locale}` + "/over-ons" },
    // { text: "Doneren", href: `/${locale}` + "/doneren" },
    // { text: "Contact", href: `/${locale}` + "/contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__toggle}>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`${styles.nav__list} ${
          open ? styles["nav__list--active"] : ""
        }`}>
        {menu_list.map((item) => (
          <NavLink
            item={item}
            styles={styles}
            locale={locale}
            menu={menu_list}
          />
        ))}
      </ul>
      <LangChanger locale={locale} dictionary={dictionary} />
    </nav>
  );
};

export default Nav;
