import Header from "@/../components/Header/Header";
import Footer from "@/../components/Footer/Footer";
import { getDictionary } from "../../get-dictionary";

const Layout = async ({ locale, dictionary, children, noFooter }) => {
  console.log("render layout");
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      {children}
      {!noFooter && <Footer locale={locale} dictionary={dictionary} />}
    </>
  );
};

export default Layout;
