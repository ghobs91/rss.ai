"use client";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#2196f3" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 text-gray-800">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className={`border-r w-64 p-4 space-y-4 hidden md:block shadow-sm`}>
            <h1 className="text-2xl font-semibold mb-6">📡 FeedReader</h1>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block py-2 px-3 rounded hover:bg-blue-50 text-blue-700 font-medium"
              >
                Home
              </Link>
              <Link
                href="/manage"
                className="block py-2 px-3 rounded hover:bg-blue-50 text-blue-700 font-medium"
              >
                Manage Subscriptions
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {/* Mobile header */}
            <div className="md:hidden p-4 border-b border-gray-800 flex items-center justify-between">
              <h1 className="text-xl font-semibold">FeedReader</h1>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 text-xl focus:outline-none"
              >
                ☰
              </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="md:hidden border-b border-gray-800 px-4 pb-4">
                <Link href="/" className="block py-2 text-blue-700 hover:underline">
                  Home
                </Link>
                <Link href="/manage" className="block py-2 text-blue-700 hover:underline">
                  Manage Subscriptions
                </Link>
              </div>
            )}

            <div className="p-6 max-w-4xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
