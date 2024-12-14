import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        y: "-300%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <div>
      <nav className="fixed bg-black z-50 top-0 w-full left-0 px-5 py-2 flex justify-between items-center">
        <img className="w-[160px]" src="./cyb.jpg" alt="Logo" />

        {/* Hamburger Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center">
          <a
            href="#games"
            className="text-lg transition-all hover:bg-none shadow-xl py-1 rounded-lg hover:text-blue-500 hover:underline text-center"
          >
            GAMES
          </a>
          <a
            href="#characters"
            className="text-lg transition-all hover:bg-none shadow-xl py-1 rounded-lg hover:text-blue-500 hover:underline text-center"
          >
            CHARACTERS
          </a>
          <a
            href="#about"
            className="text-lg transition-all hover:bg-none shadow-xl py-1 rounded-lg hover:text-blue-500 hover:underline text-center"
          >
            ABOUT
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-black flex flex-col items-center p-5 md:hidden transform -translate-y-full"
        >
          <a
            href="#games"
            className="text-lg text-white w-full py-2 px-4 hover:bg-gray-800 rounded-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            GAMES
          </a>
          <a
            href="#characters"
            className="text-lg text-white w-full py-2 px-4 hover:bg-gray-800 rounded-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            CHARACTERS
          </a>
          <a
            href="#about"
            className="text-lg text-white w-full py-2 px-4 hover:bg-gray-800 rounded-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
