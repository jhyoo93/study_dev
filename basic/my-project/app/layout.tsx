import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "App Router",
  description: "App Router 기반 연습",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar /> {/*모든 페이지에 네비게이션 추가 */}
        <main className="container mx-auto p-4">{ children }</main>
      </body>      
    </html>
  );
}
