"use client";
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../public/logo.svg";
import SignupModal from "./SignupModal";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="bg-gradient-to-r from-orange-600 to-amber-800 text-transparent bg-clip-text font-bold text-sm md:text-lg lg:text-xl"
    onClick={onClick}
  >
    {children}
  </Link>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSignup = () => setIsSignupOpen(!isSignupOpen);

  return (
    <nav className="bg-cream shadow-md ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={40} />
              <span className="bg-gradient-to-r from-orange-600 to-amber-800 text-transparent bg-clip-text font-bold text-2xl">
                FurnoExpress
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/#home">Home</NavLink>
              <NavLink href="/#offerings">Offerings</NavLink>
              <NavLink href="/customize">Customize</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/#about">About</NavLink>
              <button
                onClick={toggleSignup}
                className="bg-gradient-to-r from-orange-600 to-amber-800 text-transparent bg-clip-text font-bold text-sm md:text-xl py-2  rounded transition-colors duration-300"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-wood-dark hover:text-wood-medium focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute inset-0 z-50 mt-12 h-full` }>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-2 m-4 py-4">
          <NavLink href="/offerings" onClick={closeMenu}>
            Offerings
          </NavLink>
          <NavLink href="/customize" onClick={closeMenu}>
            Customize
          </NavLink>
          <NavLink href="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
          <NavLink href="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <button
            onClick={toggleSignup}
            className="w-full text-left bg-gradient-to-r from-orange-600 to-amber-800 text-transparent bg-clip-text font-bold text-sm md:text-xl  rounded transition-colors duration-300 hover:text-wood-dark "
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Sign-Up Modal */}
      <SignupModal isOpen={isSignupOpen} onClose={toggleSignup} />
    </nav>
  );
}
