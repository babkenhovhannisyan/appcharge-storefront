import { MetadataRoute } from 'next';
import { getProducts } from '@/service/fakerAPI';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://appcharge-storefront.vercel.app';
  
  // Get all products
  const products = await getProducts();
  
  // Generate product URLs
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  return [...staticPages, ...productUrls];
} 