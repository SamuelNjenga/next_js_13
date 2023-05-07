import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li className="font-inter">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
