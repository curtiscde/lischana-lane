import { Section } from '../types/Section';

const styleMapper = {
  heading: 'style1',
  single: 'style2',
  gallery: 'style3',
};

interface GetSectionClassNamesProps {
  section: Section;
  previousSection: Section | undefined;
}

export const getSectionClassNames = ({ section, previousSection }: GetSectionClassNamesProps) => {
  const { type } = section;

  const classes: string[] = ['main'];
  classes.push(styleMapper[type]);

  if (type === 'single') {
    classes.push(previousSection?.type === 'single' ? 'right' : 'left');
  }

  if (type === 'heading' || type === 'single') {
    classes.push('dark');
  }

  if (type === 'gallery') {
    classes.push('primary');
  } else {
    classes.push('fullscreen');
  }

  return classes.join(' ');
};
