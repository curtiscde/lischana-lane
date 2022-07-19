import React from 'react';
import { Section } from '../types/Section';

const SectionDescription = ({ description }: { description: Array<any> }) => (
  description
    .map((d) => d.value).join(' ')
);

interface SectionDisplayProps {
  section: Section
}

export function SectionDisplay({
  section,
}: SectionDisplayProps) {
  const {
    description, image, slug, title,
  } = section;
  return (
    <section
      id={slug}
      key={slug}
      className="main style1 dark fullscreen"
      style={{
        background: `url(images/overlay.png), url(${image})`,
      }}
    >
      <div className="content">
        <header>
          <h2>{title}</h2>
        </header>
        <p>
          {SectionDescription({ description })}
        </p>
        <footer>
          <a href="#one" className="button style2 down">More</a>
        </footer>
      </div>
    </section>
  );
}
