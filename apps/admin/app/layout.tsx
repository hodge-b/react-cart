import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import sidebarMenuJson from "@/lib/data/menus/sidebarMenu.json";

export const metadata: Metadata = {
  title: "React Cart | Admin",
  description: "A simple react based e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = sidebarMenuJson.data;

  return (
    <html lang="en">
      <body className="flex">
        <Sidebar menu={menu} />
        {children}
      </body>
    </html>
  );
}
