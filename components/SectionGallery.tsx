import React from 'react';
import { Section } from '../types/Section';

interface SectionGalleryProps {
  section: Section;
}

// TODO: Add titles..

export function SectionGallery({ section }: SectionGalleryProps) {
  return (
    <div className="gallery">
      {
        section.images?.map((image, index) => (
          <article className={`from-${index % 2 === 0 ? 'left' : 'right'}`} key={image}>
            <a
              href={image}
              className="image fit"
            >
              <img src={`${image}?fit=thumb&f=center&w=477&h=440`} title="LL" alt="" />
            </a>
          </article>
        ))
      }
    </div>
  );
}
