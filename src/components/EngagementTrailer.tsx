import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function EngagementTrailer() {
  return (
    <section id="engagement" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Engagement Story
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the magical moments of our engagement celebration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/mwFCYXTFGic"
                title="Bhargav & Jagadeeswari Engagement Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://youtu.be/mwFCYXTFGic?si=lbH0CMk2zJhEhy_2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <Play size={20} />
              Watch on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
