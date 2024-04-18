import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { Divider, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pagination",
  description: "react-query paginatopn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        <main className="mx-6 mt-6">
          {children}
        </main>
        <footer className="text-center text-gray-500 dark:text-gray-400 mt-8">
          <Divider style={{ backgroundColor: 'gray', height: '1.4px', marginBottom: 15}}/>
          <Link
            className="text-gray-500 dark:text-gray-400"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className="text-gray-900 dark:text-gray-100">
              Next.js
            </span>
          </Link>
          <Typography variant="h6">created by: <span className="text-gray-900 dark:text-gray-100">
            <Link href="https://github.com/Mohammad-ghiasi">mohammad ghiasi</Link>
          </span>.
          </Typography>
        </footer>
      </body>
    </html>
  );
}
