import Link from 'next/link';
import { FaWhatsapp, FaHome, FaBus } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center font-sans bg-slate-50">
      {/* Visual Element */}
      <div className="mb-8">
        <h1 className="text-9xl font-black text-blue-600/10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
          404
        </h1>
        <FaBus className="text-8xl text-blue-600 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Looks like you've taken a wrong turn!
        </h2>
        <p className="text-slate-600 mt-4 max-w-md mx-auto">
          The page you are looking for might have been moved, deleted, or perhaps it never existed. Let's get you back on track.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
        >
          <FaHome /> Go to Homepage
        </Link>
        
        <a 
          href="https://wa.me/919044019511" 
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:scale-105"
        >
          <FaWhatsapp /> Get Support
        </a>
      </div>

      {/* Popular Links Section */}
      <div className="mt-12">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
          Popular Destinations
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Delhi', 'Lucknow', 'Agra', 'Jaipur'].map((city) => (
            <Link
              key={city}
              href={`/tempo-traveller/tempo-traveller-in-${city.toLowerCase()}`}
              className="text-sm font-semibold text-blue-600 hover:underline bg-white px-4 py-2 rounded-lg border border-slate-200"
            >
              Tempo Traveller in {city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}