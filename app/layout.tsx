import type { Metadata } from "next";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const fugaz = Fugaz_One({
  variable: "--font-fugaz",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoodTrack",
  description: "Track your daily mood, every day of the year!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`${fugaz.className} text-lg sm:text-2xl text-gradient`}>MoodTrack</h1>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`${fugaz.className} text-indigo-500`}>Created with ❤️ by <a href="https://github.com/calebmutisya/moodtrack" target="_blank">Caleb Mutisya</a></p>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
