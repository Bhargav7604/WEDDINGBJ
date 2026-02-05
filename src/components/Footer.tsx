import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
            <span className="font-serif text-2xl">Bhargav & Jagadeeswari</span>
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
          </div>

          <p className="text-gray-400 mb-2">February 22, 2026</p>
          <p className="text-gray-400 mb-6">Royal Convention, Mangalagiri</p>

          <div className="h-px w-32 bg-gray-700 mx-auto mb-6"></div>

          <p className="text-gray-500 text-sm">Made with love for our special day</p>
        </div>
      </div>
    </footer>
  );
}
