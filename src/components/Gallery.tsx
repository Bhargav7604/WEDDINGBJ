import { useState } from 'react';
import { X } from 'lucide-react';
import { PhotoItem } from '../types';
import image1 from '/assets/BJ3.jpg';
import image2 from '/assets/BJ6.jpg';
import image3 from '/assets/BJ4.jpg';
import image4 from '/assets/BJ_FAMILY.jpg';
import image5 from '/assets/BJ2.jpg';
import image6 from '/assets/BJ_FAMILY3.jpg';
import image7 from '/assets/BJ_FAMILY2.jpg';
import image8 from '/assets/BJ5.jpg';
import image9 from '/assets/BJ1.jpg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos: PhotoItem[] = [
    { url: image1, alt: 'Couple portrait' },
    { url: image2, alt: 'Romantic moment' },
    { url: image3, alt: 'Proposal moment' },
    { url: image4, alt: 'Together at sunset' },
    { url: image5, alt: 'Happy couple' },
    { url: image6, alt: 'Engagement celebration' },
    { url: image7, alt: 'Adventure together' },
    { url: image8, alt: 'Sweet moments' },
    { url: image9, alt: 'Love story' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform rotate-6">
              <span className="text-3xl">📸</span>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">Our Gallery</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A glimpse into our journey together, captured in beautiful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-white"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-lg">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={photos[selectedImage].url}
              alt={photos[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-white text-2xl">‹</span>
              </button>
            )}

            {selectedImage < photos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-white text-2xl">›</span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
