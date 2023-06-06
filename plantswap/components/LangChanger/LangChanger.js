import Link from "next/link";
import styles from "./langchanger.module.scss";

const LangChanger = ({ locale, currentPage, dictionary }) => {
  return (
    <section>
      <Link href={locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`}>
        {dictionary.language.switch}
      </Link>
    </section>
  );
};

export default LangChanger;
