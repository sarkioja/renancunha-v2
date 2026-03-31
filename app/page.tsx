import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:renan@renancunha.com" },
  { label: "GitHub", href: "https://github.com/sarkioja" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarkioja" },
  { label: "Photos", href: "https://photos.renancunha.com/" },
];

const stack = [
  "React",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
  "Clean Architecture",
  "Testing",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="card">
        <div className="content">
          <h1 className="site-name">Renan Cunha</h1>

          <p className="intro">
            I build software — mostly web apps, APIs and things running in the cloud.
          </p>

          <p className="role">Full stack software engineer</p>

          <nav className="link-list" aria-label="External links">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="inline-link">
                <span>{link.label}</span>
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            ))}
          </nav>

          <hr className="divider" />

          <div className="body-copy">
            <p>
              I work across frontend, backend, data and cloud — usually connecting all
              of it into something that actually runs in production.
            </p>
            <p>
              I&apos;ve spent time with React on the frontend, and Node.js, APIs and
              databases on the backend.
            </p>
            <p>
              These days I care a lot about how things are structured — architecture,
              testing, and keeping systems understandable as they grow.
            </p>
            <p>
              I also spend time shooting film and digital photography. You can see some
              of it here —{" "}
              <a
                href="https://photos.renancunha.com/"
                className="inline-link subtle-link"
              >
                <span>photos</span>
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            </p>
          </div>

          <hr className="divider" />

          <div>
            <p className="section-label">Stack</p>
            <div className="stack-list">
              {stack.map((item) => (
                <span key={item} className="stack-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <hr className="divider" />

          <p className="footnote">
            Open to new opportunities and interesting problems.
          </p>
        </div>
      </section>
    </main>
  );
}
