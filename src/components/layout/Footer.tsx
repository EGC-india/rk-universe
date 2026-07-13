import Link from "next/link";
import Image from "next/image";
import { Mail, Disc } from "lucide-react"; 

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);



export default function Footer() {
  return (
    <footer className="w-full text-white font-sans border-t border-white/5">
      {/* Newsletter Section */}
      <div className="bg-[#0a0a0a] py-12 lg:py-16 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-black">
              <Mail className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-[#d4af37] text-xl lg:text-2xl font-serif mb-2 uppercase">Dont miss any update</h3>
              <p className="text-white/60 text-xs lg:text-sm max-w-md">
                Subscribe to our newsletter and be the first to know about new creations, stories and announcements.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]/50"
            />
            <button className="bg-[#d4af37] text-black px-6 lg:px-8 py-3 text-xs font-semibold tracking-widest hover:bg-[#d4af37]/80 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#050505] py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Logo & Tagline */}
            <div className="flex flex-col gap-6">
              <div className="relative w-32 h-16">
                <Image 
                  src="/logo.png" 
                  alt="RK Universe" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
              <div>
                <p className="text-[#d4af37] text-sm font-semibold mb-1">Interconnected Worlds.</p>
                <p className="text-white/70 text-sm">Stories That Stay With You.</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6">Quick Links</h4>
              <div className="flex gap-16">
                <ul className="space-y-4 text-xs text-white/60">
                  <li><Link href="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#d4af37] transition-colors">About RK</Link></li>
                  <li><Link href="/contact" className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
                </ul>
                <ul className="space-y-4 text-xs text-white/60">
                  <li><Link href="/news" className="hover:text-[#d4af37] transition-colors">News & Updates</Link></li>
                </ul>
              </div>
            </div>

            {/* Follow RK Universe */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6">Follow RK Universe</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center hover:border-[#d4af37] transition-colors text-[#d4af37]">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-6">Contact Us</h4>
              <ul className="space-y-3 text-xs text-white/60">
                <li>contact@rkuniverse.com</li>
                <li>RK Universe, Global Creative House</li>
              </ul>
            </div>
            
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-[10px] tracking-widest">
            <p>&copy; {new Date().getFullYear()} RK Universe. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
