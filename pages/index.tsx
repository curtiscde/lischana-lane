/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { SectionDisplay } from '../components/SectionDisplay';
import { ContentfulContent } from '../types/ContentfulContent';
import { Section } from '../types/Section';
import { SocialLink } from '../types/SocialLink';
import { getContent } from '../util/getContent';

interface HomeProps {
  socialLinks: SocialLink[];
  sections: Section[];
}

const Home: NextPage<HomeProps> = ({ socialLinks, sections }: HomeProps) => (
  <>
    <Head>
      <title>Lischana Lane</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>

    <header id="header">
      <h1>Lischana Lane</h1>
      <nav>
        <ul>
          {
            sections.map(({ menuText, slug }) => (
              <li key={slug}><a href={`#${slug}`}>{menuText}</a></li>
            ))
          }
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    {
      sections.map((section, index) => (
        <SectionDisplay
          section={section}
          previousSection={sections[index - 1]}
          nextSection={sections[index + 1]}
        />
      ))
    }

    {/* <section id="intro" className="main style1 dark fullscreen">
      <div className="content">
        <header>
          <h2>Hey.</h2>
        </header>
        <p>
          Welcome to
          <strong>Big Picture</strong>
          {' '}
          a responsive site template designed by
          <a href="https://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the
          {' '}
          <a href="https://html5up.net/license">Creative Commons Attribution license</a>
          .
        </p>
        <footer>
          <a href="#one" className="button style2 down">More</a>
        </footer>
      </div>
    </section> */}

    {/* <section id="one" className="main style2 right dark fullscreen">
      <div className="content box style2">
        <header>
          <h2>What I Do</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
          Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
          id varius justo euismod in. Curabitur egestas consectetur magna.
        </p>
      </div>
      <a href="#two" className="button style2 down anchored">Next</a>
    </section> */}

    {/* <section id="two" className="main style2 left dark fullscreen">
      <div className="content box style2">
        <header>
          <h2>Who I Am</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
          Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
          id varius justo euismod in. Curabitur egestas consectetur magna.
        </p>
      </div>
      <a href="#work" className="button style2 down anchored">Next</a>
    </section> */}

    {/* <section id="work" className="main style3 primary">
      <div className="content">
        <header>
          <h2>My Work</h2>
          <p>
            Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
            Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
            arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.
          </p>
        </header>

        <div className="gallery">
          <article className="from-left">
            <a href="images/fulls/01.jpg"
            className="image fit">
            <img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></a>
          </article>
          <article className="from-right">
            <a href="images/fulls/02.jpg"
            className="image fit">
            <img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
          </article>
          <article className="from-left">
            <a href="images/fulls/03.jpg"
            className="image fit"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
          </article>
          <article className="from-right">
            <a href="images/fulls/04.jpg"
            className="image fit"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
          </article>
          <article className="from-left">
            <a href="images/fulls/05.jpg"
            className="image fit">
            <img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
          </article>
          <article className="from-right">
            <a href="images/fulls/06.jpg"
            className="image fit"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
          </article>
        </div>

      </div>
    </section> */}

    <section id="contact" className="main style3 secondary">
      <div className="content">
        <header>
          <h2>Say Hello.</h2>
          <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
        </header>
        <div className="box">
          <form method="post" action="#">
            <div className="fields">
              <div className="field half"><input type="text" name="name" placeholder="Name" /></div>
              <div className="field half"><input type="email" name="email" placeholder="Email" /></div>
              <div className="field"><textarea name="message" placeholder="Message" rows={6} /></div>
            </div>
            <ul className="actions special">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </form>
        </div>
      </div>
    </section>

    <footer id="footer">

      <ul className="icons">
        {socialLinks.map((socialLink) => <li key={socialLink.icon}><a href={socialLink.url} className={`icon brands fa-${socialLink.icon}`}><span className="label">{socialLink.type}</span></a></li>)}
      </ul>

      <ul className="menu">
        <li>&copy; Lischana Lane</li>
        <li><a href="http://www.curtiscode.dev" target="_blank" rel="noreferrer">curtiscode.dev</a></li>
        <li>
          Design:
          &nbsp;
          <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>

    </footer>
  </>
);

export default Home;

export async function getStaticProps() {
  const {
    CONTENTFUL_SPACEID: spaceId,
    CONTENTFUL_ACCESS_TOKEN: accessToken,
  } = process.env;

  if (!spaceId || !accessToken) {
    throw new Error('missing spaceid or access token');
  }

  const content: ContentfulContent = await getContent({ spaceId, accessToken });
  const { socialLinks, sections } = content;

  return {
    props: {
      socialLinks,
      sections,
    },
  };
}
