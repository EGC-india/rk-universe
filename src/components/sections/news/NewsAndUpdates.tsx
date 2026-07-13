"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Grid, Megaphone, Palette, BookOpen, Calendar, Video, CalendarDays, ArrowRight } from "lucide-react";

export default function NewsAndUpdates() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("ALL UPDATES");

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Header text
    tl.fromTo(".news-header-elem",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    
    // Tabs
    tl.fromTo(".news-tabs",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Cards
    tl.fromTo(".news-card",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );

    // Button
    tl.fromTo(".news-btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.4"
    );

  }, { scope: containerRef });

  const tabs = [
    { name: "ALL UPDATES", icon: <Grid className="w-4 h-4" /> },
    { name: "ANNOUNCEMENTS", icon: <Megaphone className="w-4 h-4" /> },
    { name: "ART & CREATIONS", icon: <Palette className="w-4 h-4" /> },
    { name: "STORIES & CHRONICLES", icon: <BookOpen className="w-4 h-4" /> },
    { name: "EVENTS", icon: <Calendar className="w-4 h-4" /> },
    { name: "MEDIA", icon: <Video className="w-4 h-4" /> },
  ];

  const newsItems = [
    {
      id: 1,
      tag: "ANNOUNCEMENT",
      title: "RK AURUM GT VISION PROTOTYPE 01",
      desc: "The journey of future mobility begins. RK Aurum GT is more than a prototype — it is a statement of vision, design and innovation.",
      date: "12 MAY 2025",
      image: "/car.png",
      featured: true
    },
    {
      id: 2,
      tag: "ART & CREATIONS",
      title: "NEW ART COLLECTION RELEASED",
      desc: "A new series of original digital artworks is now available. Each piece reflects emotion, imagination and timeless beauty.",
      date: "12 MAY 2025",
      image: "/2.png"
    },
    {
      id: 3,
      tag: "STORIES & CHRONICLES",
      title: "THE CHRONICLES CONTINUE",
      desc: "New chapters, new mysteries and new worlds are coming to life. Stay tuned for upcoming stories.",
      date: "05 MAY 2025",
      image: "/3.png"
    },
    {
      id: 4,
      tag: "BEHIND THE SCENES",
      title: "BEHIND THE CREATION EPISODE 03",
      desc: "Go behind the scenes and see how ideas transform into powerful visual experiences.",
      date: "02 MAY 2025",
      image: "/1.png"
    },
    {
      id: 5,
      tag: "GLOBAL UPDATE",
      title: "EXPANDING THE UNIVERSE",
      desc: "RK Universe continues to grow across new platforms, new audiences and new possibilities.",
      date: "28 APR 2025",
      image: "/earth.png"
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#050505] text-white min-h-screen relative overflow-hidden pb-20">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-20">
        <div className="absolute top-10 -left-20 w-[400px] h-[400px]">
          <Image src="/earth.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]"></div>
        </div>
        <div className="absolute top-10 -right-20 w-[400px] h-[400px]">
           {/* Flipped earth as a placeholder for the right side image */}
          <Image src="/earth.png" alt="" fill className="object-cover scale-x-[-1] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="news-header-elem flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 lg:w-16 bg-white/30"></div>
            <p className="text-white/70 tracking-[0.2em] text-xs font-semibold uppercase">STAY CONNECTED WITH</p>
            <div className="h-[1px] w-8 lg:w-16 bg-white/30"></div>
          </div>
          
          <h1 className="news-header-elem text-4xl md:text-5xl lg:text-7xl font-serif text-[#d4af37] mb-8 uppercase tracking-wide">
            NEWS & UPDATES
          </h1>
          
          <div className="news-header-elem h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-8"></div>
          
          <p className="news-header-elem text-white/80 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
            Stay updated with the latest from RK Universe.<br/>
            Discover new creations, announcements, milestones and behind-the-scenes<br/>
            journeys from our interconnected worlds.
          </p>
        </div>

        {/* Tabs */}
        <div className="news-tabs w-full border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm p-1 lg:p-2 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 lg:gap-0 mb-12">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.name;
            return (
              <div key={tab.name} className="flex-1 flex items-center">
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 lg:px-4 text-[10px] lg:text-xs font-semibold tracking-widest uppercase transition-colors relative group ${isActive ? 'text-[#d4af37]' : 'text-white/60 hover:text-white'}`}
                >
                  <span className={isActive ? 'text-[#d4af37]' : 'text-white/40 group-hover:text-white/60 transition-colors'}>
                    {tab.icon}
                  </span>
                  {tab.name}
                  
                  {isActive && (
                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#d4af37]"></span>
                  )}
                </button>
                {idx < tabs.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-6 bg-white/10"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-[#d4af37]/30 transition-colors overflow-hidden rounded-md cursor-pointer relative h-[450px]">
              
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-20 border border-[#d4af37] text-[#d4af37] text-[9px] font-semibold tracking-widest uppercase px-2 py-1 rounded-sm bg-black/50 backdrop-blur-md">
                  FEATURED
                </div>
              )}
              
              {/* Image */}
              <div className="relative w-full h-[55%] overflow-hidden border-b border-white/5">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 p-5 lg:p-6 bg-[#0a0a0a]">
                <h4 className="text-[#d4af37] text-[9px] font-semibold tracking-widest uppercase mb-2">
                  {item.tag}
                </h4>
                <h3 className="text-white text-sm font-semibold leading-snug uppercase mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-[11px] leading-relaxed line-clamp-3 mb-4 flex-1">
                  {item.desc}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-1.5 text-white/40 text-[9px] tracking-widest uppercase font-semibold">
                    <CalendarDays className="w-3 h-3" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1 text-[#d4af37] text-[9px] tracking-widest uppercase font-semibold group-hover:translate-x-1 transition-transform">
                    READ MORE
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center news-btn">
          <button className="flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] px-8 py-3 text-xs font-semibold tracking-widest hover:bg-[#d4af37]/10 transition-colors rounded-sm uppercase">
            <Grid className="w-4 h-4" />
            VIEW ALL UPDATES
          </button>
        </div>

      </div>
    </div>
  );
}
