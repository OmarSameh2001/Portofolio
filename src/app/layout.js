import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar Sameh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin:"0"}}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
