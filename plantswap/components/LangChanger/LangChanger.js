"use client";

import Link from "next/link";
import styles from "./langchanger.module.scss";
import { useRouter, usePathname } from "next/navigation";
import Button from "../Button/Button";

const LangChanger = ({ locale, dictionary }) => {
  const pathname = usePathname();
  const currentPage = pathname.replace(`/${locale}`, "");
  const router = useRouter();
  return (
    <section>
      <Button
        next={() =>
          router.replace(
            locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`
          )
        }>
        {dictionary.language.switch}
      </Button>
      {/* <Link href={locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`}> */}
      {/* </Link> */}
    </section>
  );
};

export default LangChanger;
