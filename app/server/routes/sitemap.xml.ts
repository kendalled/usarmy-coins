export default defineEventHandler((event) => {
  const baseUrl = 'https://usarmycoins.com'
  
  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/army-challenge-coins', priority: '0.9', changefreq: 'monthly' },
    { path: '/navy-challenge-coins', priority: '0.9', changefreq: 'monthly' },
    { path: '/air-force-challenge-coins', priority: '0.9', changefreq: 'monthly' },
    { path: '/marine-corps-challenge-coins', priority: '0.9', changefreq: 'monthly' },
    { path: '/coast-guard-challenge-coins', priority: '0.9', changefreq: 'monthly' },
    { path: '/space-force-challenge-coins', priority: '0.9', changefreq: 'monthly' },
    { path: '/commemorative-challenge-coins', priority: '0.8', changefreq: 'monthly' },
    { path: '/custom-shape-challenge-coins', priority: '0.8', changefreq: 'monthly' },
    { path: '/quote', priority: '0.9', changefreq: 'weekly' },
    { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return sitemap
})