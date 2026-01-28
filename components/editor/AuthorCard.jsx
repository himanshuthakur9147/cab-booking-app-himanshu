import Image from 'next/image';

export default function AuthorCard({author,authorDesc,authorImg}) {
  const authorData = {
    name: author || "Yatra Travel India",
    image: authorImg || "/logo.jpeg", // Ensure this path is correct in your public folder
    bio: authorDesc || "Passionate storyteller and mountain lover. Arjun has spent the last decade uncovering hidden gems across India. When not writing, you'll find him scouting for the perfect cup of ginger tea in the Himalayas."
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white border-t border-b border-gray-100 sm:border sm:rounded-xl sm:bg-gray-50 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Author Image */}
      <div className="relative w-20 h-20   flex-shrink-0">
        <img
          src={authorData.image}
          alt={authorData.name}
          className="rounded-full w-20 h-20 object-cover object-top grayscale-[20%]"
        />
      </div>

      {/* Author Text */}
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">
          About the Author
        </h3>
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {authorData.name}
        </h4>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {authorData.bio}
        </p>
      </div>
    </div>
  );
}