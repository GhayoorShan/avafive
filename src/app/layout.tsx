import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { CustomProvider } from "./CustomProvider";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <CustomProvider>
          <>
            <div className={` max-w-7xl mx-auto p-5 lg:p-0`}>
              <Toaster />
              <Header />
              {children}
            </div>
            <Footer />
          </>
        </CustomProvider>
      </body>
    </html>
  );
}
