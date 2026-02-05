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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-1">{photo.alt}</p>
                  <div className="w-16 h-1 bg-white/60 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 shadow-lg">
                <span className="text-rose-500 text-xl">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 group"
            aria-label="Close"
          >
            <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
            <p className="text-white font-medium text-sm">
              {selectedImage + 1} / {photos.length}
            </p>
          </div>

          <div className="relative max-w-6xl max-h-[85vh] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photos[selectedImage].url}
                alt={photos[selectedImage].alt}
                className="max-w-full max-h-[85vh] w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <p className="text-white font-semibold text-lg">{photos[selectedImage].alt}</p>
            </div>

            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 group"
                aria-label="Previous"
              >
                <span className="text-white text-3xl font-light group-hover:-translate-x-1 transition-transform duration-300">‹</span>
              </button>
            )}

            {selectedImage < photos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110 group"
                aria-label="Next"
              >
                <span className="text-white text-3xl font-light group-hover:translate-x-1 transition-transform duration-300">›</span>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
