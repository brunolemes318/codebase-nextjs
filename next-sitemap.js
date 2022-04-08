module.exports = {
  siteUrl: 'https://urldoseu.site',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://urldoseu.site/server-sitemap.xml'],
  },
}
