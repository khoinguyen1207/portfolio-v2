// Import global styles and fonts
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontSans.className}>
      <body>
        <div className="h-screen w-full flex items-center bg-background justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-foreground mb-4">Oops! Page not found</p>
            <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
              <Button className="cursor-pointer">Return to Home</Button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
