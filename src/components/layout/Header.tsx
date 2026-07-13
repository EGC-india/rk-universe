"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { User, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About RK", href: "/about" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8 h-20 md:h-24 flex items-center justify-between relative">
        {/* Left Side: Hamburger (Mobile) & Logo (Desktop) */}
        <div className="flex-1 flex items-center justify-start">
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
          
          <Link href="/" className="hidden lg:flex items-center">
            <div className="relative w-40 h-24 flex items-center">
              <Image 
                src="/logo.png" 
                alt="RK Universe Logo" 
                fill
                sizes="160px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>
        
        {/* Center: Logo (Mobile) & Nav (Desktop) */}
        <div className="flex shrink-0 justify-center items-center">
          <Link href="/" className="lg:hidden flex items-center">
            <div className="relative w-32 h-16 sm:w-36 sm:h-20 flex items-center">
              <Image 
                src="/logo.png" 
                alt="RK Universe Logo" 
                fill
                sizes="144px"
                priority
                className="object-contain object-center"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={`relative transition-colors uppercase pb-4 group ${isActive ? "text-[#d4af37]" : "text-white/70 hover:text-[#d4af37]"}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Login Button */}
        <div className="flex-1 flex items-center justify-end">
          <Link href="/login" className="flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] px-4 py-2 md:px-6 md:py-2.5 text-[11px] md:text-xs font-semibold tracking-widest hover:bg-[#d4af37]/10 transition-colors">
            <User className="h-4 w-4 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">RK LOGIN</span>
            <span className="sm:hidden">LOGIN</span>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 py-6 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-8 text-base font-semibold tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`relative transition-colors uppercase pb-1 w-fit group ${isActive ? "text-[#d4af37]" : "text-white/70 hover:text-[#d4af37]"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </nav>
          <Link href="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 border border-[#d4af37]/40 text-[#d4af37] px-4 py-3 text-xs font-semibold tracking-widest w-full mt-2 hover:bg-[#d4af37]/10 transition-colors">
            <User className="h-4 w-4" />
            RK LOGIN
          </Link>
        </div>
      )}
    </header>
  );
}

