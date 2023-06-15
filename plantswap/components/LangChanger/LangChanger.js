"use client";

import Link from "next/link";
import styles from "./langchanger.module.scss";
import { useRouter, usePathname } from "next/navigation";
import Button from "../Button/Button";

const LangChanger = ({ locale, dictionary, open }) => {
  const pathname = usePathname();
  const currentPage = pathname.replace(`/${locale}`, "");
  const router = useRouter();
  return (
    <section
      className={
        styles.langchanger + " " + `${open ? styles[`langchanger--shown`] : ""}`
      }>
      <Button
        modifier="square"
        next={() =>
          router.replace(
            locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`
          )
        }>
        {dictionary.language.switch}
      </Button>
      {/* <section>option option</section> */}
    </section>
  );
};

export default LangChanger;
