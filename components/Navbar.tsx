"use client";
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { Button } from "./ui/moving-border";
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
    className="text-wood-dark hover:text-wood-medium transition-colors duration-300 block py-2 px-4 text-base"
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
    <nav className="bg-cream shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={40} />
              <span className="text-2xl font-bold text-wood-dark">FurnoExpress</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/#offerings">Offerings</NavLink>
              <Button  borderRadius="1.75rem" className="">
              <NavLink href="/customize">Customize</NavLink>
              </Button>
              
              <NavLink href="/contact">Contact Us</NavLink>
              <NavLink href="/#about">About Us</NavLink>
              <button className="bg-wood-medium hover:bg-wood-dark text-cream font-bold py-2 px-4 rounded transition-colors duration-300 text-sm">
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
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="/offerings" onClick={closeMenu}>
            Offerings
          </NavLink>
          <NavLink href="/customize" onClick={closeMenu}>
            Customize
          </NavLink>
          <NavLink href="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
          <NavLink href="/about" 
          onClick={closeMenu}>
            About Us
          </NavLink>
          <button
            onClick={toggleSignup}
            className="w-full text-left bg-wood-medium hover:bg-wood-dark text-cream font-bold py-2 px-4 rounded transition-colors duration-300 mt-2 text-sm"
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
