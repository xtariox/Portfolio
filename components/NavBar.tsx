"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { id: 1, text: { en: "Home", fr: "Accueil" }, link: "home" },
  { id: 2, text: { en: "About", fr: "À propos" }, link: "about" },
  { id: 3, text: { en: "Experience", fr: "Expérience" }, link: "experience" },
  { id: 4, text: { en: "Projects", fr: "Projets" }, link: "projects" },
  { id: 5, text: { en: "Contact", fr: "Contact" }, link: "contact" },
];

type NavItem = typeof navItems[0];

export const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(navItems.map((i) => i.link));
  const { t } = useLanguage();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavItem
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(item.link)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setOpenNavbar(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        onClick={() => setOpenNavbar(false)}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? "flex lg:hidden" : "hidden"
        }`}
      />

      <header className="sticky top-0 w-full bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex items-center justify-between h-20 text-[var(--navbar-text)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-0.5">
            <span className="bg-gray-700 dark:bg-gray-800 text-white px-2 py-1.5 rounded-lg">
              H
            </span>
            <span aria-hidden="true" className="hidden sm:flex">
              AIDA
            </span>
          </Link>

          {/* Links */}
          <ul className="hidden lg:flex items-center gap-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link === 'home' ? '/' : `/${item.link}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`
                    relative py-2 px-1
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                    after:duration-300 after:ease-linear after:bg-[var(--navbar-hover)]
                    ${
                      activeSection === item.link
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {t('nav-' + item.link, item.text)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-x-3">
            <LanguageToggle />
            <ThemeToggle />

            {/* Hamburger */}
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              aria-label="toggle navbar"
              className="lg:hidden flex flex-col justify-center items-center"
            >
              <span
                className={`h-0.5 w-6 bg-[var(--navbar-text)] rounded transition-all duration-300 ${
                  openNavbar ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-[var(--navbar-text)] rounded transition-all duration-300 mt-1 ${
                  openNavbar ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-[var(--navbar-bg)] shadow-md lg:hidden transition-all duration-300 ${
              openNavbar ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col items-center py-4 gap-y-4 text-[var(--navbar-text)]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                  href={item.link === 'home' ? '/' : `/${item.link}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`
                    relative py-2 px-1
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                    after:duration-300 after:ease-linear after:bg-[var(--navbar-hover)]
                    ${
                      activeSection === item.link
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {t('nav-' + item.link, item.text)}
                </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
