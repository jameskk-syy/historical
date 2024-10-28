import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers";
import { Toaster } from "react-hot-toast";
import AOSInitializer from "./components/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Historical Heritage Tourism",
  description: "Historical Heritage Tourism",
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
          <AOSInitializer /> 
          {children}
        </Providers>
      </body>
    </html>
  );
}
