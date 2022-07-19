import { Section } from '../types/Section';
import { getSectionClassNames } from './getSectionClassNames';

describe('getSectionClassNames', () => {
  const baseSection: Section = {
    title: 'title',
    description: [],
    menuText: 'title',
    order: 1,
    type: 'heading',
    slug: 'title',
  };

  it('returns heading styles', () => {
    const previousSection: Section = { ...baseSection };
    const section: Section = { ...baseSection };

    const classNames: string = getSectionClassNames({ section, previousSection });
    expect(classNames).toEqual('main style1 dark fullscreen');
  });

  it('returns single styles', () => {
    const previousSection: Section = { ...baseSection };

    const section: Section = {
      ...baseSection,
      type: 'single',
    };

    const classNames: string = getSectionClassNames({ section, previousSection });
    expect(classNames).toEqual('main style2 left dark fullscreen');
  });

  it('returns single styles when previous is also single', () => {
    const previousSection: Section = {
      ...baseSection,
      type: 'single',
    };

    const section: Section = {
      ...baseSection,
      type: 'single',
    };

    const classNames: string = getSectionClassNames({ section, previousSection });
    expect(classNames).toEqual('main style2 right dark fullscreen');
  });

  it('returns gallery styles', () => {
    const previousSection: Section = { ...baseSection };

    const section: Section = {
      ...baseSection,
      type: 'gallery',
    };

    const classNames: string = getSectionClassNames({ section, previousSection });
    expect(classNames).toEqual('main style3 primary');
  });
});
