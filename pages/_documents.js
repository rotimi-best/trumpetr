import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/static/favicon.ico" />

          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#007bff" />
          <link rel="shortcut icon" href="/static/icon-72x72.png" />
          <link rel="apple-touch-icon" href="/static/icon-512x512.png" />
          <meta name="apple-mobile-web-app-title" content="Trumptr" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
