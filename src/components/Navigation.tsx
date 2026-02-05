import { NavigationProps } from '../types';
import logo from '/assets/BJ_LOGO2-removebg.png';

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[rgba(219, 215, 215, 0)] backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          <div
            className="flex items-center cursor-pointer md:absolute md:left-0 mx-auto md:mx-0"
            onClick={() => onNavigate('home')}
          >
            <img
              src={logo}
              alt="B & J Logo"
              className="h-14 md:h-16 w-auto mix-blend-multiply"
            />
          </div>

          <div className="hidden md:flex space-x-8 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-rose-600'
                    : 'text-gray-600 hover:text-rose-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
