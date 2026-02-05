import { Calendar, Clock, MapPin, Music, Utensils, Sparkles } from 'lucide-react';

export default function Events() {
  const events = [
    
    {
      icon: Sparkles,
      title: 'Wedding Ceremony',
      date: 'February 22, 2026',
      time: '11:55 AM - 1:00 PM',
      location: 'Royal Convention',
      address: 'Mangalagiri, Andhra Pradesh',
      description: 'The sacred wedding ceremony where we begin our journey together.',
      color: 'rose',
      gradient: 'from-rose-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-rose-400 to-pink-500',
    },
   
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            Wedding Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join us in celebrating our special days with multiple events filled with love, laughter, and joy.
          </p>
        </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 place-items-center">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative p-8">
                  <div className={`w-20 h-20 rounded-2xl ${event.iconBg} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="font-serif text-2xl text-gray-800 mb-6 group-hover:text-gray-900 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-rose-600" />
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm text-gray-500 font-medium">Date</p>
                        <p className="text-gray-700 font-medium">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm text-gray-500 font-medium">Time</p>
                        <p className="text-gray-700 font-medium">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm text-gray-500 font-medium">Venue</p>
                        <p className="text-gray-700 font-medium">{event.location}</p>
                        <p className="text-sm text-gray-500">{event.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl text-gray-800 mb-4">Main Venue Location</h3>
            <p className="text-gray-600 mb-2">Royal Convention</p>
            <p className="text-gray-600">8, Seetharama Kovela, beside BMW Car showroom, Mangalagiri, Andhra Pradesh 522503</p>
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
