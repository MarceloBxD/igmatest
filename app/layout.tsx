import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer, Slide } from "react-toastify";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGMA CHALLENGE | API",
  description: "REGISTER CLIENT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          closeOnClick
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
