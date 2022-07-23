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
          <link rel="stylesheet" href="ttps://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
          <link href="assets/css/styles.css" rel="stylesheet" />
        </Head>
        <body id="page-top">
          <Main />
          <NextScript />
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js" strategy="beforeInteractive" />
          <Script src="assets/js/scripts.js" strategy="beforeInteractive" />
          <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
