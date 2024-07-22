import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import {  Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farm Fuzion",
  description: "Farm Fuzion Sustainable Agri-bussiness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
