import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { NavbarDemo } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "John Doe - Developer",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex flex-col antialiased h-screen bg-gray-100"
        )}
      >
        <NavbarDemo />
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          {/* <Sidebar /> */}
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="min-h-screen bg-white border border-neutral-200">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
