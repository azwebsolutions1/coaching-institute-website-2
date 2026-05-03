"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-max flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-md">
            <Image
              src="/logo.jpeg"
              alt="Anand Patwardhan Tutorials Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[#1a3a8f] text-sm tracking-tight">
              Anand Patwardhan
            </div>
            <div className="text-xs text-[#f97316] font-semibold tracking-wider uppercase">
              Tutorials
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1a3a8f] rounded-lg hover:bg-blue-50 transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918452848451"
            className="flex items-center gap-2 text-sm font-semibold text-[#1a3a8f] hover:text-[#f97316] transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 8452 848451
          </a>
          {/* <button
            onClick={() => handleNavClick('#enquiry')}
            className="btn-orange text-sm px-5 py-2.5"
          >
            Book Free Demo
          </button> */}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-max py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1a3a8f] hover:bg-blue-50 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+918452848451"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#1a3a8f] bg-blue-50 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                +91 8452 848451
              </a>
              {/* <button
                onClick={() => handleNavClick('#enquiry')}
                className="btn-orange text-sm"
              >
                Book Free Demo
              </button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
