import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About ANI", href: "/about" },
    { name: "Innovations", href: "/innovations" },
    { name: "Events & Exhibitions", href: "#" },
    { name: "Inventor Stories", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Join ANI", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-[95%] mx-auto">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="ANI Logo" className="w-[50px]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Centered Nav Links */}
            <div className="flex justify-center flex-grow space-x-6">
              {navLinks.map((link) =>
                link.href === "/" || link.href === "/about" || link.href === "/innovations" ?  (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-montserrat text-[14px] text-[#1D1D1D] hover:text-brandGreen transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-montserrat text-[14px] text-[#1D1D1D] hover:text-brandGreen transition-colors"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>

            {/* Right-Aligned Button */}
            <div className="ml-6">
              <a
                href="#"
                className="font-heading bg-brandGreen border border-primary hover:text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
              >
                Become a Member
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brandGreen focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-8 pt-2 pb-8 space-y-4">
            {navLinks.map((link) =>
              link.href === "/" || link.href === "/about" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-700 hover:text-brandGreen transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-brandGreen transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="#"
              className="bg-brandGreen border border-primary hover:text-white px-4 py-2 rounded-md transition-colors"
            >
              Become a Member
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}