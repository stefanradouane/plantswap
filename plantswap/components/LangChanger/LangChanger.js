"use client";

import Link from "next/link";
import styles from "./langchanger.module.scss";
import { usePathname } from "next/navigation";

const LangChanger = ({ locale, dictionary }) => {
  const pathname = usePathname();
  const currentPage = pathname.replace(`/${locale}`, "");

  return (
    <section>
      <Link href={locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`}>
        {dictionary.language.switch}
      </Link>
    </section>
  );
};

export default LangChanger;
