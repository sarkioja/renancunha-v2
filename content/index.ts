import { readFileSync } from "node:fs";
import { join } from "node:path";

// Each language lives in its own folder: content/<locale>/
//   site.json  → header, footer and the order of the sections
//   <name>.md  → one file per section, listed in site.json
//
// Marks supported in the .md files (rendered by app/readme.tsx):
//   # Heading      → top-level heading (spaced from the header)
//   ## Heading     → section
//   ### Heading    → entry title
//   > text         → secondary line, rendered in grey without the ">"
//   [label](url)   → link, printed as raw markdown with the URL clickable

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

type SiteMeta = {
  name: string;
  subtitle: string;
  footer: string;
  sections: string[];
};

export type Content = {
  name: string;
  subtitle: string;
  footer: string;
  /** All sections joined, in the order given by site.json. */
  body: string;
};

const root = join(process.cwd(), "content");

export function getContent(locale: Locale): Content {
  const dir = join(root, locale);
  const meta = JSON.parse(
    readFileSync(join(dir, "site.json"), "utf8"),
  ) as SiteMeta;

  const body = meta.sections
    .map((name) => readFileSync(join(dir, `${name}.md`), "utf8").trim())
    .join("\n\n");

  return {
    name: meta.name,
    subtitle: meta.subtitle,
    footer: meta.footer,
    body,
  };
}
