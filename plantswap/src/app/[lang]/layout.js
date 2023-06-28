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

export default function RootLayout(props) {
  const { children, params,req } = props;
  console.log(props)
  
  return (
    <html lang={params.lang}>
      <body style={{
    scrollSnapType: "y mandatory", display: "flex", flexDirection: "column",
    overflow: "scroll", maxHeight: "100dvh"

      }} className={customFont.className}>{children}</body>
    </html>
  );
}
