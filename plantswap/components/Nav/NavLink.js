"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ item, styles, locale, menu }) {
  const pathname = usePathname();
  const currentPage = pathname.replace(`/${locale}`, "");
  const activeName = menu
    .map((item, i) => {
      if (item.href === pathname) return item.text;
    })
    .find((x) => x);

  return (
    <li
      key={item.text}
      className={`${styles["nav__list-item"]} ${
        item.text === activeName ? styles["nav__list-item--active"] : ""
      }`}>
      <Link href={item.href} className={styles.nav__item}>
        {item.text}
      </Link>
    </li>
  );
}
