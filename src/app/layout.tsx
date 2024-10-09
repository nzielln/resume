import type { Metadata } from "next";
import "../style/css/style.css"
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ellah Nzikoba",
  description: "A digital resume",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="site-content grid grid-cols-2">
          <div className="header col-span-1 flex flex-col justify-between">
            <Menu />
            <Header />
          </div>
          <div className="main-body col-span-1 flex flex-col justify-between">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}


export default RootLayout