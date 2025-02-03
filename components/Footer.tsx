"use client"

import { useState } from "react"
import Link from "next/link"
import { FiSend } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log("Signed up with:", email)
    setEmail("")
  }

  return (
    <footer className="bg-wood-dark text-cream">
      
      {/* Responsive CTA Section */}
      <div 
        className="w-full bg-cover bg-center rounded-none mb-12 h-[50rem] sm:h-[40rem] md:h-[50rem]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="bg-black bg-opacity-10 flex flex-col items-center justify-center h-full">
          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Your Dream Space
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-white mb-6 px-4 max-w-2xl mx-auto">
              Contact us today to transform your space with innovative design and quality furniture.
            </p>
            <Link href="/contact">
              <button className="bg-amber-900 hover:bg-amber-950 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 text-base sm:text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rest of the Footer remains the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-45 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FurniTech</h3>
            <p className="mb-4">Revolutionizing furniture with AI and cutting-edge technology.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-wood-light">
                <FaFacebook className="h-6 w-6 transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a href="#" className="hover:text-wood-light">
                <FaTwitter className="h-6 w-6 transition-transform duration-300 hover:-translate-y-2"/>
              </a>
              <a href="#" className="hover:text-wood-light">
                <FaInstagram className="h-6 w-6 transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a href="#" className="hover:text-wood-light">
                <FaLinkedin className="h-6 w-6 transition-transform duration-300 hover:-translate-y-2" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-wood-light transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-wood-light transition-colors duration-300">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-wood-light transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-wood-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-wood-light transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-wood-light transition-colors duration-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-wood-light transition-colors duration-300">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-wood-light transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md text-wood-dark focus:outline-none focus:ring-2 focus:ring-wood-medium"
                required
              />
              <button
                type="submit"
                className="bg-wood-medium hover:bg-wood-light text-cream font-bold py-2 px-4 rounded-r-md transition-colors duration-300"
              >
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-wood-medium flex flex-col sm:flex-row justify-between items-center mb-10 ">
          <p>&copy; {new Date().getFullYear()} FurniTech. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-wood-light transition-colors duration-300 mr-4">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-wood-light transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}