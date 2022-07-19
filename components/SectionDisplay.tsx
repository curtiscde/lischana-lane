import React from 'react';
import { Section } from '../types/Section';

const styleMapper = {
  heading: 'style1',
  single: 'style2',
  gallery: 'style3',
};

const getClassNames = (section: Section) => {
  const { type } = section;

  const classes: string[] = ['main'];
  classes.push(styleMapper[type]);

  if (type === 'heading' || type === 'single') {
    classes.push('dark');
  }

  classes.push('fullscreen');

  return classes.join(' ');
};

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
      className={getClassNames(section)}
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
