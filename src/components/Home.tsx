import { Calendar, MapPin } from 'lucide-react';
import Countdown from './Countdown';
import { HomeProps } from '../types';
import backgroundImage from '/assets/BJ6.jpg';

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in md:mt-0 mt-24">
          <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-rose-100">
            <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase">
              We're Getting Married
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-gray-800 mb-2 drop-shadow-lg">
            Bhargav Ram
          </h1>
          <div className="flex items-center justify-center my-6">
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-rose-400 to-rose-400 rounded-full"></div>
            <div className="mx-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-rose-200">
              <span className="text-rose-500 text-2xl font-serif">&</span>
            </div>
            <div className="h-0.5 w-16 md:w-24 bg-gradient-to-l from-transparent via-rose-400 to-rose-400 rounded-full"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-gray-800 drop-shadow-lg">Jagadeeswari</h1>
        </div>

        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-center space-x-3 text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md inline-flex mx-auto">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-rose-500" />
            </div>
            <p className="text-base md:text-lg font-medium">February 22, 2026 at 11:55 AM</p>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md inline-flex mx-auto">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-base md:text-lg font-medium">Royal Convention, Mangalagiri</p>
          </div>
        </div>

        <Countdown />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => onNavigate('events')}
            className="group px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="flex items-center justify-center">
              View Events
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
