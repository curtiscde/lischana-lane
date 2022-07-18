import Document, {
  DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="assets/css/main.css" />
          <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
        </Head>
        <body className="is-preload">
          <Main />
          <NextScript />
          <Script src="assets/js/jquery.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.poptrox.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.scrolly.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/jquery.scrollex.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/browser.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/breakpoints.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/util.js" strategy="beforeInteractive" />
          <Script src="assets/js/main.js" strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
