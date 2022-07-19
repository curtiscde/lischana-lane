import React from 'react';
import { Section } from '../types/Section';
import { getSectionClassNames } from '../util/getSectionClassNames';

const getDivStyles = (section: Section) => {
  if (section.type === 'single') return 'content box style2';
  return 'content';
}

const SectionDescription = ({ description }: { description: Array<any> }) => (
  description
    .map((d) => d.value).join(' ')
);

interface SectionDisplayProps {
  section: Section;
  previousSection: Section | undefined;
  nextSection: Section | undefined;
}

export function SectionDisplay({
  section,
  previousSection,
  nextSection,
}: SectionDisplayProps) {
  const {
    description, image, slug, title,
  } = section;
  return (
    <section
      id={slug}
      key={slug}
      className={getSectionClassNames({ section, previousSection })}
      style={{
        backgroundImage: `url(images/overlay.png), url(${image})`,
      }}
    >
      <div className={getDivStyles(section)}>
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
