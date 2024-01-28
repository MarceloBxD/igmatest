import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer, Slide } from "react-toastify";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

const PAGE_TITLE = "IGMA CHALLENGE | API";
const PAGE_DESCRIPTION = "REGISTER CLIENT";
const PAGE_LANG = "pt-br";

const TOAST_AUTO_CLOSE = 5000;
const TOAST_POSITION = "bottom-left";
const TOAST_THEME = "light";

const FONT_CLASSNAME = inter.className;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang={PAGE_LANG}>
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
