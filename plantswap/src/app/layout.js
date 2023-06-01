import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlantSwap",
  description: "PlantSwap, identify and swap plants with your neighbours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
