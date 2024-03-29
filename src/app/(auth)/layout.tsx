import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Management App login page ",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          <div className="bg-white ">{children}</div>

          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
