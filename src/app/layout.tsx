import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robot Conference D-Day | 로봇 학회 일정",
  description: "로봇공학 관련 주요 국제 학술대회 일정과 D-Day를 한눈에 확인하세요. ICRA, IROS, RSS 등 인정 학술대회 정보를 제공합니다.",
  keywords: "로봇, 학회, ICRA, IROS, RSS, 학술대회, D-Day, 일정, robotics, conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
