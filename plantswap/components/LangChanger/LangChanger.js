import Link from "next/link";

const LangChanger = ({ locale, currentPage }) => {
  return (
    <section>
      <Link href={locale === "nl" ? `/en${currentPage}` : `/nl${currentPage}`}>
        {locale === "nl" ? "Switch to 🇬🇧" : "Wissel naar 🇳🇱"}
      </Link>
    </section>
  );
};

export default LangChanger;
