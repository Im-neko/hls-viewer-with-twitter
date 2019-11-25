import Document, { DocumentContext, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import Header from "../components/header";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
        <style jsx global>{`
        body { 
          margin: 0px;
          padding: 0px;
        }
        `}</style>
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
