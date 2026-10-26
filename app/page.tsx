import Navbar from "./components/Navbar/Navbar";
import HeroTerminal from "./components/HeroTerminal/HeroTerminal";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-label">
        <span className="divider-prompt">$</span> {label}
      </span>
      <span className="divider-line" />
    </div>
  );
}

function PenguinIcon() {
  return (
    <svg
      className={styles.projectIcon}
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
    >
      <ellipse cx="32" cy="38" rx="16" ry="20" fill="#1a1a2e" />
      <ellipse cx="32" cy="42" rx="10" ry="14" fill="#e8e8f0" />
      <circle cx="32" cy="18" r="12" fill="#1a1a2e" />
      <circle cx="27" cy="16" r="2.5" fill="white" />
      <circle cx="37" cy="16" r="2.5" fill="white" />
      <circle cx="27.8" cy="15.5" r="1.2" fill="#1a1a2e" />
      <circle cx="37.8" cy="15.5" r="1.2" fill="#1a1a2e" />
      <path d="M29 21 L32 25 L35 21 Z" fill="#f59e0b" />
      <ellipse cx="26" cy="57" rx="5" ry="2" fill="#f59e0b" />
      <ellipse cx="38" cy="57" rx="5" ry="2" fill="#f59e0b" />
    </svg>
  );
}

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Ambient background */}
      <div className={styles.ambientBg} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>
      <div className={styles.dotGrid} aria-hidden="true" />

      <Navbar />

      <main>
        {/* ===== Hero ===== */}
        <section className={styles.hero} id="hero">
          <div className="wrap">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>
                  <span className={styles.badgeDot} />
                  <span>Building in public</span>
                </div>
                <h1 className={styles.heroTitle}>
                  We build things
                  <br />
                  that <span className={styles.heroHighlight}>matter</span>.
                </h1>
                <p className={styles.heroSubtitle}>
                  Makeshift Engineering is a small team of friends building
                  open-source projects — from databases to developer tools. No
                  VC, no hype. Just engineering.
                </p>
                <div className={styles.heroActions}>
                  <a
                    href="#projects"
                    className="btn btn-primary"
                    id="hero-cta-projects"
                  >
                    View Projects
                    <ArrowIcon />
                  </a>
                  <a
                    href="https://blog.makeshift.pro"
                    className="btn btn-outline"
                    id="hero-cta-blog"
                  >
                    Read the Blog
                  </a>
                </div>
              </div>
              <div className={styles.heroTerminal}>
                <HeroTerminal />
              </div>
            </div>
          </div>
        </section>

        <SectionDivider label="ls /projects" />

        {/* ===== Projects ===== */}
        <section className={styles.projects} id="projects">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-eyebrow">&sol;&sol; featured</span>
                <h2 className="section-title">Our Projects</h2>
                <p className="section-description">
                  Open-source tools and systems, built with care.
                </p>
              </div>
            </ScrollReveal>

            {/* Featured Project: PenguinDB */}
            <ScrollReveal>
              <div className={styles.projectFeatured} id="project-penguindb">
                <div className={styles.projectFeaturedContent}>
                  <div className={styles.projectStatus}>
                    <span
                      className={`${styles.statusDot} ${styles.statusActive}`}
                    />
                    <span className={styles.statusText}>
                      Active Development
                    </span>
                  </div>
                  <h3 className={styles.projectFeaturedTitle}>
                    <PenguinIcon />
                    PenguinDB
                  </h3>
                  <p className={styles.projectFeaturedDesc}>
                    An LSM-tree based SQL database engine written in Go.
                    PenguinDB implements a Log-Structured Merge-tree storage
                    engine with Write-Ahead Logging, concurrent memtable
                    management, and efficient compaction strategies.
                  </p>
                  <div className={styles.projectTech}>
                    <span className={styles.techTag}>Go</span>
                    <span className={styles.techTag}>LSM Tree</span>
                    <span className={styles.techTag}>SQL</span>
                    <span className={styles.techTag}>WAL</span>
                    <span className={styles.techTag}>gRPC</span>
                  </div>
                  <div className={styles.projectLinks}>
                    <a
                      href="https://penguindb.makeshift.pro"
                      className="btn btn-primary btn-sm"
                      id="penguindb-link"
                    >
                      Learn More <ArrowIcon size={14} />
                    </a>
                    <a
                      href="https://github.com/makeshift-engineering/penguin-db"
                      className="btn btn-ghost btn-sm"
                      id="penguindb-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon size={16} />
                      Source
                    </a>
                  </div>
                </div>

                <div className={styles.projectFeaturedVisual}>
                  <div className={styles.codeTerminal}>
                    <div className={styles.codeBar}>
                      <div className={styles.codeDots}>
                        <span className={styles.cdRed} />
                        <span className={styles.cdYellow} />
                        <span className={styles.cdGreen} />
                      </div>
                      <span className={styles.codeBarTitle}>penguindb-cli</span>
                    </div>
                    <div className={styles.codeBody}>
                      <div className={styles.codeLine}>
                        <span className={styles.codePrompt}>penguin&gt;</span>{" "}
                        <span className={styles.codeCmd}>
                          CREATE TABLE users (
                        </span>
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codeIndent}>
                          {" "}
                          id INT PRIMARY KEY,
                        </span>
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codeIndent}>
                          {" "}
                          name VARCHAR(100),
                        </span>
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codeIndent}>
                          {" "}
                          email VARCHAR(255)
                        </span>
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codeIndent}>);</span>
                      </div>
                      <div
                        className={`${styles.codeLine} ${styles.codeSuccess}`}
                      >
                        <span>✓</span> Table &apos;users&apos; created
                      </div>
                      <div className={styles.codeLine}>
                        <br />
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codePrompt}>penguin&gt;</span>{" "}
                        <span className={styles.codeCmd}>
                          INSERT INTO users
                        </span>
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codeIndent}>
                          VALUES (1, &apos;Ada&apos;,
                          &apos;ada@makeshift.pro&apos;);
                        </span>
                      </div>
                      <div
                        className={`${styles.codeLine} ${styles.codeSuccess}`}
                      >
                        <span>✓</span> 1 row inserted (0.3ms)
                      </div>
                      <div className={styles.codeLine}>
                        <br />
                      </div>
                      <div className={styles.codeLine}>
                        <span className={styles.codePrompt}>penguin&gt;</span>{" "}
                        <span className={styles.codeCmd}>
                          SELECT * FROM users;
                        </span>
                      </div>
                      <div className={`${styles.codeLine} ${styles.codeTable}`}>
                        ┌────┬──────┬────────────────────┐
                      </div>
                      <div className={`${styles.codeLine} ${styles.codeTable}`}>
                        │ id │ name │ email │
                      </div>
                      <div className={`${styles.codeLine} ${styles.codeTable}`}>
                        ├────┼──────┼────────────────────┤
                      </div>
                      <div className={`${styles.codeLine} ${styles.codeRow}`}>
                        │ 1 │ Ada │ ada@makeshift.pro │
                      </div>
                      <div className={`${styles.codeLine} ${styles.codeTable}`}>
                        └────┴──────┴────────────────────┘
                      </div>
                      <div className={`${styles.codeLine} ${styles.codeMuted}`}>
                        1 row in set (0.1ms)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Coming Soon Cards */}
            <div className={styles.projectsGrid}>
              <ScrollReveal delay={0}>
                <div className={styles.projectCard} id="project-coming-soon-1">
                  <div className={styles.projectCardHatch} />
                  <div className={styles.projectCardBadge}>Coming Soon</div>
                  <div className={styles.projectCardIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                    </svg>
                  </div>
                  <h3 className={styles.projectCardTitle}>Next Project</h3>
                  <p className={styles.projectCardDesc}>
                    Something new is brewing. Stay tuned.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className={styles.projectCard} id="project-coming-soon-2">
                  <div className={styles.projectCardHatch} />
                  <div className={styles.projectCardBadge}>Coming Soon</div>
                  <div className={styles.projectCardIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v18" />
                      <path d="m19 8 3 8a5 5 0 0 1-6 0z" />
                      <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                      <path d="m5 8 3 8a5 5 0 0 1-6 0z" />
                      <path d="M7 21h10" />
                    </svg>
                  </div>
                  <h3 className={styles.projectCardTitle}>And More...</h3>
                  <p className={styles.projectCardDesc}>
                    We&apos;re always experimenting with new ideas.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider label="cat /about" />

        {/* ===== About ===== */}
        <section className={styles.about} id="about">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-eyebrow">&sol;&sol; philosophy</span>
                <h2 className="section-title">How We Work</h2>
              </div>
            </ScrollReveal>
            <div className={styles.aboutGrid}>
              {[
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 6a9 9 0 0 0-9 9V3" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                    </svg>
                  ),
                  title: "Open Source First",
                  desc: "Everything we build is open source. We believe great software is built in the open, with transparency and community input.",
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20" />
                      <path d="M2 12h20" />
                      <path d="m4.93 4.93 14.14 14.14" />
                      <path d="m19.07 4.93-14.14 14.14" />
                    </svg>
                  ),
                  title: "Engineering Depth",
                  desc: "We don't skim the surface. Whether it's building a database engine or a systems tool, we go deep into the fundamentals.",
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Friends, Not Employees",
                  desc: "We're a group of friends who love to build. No sprints, no standups, no corporate nonsense. Just passion projects with people we trust.",
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                  ),
                  title: "Learn by Building",
                  desc: "Our best learning happens through shipping. Every project is a chance to explore new territory and level up our craft.",
                },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 80}>
                  <div className={styles.aboutCard} id={`about-card-${i + 1}`}>
                    <div className={styles.aboutCardIcon}>{card.icon}</div>
                    <h3 className={styles.aboutCardTitle}>{card.title}</h3>
                    <p className={styles.aboutCardDesc}>{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider label="tail -n 3 /blog/latest" />

        {/* ===== Blog Teaser ===== */}
        <section className={styles.blogTeaser} id="blog">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-eyebrow">&sol;&sol; latest</span>
                <h2 className="section-title">From the Blog</h2>
                <p className="section-description">
                  Engineering deep dives, project updates, and things we&apos;ve
                  learned.
                </p>
              </div>
            </ScrollReveal>
            <div className={styles.blogGrid}>
              {[
                {
                  href: "https://blog.makeshift.pro/building-an-lsm-tree",
                  date: "July 2026",
                  title: "Building an LSM Tree from Scratch",
                  excerpt:
                    "How we designed PenguinDB's storage engine — from memtables and SSTables to compaction strategies.",
                },
                {
                  href: "https://blog.makeshift.pro/wal-recovery",
                  date: "July 2026",
                  title: "Write-Ahead Logging: Why Your Database Needs It",
                  excerpt:
                    "A deep dive into WAL recovery, crash consistency, and how PenguinDB ensures no data is lost.",
                },
                {
                  href: "https://blog.makeshift.pro/why-makeshift",
                  date: "June 2026",
                  title: "Why We Started Makeshift Engineering",
                  excerpt:
                    "The story behind a group of friends who decided to build things together, on their own terms.",
                },
              ].map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 80}>
                  <a
                    href={post.href}
                    className={styles.blogCard}
                    id={`blog-post-${i + 1}`}
                  >
                    <div className={styles.blogCardDate}>{post.date}</div>
                    <h3 className={styles.blogCardTitle}>{post.title}</h3>
                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                    <span className={styles.blogCardLink}>Read more →</span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
            <div className={styles.blogCta}>
              <a
                href="https://blog.makeshift.pro"
                className="btn btn-outline"
                id="blog-cta-all"
              >
                All Posts <ArrowIcon size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className={styles.ctaSection} id="cta">
          <div className="wrap">
            <ScrollReveal>
              <div className={styles.ctaBox}>
                <h2 className={styles.ctaTitle}>Want to follow along?</h2>
                <p className={styles.ctaDesc}>
                  Star us on GitHub or check out our blog. We write about what
                  we build and what we learn.
                </p>
                <div className={styles.ctaActions}>
                  <a
                    href="https://github.com/makeshift-engineering"
                    className="btn btn-primary"
                    id="cta-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                    Star on GitHub
                  </a>
                  <a
                    href="https://blog.makeshift.pro"
                    className="btn btn-outline"
                    id="cta-blog"
                  >
                    Read the Blog
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
