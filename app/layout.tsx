import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer, Slide } from "react-toastify";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

const PAGE_TITLE = "ROADKILL | API";
const PAGE_DESCRIPTION = "APPLICATION TO DATABASE MANAGEMENT OF ROADKILL";
const PAGE_LANG = "pt-br";

const TOAST_AUTO_CLOSE = 5000;
const TOAST_POSITION = "bottom-left";
const TOAST_THEME = "light";

const FONT_CLASSNAME = inter.className;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

const Head = (
  <head>
    <meta charSet="utf-8" />
    <meta name="description" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang={PAGE_LANG}>
        {Head}
        <body className={FONT_CLASSNAME}>
          {children}
          <ToastContainer
            position={TOAST_POSITION}
            autoClose={TOAST_AUTO_CLOSE}
            closeOnClick
            theme={TOAST_THEME}
            transition={Slide}
          />
        </body>
      </html>
    </AppProvider>
  );
}
