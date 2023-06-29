"use client";

import Link from "next/link";
import styles from "./langchanger.module.scss";
import { useRouter, usePathname } from "next/navigation";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Image from "next/image";

const LangChanger = ({ locale, dictionary, open }) => {
  const pathname = usePathname();
  const currentPage = pathname.replace(`/${locale}`, "");
  const router = useRouter();
  return (
    <section
      className={
        styles.langchanger + " " + `${open ? styles[`langchanger--shown`] : ""}`
      }>
      <Button className={styles.langchanger__button}
        modifier="clean"
        next={() =>
          router.replace(
            locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`
          )
        }>
        {dictionary.language.switch}
        
          <Image
          src={"/images/swaplang.png"}
          alt={"swap icon"}
          width={64}
          height={64}
          />
    
      </Button>
      {/* <section>option option</section> */}
    </section>
  );
};

export default LangChanger;
