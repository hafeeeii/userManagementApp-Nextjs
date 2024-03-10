
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Management App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <AuthProvider>



        <div className="flex h-screen gap-5  overflow-y-hidden md:mr-6 ">
          <div className=" md:block hidden min-w-[15vw]">
            <Sidebar />
          </div>

          <div className=" flex flex-col md:gap-4 md:w-[85vw] w-full ">
            <Navbar />
            <div className="bg-white">{children}</div>
          </div>
        </div>
        </AuthProvider>

       
      </body>
    </html>
  );
}