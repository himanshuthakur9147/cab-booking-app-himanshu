import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { notFound } from 'next/navigation';
import BlogRenderer from '@/components/editor/BlogRenderer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';

// --- NEW: SEO METADATA GENERATOR ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  await dbConnect();
  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) return { title: 'Blog Not Found | Yatra Travel India' };

  const baseUrl = 'https://yatratravelindia.com'; // Replace with your actual domain

  return {
    title: `${blog.title} | Yatra Travel India`,
    description: blog.metaDescription || "Explore India's hidden gems with Yatra Travel.",
    alternates: {
      canonical: `${baseUrl}/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url: `${baseUrl}/blogs/${slug}`,
      siteName: 'Yatra Travel India',
      images: [
        {
          url: blog.coverImage || '/logo.jpeg', // Fallback image
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      publishedTime: blog.createdAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.metaDescription,
      images: [blog.coverImage || '/logo.jpeg'],
    },
  };
}

async function getBlog(slug) {
  await dbConnect();
  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) return null;
  return {
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt.toISOString(),
  };
}

export default async function PublicBlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  // --- NEW: Schema.org JSON-LD (For Google "Rich Snippets") ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: blog.coverImage,
    datePublished: blog.createdAt,
    author: {
      '@type': 'Organization',
      name: 'Yatra Travel India',
    },
    description: blog.metaDescription,
  };

  return (
    <>
      {/* Add JSON-LD to help Google understand the content type */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto pt-16 pb-8 px-4 text-center">
          <div className="mb-4">
             {/* Small Category Tag */}
             <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Travel Guide
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 text-sm italic">
            <span>By Yatra Travel India</span>
            <span>•</span>
            <span>{new Date(blog.createdAt).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-12">
            <BlogRenderer content={blog.content} />
          </div>
        </main>
      </article>
      <Footer />
    </>
  );
}