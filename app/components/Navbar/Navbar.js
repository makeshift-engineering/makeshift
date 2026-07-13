"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.wrap}>
          <Link href="/" className={styles.logo} aria-label="Makeshift Engineering home">
            <Image
              src="/logo.svg"
              alt="Makeshift Engineering"
              width={32}
              height={40}
              className={styles.logoIcon}
              priority
            />
            <span className={styles.logoText}>
              makeshift<span className={styles.logoDot}>.</span>
            </span>
          </Link>

          <div className={styles.links}>
            <a href="#projects" className={styles.link}>Projects</a>
            <Link href="https://blog.makeshift.pro" className={styles.link}>Blog</Link>
            <a href="#about" className={styles.link}>About</a>
            <a
              href="https://github.com/makeshift-engineering"
              className={`${styles.link} ${styles.linkIcon}`}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <a href="#projects" className={styles.mobileLink} onClick={closeMenu}>Projects</a>
        <Link href="https://blog.makeshift.pro" className={styles.mobileLink} onClick={closeMenu}>Blog</Link>
        <a href="#about" className={styles.mobileLink} onClick={closeMenu}>About</a>
        <a
          href="https://github.com/makeshift-engineering"
          className={styles.mobileLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          GitHub
        </a>
      </div>
    </>
  );
}
