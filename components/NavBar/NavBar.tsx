"use client";

import Image from "next/image";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialMode = root.classList.contains("dark");
    setIsDarkMode(initialMode);
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="sticky top-0 z-50 bg-slate-50 dark:bg-slate-950">
      <div className="px-6 py-2 md:px-10 flex items-center justify-between z-50 max-w-[86rem] mx-auto">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/app-sena-logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div className="flex space-x-14">
          <div className="flex gap-10 items-center">
            <Link href="/">Home</Link>
            <Link href="/">Services</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="flex gap-4">
            <NextLink
              href="/book"
              className="
            inline-flex h-10 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-4 font-medium text-slate-300 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm
              focus:ring-offset-slate-50
            hover:text-slate-100"
            >
              Book a Meeting
            </NextLink>
            <div>
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDarkMode ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<CustomLinkProps> = ({ href, children, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NextLink
      href={href}
      {...props}
      data-active={isActive}
      className="cursor-pointer hidden 
      md:flex space-x-10 items-center
     text-slate-600 text-center text-sm dark:text-slate-400 dark:hover:text-slate-100
     bg-clip-text hover:text-slate-900 "
    >
      {children}
    </NextLink>
  );
};
