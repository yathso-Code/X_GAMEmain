import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Include the script tag inside the Head component */}
        <script src="/jquery-3.6.0.min.js" strategy="beforeInteractive"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </Head>
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
