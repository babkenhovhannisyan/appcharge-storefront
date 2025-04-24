import { Inter } from "next/font/google";
import Link from "next/link";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <div className="min-h-screen bg-white">
            <header className="bg-white">
              <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
              >
                <div className="flex lg:flex-1">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="text-xl font-bold">Storefront task</span>
                  </Link>
                </div>
              </nav>
            </header>
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
