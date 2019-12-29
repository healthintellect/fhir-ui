export default {
  base: '/fhir-ui/',
  title: 'fhir-ui Documentation',
  files: '**/*.{md,markdown,mdx}',
  menu: ['Getting Started', 'Components', 'FHIR Examples'],
  src: './src',
  public: './src/public',
  plugins: [],
  theme: 'docz-theme-default',
  themeConfig: {
    logo: {
      src: '/public/imgs/logo.svg',
      width: '100%',
    },
    colors: {
      primary: '#4967a9',
    },
  },
  htmlContext: {
    favicon: '/public/favicon.png',
  },
}
