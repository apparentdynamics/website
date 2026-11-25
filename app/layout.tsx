import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apparent Dynamics | Humanoid Robotics",
  description:
    "Humanoid robots engineered for versatile real-world interactions.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}