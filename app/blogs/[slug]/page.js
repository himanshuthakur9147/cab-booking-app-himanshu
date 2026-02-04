import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { notFound } from 'next/navigation';
import BlogRenderer from '@/components/editor/BlogRenderer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import AuthorCard from '@/components/editor/AuthorCard';
import Image from 'next/image';
import Script from 'next/script';

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
    author: blog.author || "Yatra Travel India",
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
      <Script
        id={`blog-posting-schema-${blog._id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
     {/* Hero Section */}
<header className="max-w-4xl mx-auto pt-16 pb-8 px-4">
  <div className="text-center">
    <div className="mb-4">
      {/* Small Category Tag */}
      <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        Travel Guide
      </span>
    </div>
    
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
      {blog.title}
    </h1>

    <div className="flex items-center justify-center gap-4 text-gray-600 font-semibold text-sm italic mb-10">
      <div className="flex items-center gap-2">
        {blog.authorImg && (
          <img 
            src={blog.authorImg} 
            alt={blog.author} 
            className="w-6 h-6 rounded-full object-cover border border-orange-200"
          />
        )}
        <span>By {blog.author || "Yatra Travel India"}</span>
      </div>
      <span>•</span>
      <span>{new Date(blog.createdAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}</span>
    </div>
  </div>

  {/* --- NEW: Hero Cover Image --- */}
  {blog.coverImage && (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
      <img 
        src={blog.coverImage} 
        alt={blog.title} 
        className="w-full h-full object-cover"
      />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )}
</header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-12">
            <BlogRenderer content={blog.content} />
          </div>
        </main>
        <AuthorCard author={blog.author} authorDesc={blog.authorDesc} authorImg={blog.authorImg} />
      </article>
          <div className="max-w-6xl mx-auto my-10 px-4 py-8 border-t border-gray-200 flex flex-col md:flex-row items-start gap-6 font-sans">
      
      {/* Simple Logo Container */}
      <div className="flex-shrink-0 w-32 sm:w-40 pt-1">
        <Image
          width={400} height={600}
          src={"/logo.jpeg"}
          alt="Yatra Travel India Logo"
          className="w-24 h-auto object-contain"
        />
      </div>

      {/* Description Section */}
      <div className="text-gray-800 text-[15px] sm:text-base leading-relaxed">
        <p className="mb-2">
          <span className="font-bold">Yatra Travel India</span> is a leading travel 
          information and guide provider in India. We strive to make your travel 
          planning an easy and comfortable experience through our comprehensive 
          destination insights. Yatra Travel India is also a growing platform for 
          curating unique holiday experiences.
        </p>
        
        {/* Navigation Links */}
        <div className="text-sky-600 font-medium">
          One can explore{' '}
          <a href="#" className="hover:underline">Popular Destinations</a>,{' '}
          <a href="#" className="hover:underline">Hill Stations</a>,{' '}
          <a href="#" className="hover:underline">Religious Sites</a>,{' '}
          <a href="#" className="hover:underline">Beach Holidays</a> and{' '}
          <a href="#" className="hover:underline">Travel Tips</a>{' '}
          at Yatra Travel India website and mobile app.
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}