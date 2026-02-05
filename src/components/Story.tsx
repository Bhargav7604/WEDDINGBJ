import { Heart, Sparkles, Calendar } from 'lucide-react';
import growingTogether from '/assets/BJ2.jpg';
import firstMeet from '/assets/BJ4.jpg';
import logoImage from '/assets/BG_LOGO3.jpg';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" fill="currentColor" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            Our Love Story
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every love story is beautiful, but ours is our favorite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-md">
                  <Heart className="w-7 h-7 text-white" fill="currentColor" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-rose-600 font-semibold uppercase tracking-wider">09/11/2025</p>
                  <h3 className="font-serif text-3xl text-gray-800">First Meeting</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                On 09/11/2025, our families arranged our first meeting. It started as simple
                conversation soon turned into an unexpected 30 min filled with laughter and
                meaningful connection. We realised how much we had in common. By the end, we are
                clear that something special had started that evening.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <img
                src={logoImage}
                alt="First meeting"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <img
                src={growingTogether}
                alt="Growing together"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-md">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-amber-600 font-semibold uppercase tracking-wider">November 21, 2025</p>
                  <h3 className="font-serif text-3xl text-gray-800">Growing Together</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Guess what? On November 21, 2025, we're opening the family doors for our wedding
                prep! How exciting, right? But there's a slight hiccup—our parents are playing the
                role of 'No Phone Zone' enforcers, blocking us from trading contact numbers. It's like
                trying to plan a heist without the map! But no worries, we can't wait to reunite, even
                if we have to send smoke signals to connect!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-md">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-pink-600 font-semibold uppercase tracking-wider">27/11/2025</p>
                  <h3 className="font-serif text-3xl text-gray-800">The Proposal</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                On an absolutely stunning morning, Bhargav decided it was time to upgrade from
                boyfriend to fiancé. With the city blinking in awe, he knelt down and made a heartfelt
                proposal to the equally enchanting Jagadeeswari. And of course, with happy tears (and
                probably a bit of snot), she shouted 'Yes!' louder than a kid asking for ice cream!
                Now we're both knee-deep in planning our big love circus and we're just dying to party
                with our family and friends—hope they're ready for our epic love fest!
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <img
                src={firstMeet}
                alt="The proposal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 rounded-3xl p-12 shadow-xl border border-rose-100">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-rose-500" fill="currentColor" />
              </div>
            </div>
            <div className="pt-8">
              <p className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 italic leading-relaxed">
                "Love is not about how many days, months, or years you have been together."
              </p>
              <p className="font-serif text-2xl md:text-3xl text-gray-800 italic leading-relaxed">
                "Love is about how much you love each other every single day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
