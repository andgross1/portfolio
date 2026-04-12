import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-500 ${scrolled
          ? "shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm"
          : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

        {/* Logo */}
        <div className="font-bold flex-1">
          Gross
        </div>

        {/* Menu distribuído */}
        <nav className="flex-[3] grid grid-cols-4 text-center text-sm font-normal text-gray-600">
          <a href="#sobre" className="hover:text-black transition">
            Sobre mim
          </a>
          <a href="#carreira" className="hover:text-black transition">
            Carreira
          </a>
          <a href="#projetos" className="hover:text-black transition">
            Projetos
          </a>
          <a href="#contato" className="hover:text-black transition">
            Contato
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;