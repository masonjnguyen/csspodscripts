export default {
  github: 'https://github.com/masonjnguyen/csspodscripts',
  docsRepositoryBase:
    'https://github.com/masonjnguyen/csspodscripts/blob/master',
  titleSuffix: ' – CSSPodScripts',
  logo: (
    <>
      <span className="mr-2 font-semibold hidden md:inline">CSSPodScripts</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="The CSS Podcast's Transcripts" />
      <meta name="og:description" content="The CSS Podcast's Transcripts" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://css-podcast-transcripts.vercel.app/og.png"
      />
      <meta
        name="twitter:site:domain"
        content="css-podcast-transcripts.vercel.app"
      />
      <meta
        name="twitter:url"
        content="https://css-podcast-transcripts.vercel.app"
      />
      <meta name="og:title" content="CSSPodScripts" />
      <meta name="og:image" content="https://csspodscripts.vercel.app/og.png" />
      <meta
        name="apple-mobile-web-app-title"
        content="CSSPodScripts
        "
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: '',
  footerText: <>MIT {new Date().getFullYear()} © masonjnguyen.com </>,
  unstable_faviconGlyph: '',
}
