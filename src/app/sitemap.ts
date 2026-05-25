import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thetriumphalarchchisinau.com';
  
  // All supported locales
  const locales = routing.locales;

  // The routes in your application
  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.5,
      });
    });
  });

  return sitemapEntries;
}