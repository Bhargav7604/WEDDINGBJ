import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
              <h2 className="font-serif text-4xl md:text-5xl text-gray-800">Wedding Events</h2>
              <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Join us in celebrating our special days with multiple events filled with love, laughter,
            and joy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400"></div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-100/40 to-amber-100/40 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100/40 to-rose-100/40 rounded-full blur-3xl -z-0"></div>

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mb-8 md:mb-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-rose-400 via-pink-500 to-rose-500 flex items-center justify-center shadow-xl mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6 text-center md:text-left">
                    Wedding Ceremony
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-rose-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-rose-600 font-semibold uppercase tracking-wider mb-1">
                            Date
                          </p>
                          <p className="text-gray-800 font-semibold text-lg">February 22, 2026</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">
                            Time
                          </p>
                          <p className="text-gray-800 font-semibold">11:30 AM - 1:00 PM</p>
                          <p className="text-sm text-amber-700 mt-1">Muhurtham: 11:54 A.M.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
                          Venue
                        </p>
                        <p className="text-gray-800 font-semibold text-lg">Royal Convention</p>
                        <p className="text-gray-600 text-sm mt-1">Mangalagiri, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-rose-50/50 to-amber-50/50 rounded-xl p-6 border-l-4 border-rose-400">
                    <p className="text-gray-700 leading-relaxed italic">
                      The sacred wedding ceremony where we begin our journey together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-500/5 to-amber-500/5 px-8 md:px-12 py-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
                <p className="text-sm">We look forward to celebrating with you</p>
                <Heart className="w-4 h-4 text-rose-500" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl text-gray-800 mb-4">Main Venue Location</h3>
            <p className="text-gray-600 mb-2">Royal Convention</p>
            <p className="text-gray-600">
              8, Seetharama Kovela, beside BMW Car showroom, Mangalagiri, Andhra Pradesh 522503
            </p>
          </div>

          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0384791307074!2d80.56119087576512!3d16.422872029872345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f14363ffba17%3A0x85b0d5b2477d9783!2sRoyal%20Convention!5e0!3m2!1sen!2sin!4v1765952702567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-rose-500 text-white font-medium rounded-full hover:bg-rose-600 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
