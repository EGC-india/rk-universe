"use client";

import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { KeyRound, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".auth-elem", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      <Header />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-20 px-4">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="w-full max-w-md bg-black border border-white/10 rounded-lg p-8 sm:p-10 relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="text-center mb-10 auth-elem">
            <div className="w-16 h-16 mx-auto bg-[#0a0a0a] border border-[#d4af37]/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <KeyRound className="w-7 h-7 text-[#d4af37]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#d4af37] tracking-wider mb-2 uppercase">
              Reset Password
            </h1>
            <p className="text-white/50 text-[11px] uppercase tracking-[0.15em] leading-relaxed max-w-[250px] mx-auto mt-4">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="auth-elem flex flex-col gap-2 relative">
              <label className="text-white/60 text-[10px] uppercase tracking-widest font-medium ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#d4af37]/70 transition-colors"
                />
              </div>
            </div>

            <div className="auth-elem mt-6">
              <Button type="button" className="w-full bg-[#d4af37] hover:bg-[#b38b22] text-black font-semibold tracking-widest uppercase rounded-sm py-6 flex items-center justify-center gap-2 group transition-all">
                Send Reset Link
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>

          <div className="auth-elem mt-8 pt-8 border-t border-white/10 text-center flex justify-center">
            <Link href="/login" className="flex items-center gap-2 text-white/40 hover:text-[#d4af37] text-[11px] tracking-widest uppercase transition-colors group">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Login
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
