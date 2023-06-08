import Header from "@/../components/Header/Header";
import Footer from "@/../components/Footer/Footer";
import { getDictionary } from "../../get-dictionary";

const Layout = async ({ locale, dictionary, children }) => {
  console.log("render layout");
  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      {children}
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
};

export default Layout;
