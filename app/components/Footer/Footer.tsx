import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="Makeshift Engineering"
                width={26}
                height={32}
                className={styles.logoIcon}
              />
              <span className={styles.logoText}>
                makeshift<span className={styles.logoDot}>.</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              A small team of friends building things that matter. Open source,
              always.
            </p>
            <div className={styles.socials}>
              <a
                href="https://github.com/makeshift-engineering"
                className={styles.socialLink}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Projects</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="https://penguindb.makeshift.pro">PenguinDB</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="https://blog.makeshift.pro">Blog</Link>
              </li>
              <li>
                <a
                  href="https://github.com/makeshift-engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:hello@makeshift.pro">hello@makeshift.pro</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Makeshift Engineering. All rights reserved.
          </p>
          <p className={styles.built}>Built with obsession · Go · Next.js</p>
        </div>
      </div>
    </footer>
  );
}
