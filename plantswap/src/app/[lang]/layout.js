import "./globals.css";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });

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
    // {
    //   path: "../../public/fonts/custom-font.ext",
    //   weight: "100-900",
    //   style: "normal" | "italic",
    // },
  ],
});

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
