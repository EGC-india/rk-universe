"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Video, Palette, Feather, Star, Award, Crown, Globe, Car, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const container = useRef(null);
  
  // Initialize Embla Carousel with responsive scrolling
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1, // 1 by 1 on mobile
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 2 } // 2 by 2 on large screens
    }
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    tl.from(".card-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.5");

    tl.from(".features-bar", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");
  }, { scope: container });

  const originalSlides = [
    {
      id: 'green-chillies',
      title: 'GREEN CHILLIES',
      subtitle: 'Entertainment And Media',
      desc: 'Driven by powerful stories and cinematic excellence',
      image: '/1.png',
      link: 'https://www.instagram.com/greenchillies.media/',
      linkText: 'ENTER WORLD',
      icon: Video,
      color: '#8a9a5b'
    },
    {
      id: 'rk-art',
      title: 'RK ART COLLECTION',
      subtitle: 'Digital & Fine Arts',
      desc: 'A curated collection of original artworks that reflect emotion, imagination and timeless beauty.',
      image: '/2.png',
      link: 'https://www.instagram.com/rkart.world/',
      linkText: 'ENTER GALLERY',
      icon: Palette,
      color: '#d4af37'
    },
    {
      id: 'rk-chronicles',
      title: 'RK CHRONICLES',
      subtitle: 'Literature & Stories',
      desc: 'Step into our digital library and read original novels and stories from the RK Universe.',
      image: '/3.png',
      link: 'https://www.instagram.com/therkchronicles/',
      linkText: 'ENTER LIBRARY',
      icon: Feather,
      color: '#d4af37'
    },
    {
      id: 'rk-mobility',
      title: 'RK MOBILITY',
      subtitle: 'Future of Transportation',
      desc: 'Redefining automotive design, performance, and the future of mobility.',
      image: '/car.png',
      link: 'https://www.instagram.com/rkmobility/',
      linkText: 'EXPLORE MOBILITY',
      icon: Car,
      color: '#d4af37'
    }
  ];

  // Duplicating slides to ensure smooth infinite loop on larger screens where 3 items are visible
  const slides = [...originalSlides, ...originalSlides.map(s => ({...s, id: s.id + '-dup'}))];

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black relative">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image src="/background.png" alt="Background" fill className="object-cover opacity-40 mix-blend-lighten" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#050505]/70 to-[#050505]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />
        
        <main className="flex-1 relative overflow-hidden flex flex-col items-center pt-16 pb-12">

        {/* Hero Header */}
        <div className="text-center px-4 flex flex-col items-center w-full max-w-7xl mx-auto mb-16">
          <div className="hero-text flex items-center gap-4 mb-2">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <span className="text-[#d4af37] font-['--font-cinzel'] font-semibold tracking-[0.3em] text-xs sm:text-sm">WELCOME TO</span>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
          
          <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl font-['--font-cinzel'] text-[#d4af37] font-bold tracking-wider mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            RK UNIVERSE
          </h1>
          
          <div className="hero-text flex flex-col gap-2">
            <h2 className="text-white font-semibold tracking-[0.2em] text-sm sm:text-base">
              THREE WORLDS. ONE VISION.
            </h2>
            <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-medium">
              Stories that inspire. Art that speaks. Experiences that stay.
            </p>
          </div>
        </div>

        {/* The Carousel */}
        <div className="relative w-full max-w-7xl mx-auto mb-16 px-4 sm:px-8 group">
          
          {/* Navigation Arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all backdrop-blur-md sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all backdrop-blur-md sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {slides.map((slide) => {
                const Icon = slide.icon;
                return (
                  <div key={slide.id} className="card-item flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                    <div 
                      className="group/card relative flex flex-col h-[520px] border border-white/10 rounded-sm overflow-hidden bg-black transition-all duration-500 hover:-translate-y-2"
                      style={{ '--hover-color': slide.color } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 30px ${slide.color}20`, border: `1px solid ${slide.color}80` }}></div>
                      
                      <div className="relative h-[55%] w-full">
                        <div className="absolute inset-0 opacity-80 transition-all duration-700 group-hover/card:opacity-100 group-hover/card:scale-105">
                          <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      </div>
                      
                      <div className="relative h-[45%] flex flex-col items-center text-center px-6 pb-8 z-10 pt-10">
                        <div 
                          className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border bg-black transition-transform duration-500 group-hover/card:scale-110 flex items-center justify-center"
                          style={{ borderColor: slide.color, color: slide.color, boxShadow: `0 0 15px ${slide.color}30` }}
                        >
                          <Icon className="w-6 h-6 fill-current" />
                        </div>
                        <h3 
                          className="font-['--font-cinzel'] text-[20px] xl:text-[22px] font-bold tracking-wider mb-1 mt-1"
                          style={{ color: slide.color, textShadow: `0 0 10px ${slide.color}30` }}
                        >
                          {slide.title}
                        </h3>
                        {slide.subtitle && (
                          <p 
                            className="text-[9px] xl:text-[10px] tracking-[0.2em] font-medium mb-4 uppercase"
                            style={{ color: `${slide.color}e6` }}
                          >
                            {slide.subtitle}
                          </p>
                        )}
                        <p className="text-white/70 text-[11px] xl:text-xs leading-[1.8] mb-auto font-light">
                          {slide.desc}
                        </p>
                        <a 
                          href={slide.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="border text-[10px] xl:text-[11px] font-semibold tracking-widest px-6 xl:px-8 py-2.5 transition-colors uppercase mt-6 flex items-center gap-2 group-hover/card:bg-white/5"
                          style={{ borderColor: `${slide.color}50`, color: slide.color }}
                        >
                          {slide.linkText} <span className="text-[14px] leading-none">&rsaquo;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination - Fixed to 2 dots */}
          <div className="flex justify-center gap-3 mt-8">
            {[0, 1].map((index) => {
              // Calculate which original slide we are viewing (0-3) based on selected index
              // We check how many snaps are created to adapt the calculation
              const totalSnaps = emblaApi ? emblaApi.scrollSnapList().length : 8;
              const originalIndex = (selectedIndex % totalSnaps) % 4;
              const isActive = Math.floor(originalIndex / 2) === index;
              
              return (
                <button
                  key={index}
                  onClick={() => scrollTo(index * (totalSnaps / 2))}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#d4af37] w-6' : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Features bar */}
        <div className="features-bar w-full max-w-5xl mx-auto px-4 mb-16">
          <div className="bg-[#050505] border border-white/5 rounded-sm py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4">
              <Star className="text-[#d4af37] w-5 h-5 fill-current" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Original Stories</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
            <div className="flex items-center gap-4">
              <Award className="text-[#d4af37] w-5 h-5" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Timeless Art</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
            <div className="flex items-center gap-4">
              <Crown className="text-[#d4af37] w-5 h-5 fill-current" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Premium Experiences</span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent"></div>
            <div className="flex items-center gap-4">
              <Globe className="text-[#d4af37] w-5 h-5" />
              <span className="text-white/90 text-[11px] tracking-[0.15em] font-medium uppercase">Global Community</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="flex flex-col items-center px-4 mb-8">
          <p className="text-white/80 text-[13px] md:text-sm font-medium tracking-[0.2em] uppercase text-center mb-6">
            <span className="text-[#d4af37] text-xl font-serif leading-none mr-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">&quot;</span>
            We don&apos;t just create content, we build universes.
            <span className="text-[#d4af37] text-xl font-serif leading-none ml-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">&quot;</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#d4af37]"></div>    
            <span className="text-[#d4af37] font-['--font-cinzel'] text-sm tracking-widest italic drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">RK</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#d4af37]"></div>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
