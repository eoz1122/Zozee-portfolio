"use client";
import Link from "next/link";
import Button from "./Button";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[rgb(var(--header-bg))]/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="responsive-wrapper flex items-center justify-between h-20 text-[rgb(var(--txt-heading))]">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href={"/"}
            className="text-xl font-bold tracking-tight uppercase hover:text-[rgb(var(--txt-link))] transition-colors"
          >
            Aaron Azadi
            <span className="text-[rgb(var(--txt-link))]">.</span>
          </Link>
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[rgb(var(--txt-body))]">
          <Link href={"/"} className="hover:text-[rgb(var(--txt-link))] transition-colors">Home</Link>
          <Link href={"/#about"} className="hover:text-[rgb(var(--txt-link))] transition-colors">About me</Link>
          <Link href={"/#projects"} className="hover:text-[rgb(var(--txt-link))] transition-colors">Portfolio</Link>
          <Link href={"https://medium.com/@racquaye89"} target="_blank" className="hover:text-[rgb(var(--txt-link))] transition-colors">
            Blog
          </Link>
        </nav>

        {/* Actions - Right */}
        <div className="flex items-center gap-4">
          <Button
            href={"/Richard-Acquaye_CV.pdf"}
            linkType="external"
            isFile={true}
            className="hidden md:flex"
          >
            Download CV
          </Button>
          <div className="pl-4 border-l border-gray-200 dark:border-gray-800">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
