import Link from 'next/link';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import AdminActions from '@/components/admin/AdminActions';

// --- 1. STATIC SEO METADATA ---
export const metadata = {
  title: 'India Travel Blog | Hidden Gems & Travel Guides | Yatra Travel',
  description: 'Explore the best travel stories, itineraries, and hidden gems across India. From Goa beaches to Himalayan treks, get expert travel advice from Yatra Travel.',
  keywords: ['India travel blog', 'best places to visit in India', 'Yatra Travel stories', 'Indian itineraries'],
  openGraph: {
    title: 'Yatra Travel Blog - Discovering India Together',
    description: 'Expert travel guides and stories about exploring India.',
    url: 'https://yatratravelindia.com/blogs', // Replace with your domain
    siteName: 'Yatra Travel India',
    images: [
      {
        url: '/logo.jpeg', // A nice wide shot of India for social sharing
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export const revalidate = 0;

async function getBlogs() {
  await dbConnect();
  const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(blogs));
}

export default async function BlogListPage() {
  const blogs = await getBlogs();

  // --- 2. STRUCTURED DATA (Schema.org) ---
  // Tells Google this is a collection of articles
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Yatra Travel Blog',
    description: 'Travel stories and guides for India.',
    publisher: {
      '@type': 'Organization',
      name: 'Yatra Travel India',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yatratravelindia.com/logo.png'
      }
    }
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
      <Navbar/>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Yatra Travel Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover the hidden gems of India.</p>
          </header>

          {blogs.length === 0 ? (
            <div className="bg-white rounded-3xl p-20 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-400">No blogs published yet.</h2>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <article key={blog._id} className="relative group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                  
                  {/* ADMIN CONTROLS: Only visible to logged-in admins */}
                  <AdminActions blogId={blog._id} />

                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden">
                      {blog.coverImage ? (
                        <img 
                          src={blog.coverImage} 
                          alt={blog.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold uppercase tracking-tighter text-4xl opacity-20">Yatra</div>
                      )}
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Travel Guide</span>
                        <time className="text-gray-600 font-semibold text-xs">
                          {new Date(blog.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors mb-3">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-6 italic">
                        {blog.metaDescription || "Explore this amazing journey across India..."}
                      </p>
                      <div className="mt-auto flex items-center text-orange-600 font-bold text-sm">
                        Read Story <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}