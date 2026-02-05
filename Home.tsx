import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import Countdown from './Countdown';
import BJ6 from "../../public/assets/BJ6.jpg"

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${BJ6})` }}
        ></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
  <div className="mb-8 animate-fade-in md:mt-0 mt-24">
    <p className="text-rose-500 text-sm font-medium tracking-widest uppercase mb-4">
      We're Getting Married
    </p>
    <h1 className="font-serif text-5xl md:text-8xl text-gray-800 mb-2">
      Bhargav Ram
    </h1>
    <div className="flex items-center justify-center my-4">
      <div className="h-px w-12 md:w-16 bg-rose-300"></div>
      <span className="mx-4 text-rose-500 text-xl md:text-2xl">&</span>
      <div className="h-px w-12 md:w-16 bg-rose-300"></div>
    </div>
    <h1 className="font-serif text-5xl md:text-8xl text-gray-800">
      Jagadeeswari
    </h1>
  </div>

  <div className="space-y-4 mb-8">
    <div className="flex items-center justify-center space-x-2 text-gray-600">
      <Calendar className="w-5 h-5 text-rose-500" />
      <p className="text-base md:text-lg">February 22, 2026 at 11:55 AM</p>
    </div>
    <div className="flex items-center justify-center space-x-2 text-gray-600">
      <MapPin className="w-5 h-5 text-rose-500" />
      <p className="text-base md:text-lg">Royal Convention, Mangalagiri</p>
    </div>
  </div>

  <Countdown />

  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
    <button
      onClick={() => onNavigate('events')}
      className="px-8 py-3 bg-white text-rose-600 font-medium rounded-full hover:bg-gray-50 transition-all border-2 border-rose-500"
    >
      View Events
    </button>
  </div>
</div>
    </section>
  );
}
