import { Heart, Sparkles, Calendar } from 'lucide-react';
import Growing_Together from "../../public/assets/Growing_Together.jpg";
import First_meet from "../../public/assets/First_meet.jpg";
import BJ_logo from "../../public/assets/BJ-logo.png";
import BJ_LOGO3 from "../../public/assets/BG_LOGO3.jpg";


export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            Our Love Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-rose-500 font-medium">09/11/2025</p>
                <h3 className="font-serif text-2xl text-gray-800">First Meeting</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              On 09/11/2025, our families arranged our first meeting. It started as simple conversation soon turned into an unexpected 30 min filled with laughter and meaningful connection. We realised how much we had in common. By the end, we are clear that something special had started that evening.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={BJ_LOGO3}
                alt="First meeting"
                className="w-full h-full object-cover object-center"
              />

            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={Growing_Together}
                alt="Growing together"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-amber-500 font-medium">November 21, 2025</p>
                <h3 className="font-serif text-2xl text-gray-800">Growing Together</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Guess what? On November 21, 2025, we're opening the family doors for our wedding prep!
              How exciting, right? But there's a slight hiccup—our parents are playing the role of
              'No Phone Zone' enforcers, blocking us from trading contact numbers. It's like trying to
              plan a heist without the map! But no worries, we can't wait to reunite, even if we have
              to send smoke signals to connect! 
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-purple-500 font-medium">27/11/2025</p>
                <h3 className="font-serif text-2xl text-gray-800">The Proposal</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              On an absolutely stunning morning, Bhargav decided it was time to upgrade from boyfriend
              to fiancé. With the city blinking in awe, he knelt down and made a heartfelt proposal to
              the equally enchanting Jagadeeswari. And of course, with happy tears (and probably a bit
              of snot), she shouted 'Yes!' louder than a kid asking for ice cream! Now we're both
              knee-deep in planning our big love circus and we're just dying to party with our family and
              friends—hope they're ready for our epic love fest!
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                 src={First_meet}
                alt="The proposal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-12">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" fill="currentColor" />
          <p className="font-serif text-2xl text-gray-800 mb-4 italic">
            "Love is not about how many days, months, or years you have been together."
          </p>
          <p className="font-serif text-2xl text-gray-800 italic">
            "Love is about how much you love each other every single day."
          </p>
        </div>
      </div>
    </section>
  );
}
