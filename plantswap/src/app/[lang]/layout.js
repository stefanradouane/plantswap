import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "PlantSwap",
  description: "PlantSwap, identify and swap plants with your neighbours.",
};

const customFont = localFont({
  src: [
    {
      path: "../../../public/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/GT-Flexa-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
