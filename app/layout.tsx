import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/header/Header";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban App",
  description: "kanban app with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
