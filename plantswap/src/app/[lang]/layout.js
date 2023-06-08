import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { getDictionary } from "../../../get-dictionary";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "PlantSwap",
  description: "PlantSwap, identify and swap plants with your neighbours.",
};

const customFont = localFont({
  src: [
    {
      path: "../../../public/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default async function RootLayout({ children, params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={customFont.className}>
        <Header locale={params.lang} dictionary={dictionary} />
        {children}
        <Footer locale={params.lang} dictionary={dictionary} />
      </body>
    </html>
  );
}
