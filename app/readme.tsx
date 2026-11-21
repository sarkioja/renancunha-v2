import { Fragment, type ReactNode } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function renderInline(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;

  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) out.push(text.slice(last, start));

    const external = /^https?:\/\//.test(href);
    out.push(
      <Fragment key={`${key}-${i++}`}>
        [{label}](
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
        >
          {href}
        </a>
        )
      </Fragment>,
    );
    last = start + whole.length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

function renderLine(line: string, key: string): ReactNode {
  if (line.startsWith("### ")) {
    return <span className="mono-h3">{renderInline(line.slice(4), key)}</span>;
  }
  if (line.startsWith("## ")) {
    return <span className="mono-h2">{renderInline(line.slice(3), key)}</span>;
  }
  if (line.startsWith("# ")) {
    return (
      <span className="mono-h1 spaced">{renderInline(line.slice(2), key)}</span>
    );
  }
  if (line.startsWith("> ")) {
    return <span className="fg3">{renderInline(line.slice(2), key)}</span>;
  }
  return renderInline(line, key);
}

/** Renders markdown-ish text line by line, keeping every newline. */
export function Readme({ source }: { source: string }) {
  const lines = source.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {renderLine(line, `l${i}`)}
          {i < lines.length - 1 ? "\n" : null}
        </Fragment>
      ))}
    </>
  );
}
