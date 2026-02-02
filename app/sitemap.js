import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export default async function sitemap() {
  const baseUrl = 'https://www.yatratravelindia.com';

  // 1. Fetch Blogs from MongoDB
  await dbConnect();
  const blogs = await Blog.find({}, { slug: 1, createdAt: 1 }).lean();
  
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.createdAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // 2. City Pages (from your cities array)
  const cities = ["lucknow", "hyderabad", "varanasi", "mumbai", "chandigarh", "jaipur", "haridwar", "dehradun", "amritsar", "prayagraj", "delhi", "patna", "indore", "bangalore", "shimla"];
  
  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/tempo-traveller/tempo-traveller-in-${city}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // 3. Static Pages
  const staticPages = [
    '',
    '/about',
    '/blogs',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  }));

  // Combine everything
  return [...staticPages, ...cityUrls, ...blogUrls];
}