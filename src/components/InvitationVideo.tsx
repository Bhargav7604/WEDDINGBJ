import { motion } from 'framer-motion';
import { Video, Upload } from 'lucide-react';

export default function InvitationVideo() {
  const videoUrl = '';

  return (
    <section id="invitation-video" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Wedding Invitation Video
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our special invitation just for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {videoUrl ? (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title="Wedding Invitation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-rose-100 p-12 md:p-20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                  <Video className="text-rose-500" size={40} />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-4">
                  Invitation Video Coming Soon
                </h3>
                <p className="text-gray-600 mb-8">
                  We're preparing a special video invitation for you. Check back soon!
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-full shadow-md">
                  <Upload size={20} />
                  <span>Upload pending</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
