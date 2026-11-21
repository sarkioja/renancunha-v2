import { getContent } from "@/content";
import { Readme } from "./readme";
import { Year } from "./year";

export default function HomePage() {
  const content = getContent("en");

  return (
    <main>
      <pre lang="en">
        <code>
          <span className="header">
            {content.name}{" "}
            <span className="cursor" aria-hidden="true">
              █
            </span>
            {"\n"}
            {content.subtitle}
            {"\n"}
            <Year initial={new Date().getFullYear()} />
          </span>
          {"\n\n"}
          <Readme source={content.body} />
          {"\n\n"}
          <span className="spaced">{content.footer}</span>
          {"\n"}
        </code>
      </pre>
    </main>
  );
}
