"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Video, PenTool, Car, BookOpen, Globe } from "lucide-react";

export default function AboutRK() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate left content
    tl.fromTo(".about-text-content > *", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
    
    // Animate right image
    tl.fromTo(".about-image-wrapper",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Animate quote box
    tl.fromTo(".about-quote",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    // Animate bottom cards
    tl.fromTo(".about-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.5"
    );

  }, { scope: containerRef });

  const cards = [
    {
      id: 1,
      image: "/1.png",
      icon: <Video className="w-6 h-6 text-[#d4af37]" />,
      title: "CINEMATIC STORIES",
      desc: "Stories that inspire, move and stay with you forever."
    },
    {
      id: 2,
      image: "/2.png",
      icon: <PenTool className="w-6 h-6 text-[#d4af37]" />,
      title: "ARTISTIC CREATIONS",
      desc: "Visual expressions that speak beyond words."
    },
    {
      id: 3,
      image: "/car.png",
      icon: <Car className="w-6 h-6 text-[#d4af37]" />,
      title: "FUTURE VISIONS",
      desc: "Exploring ideas that shape tomorrow's world."
    },
    {
      id: 4,
      image: "/3.png",
      icon: <BookOpen className="w-6 h-6 text-[#d4af37]" />,
      title: "THE CHRONICLES",
      desc: "Worlds built with imagination, emotion and depth."
    },
    {
      id: 5,
      image: "/earth.png",
      icon: <Globe className="w-6 h-6 text-[#d4af37]" />,
      title: "GLOBAL IMPACT",
      desc: "Creating connections and inspiring across the world."
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#050505] text-white overflow-hidden pb-20">
      
      {/* Top Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row relative">
        
        {/* Left Content */}
        <div className="about-text-content w-full lg:w-1/2 flex flex-col justify-center z-10 space-y-6 lg:pr-10 relative">
          <div>
            <p className="text-white/60 tracking-[0.2em] text-xs font-semibold mb-2 uppercase">THE VISION BEHIND</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#d4af37] mb-4 uppercase">
              ABOUT RK
            </h1>
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[1px] w-8 bg-[#d4af37]"></div>
               <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]"></div>
               <div className="h-[1px] w-8 bg-[#d4af37]"></div>
            </div>
          </div>
          
          <h2 className="text-[#d4af37] font-serif text-lg tracking-widest uppercase mt-4 mb-2">
            A CREATOR. A DREAMER. A STORYTELLER.
          </h2>
          
          <div className="space-y-6 text-white/80 text-sm leading-relaxed max-w-xl">
            <p>
              RK Universe was born from a simple belief — that imagination has the power to transform lives.
            </p>
            <p>
              For years, stories, art and ideas lived within a world of thoughts. Today, that world is shared with you.
            </p>
            <p>
              Every story, every artwork and every creation is a part of a greater journey — a journey of passion, purpose and legacy.
            </p>
            <p>
              This is not just a platform.
            </p>
            <p className="text-[#d4af37] font-serif text-lg tracking-wide">
              This is a universe built with heart.
            </p>
          </div>

          <div className="mt-12">
            <div className="font-['Brush_Script_MT',cursive] text-[#d4af37] text-4xl mb-2 opacity-80">
              R.K.
            </div>
            <p className="text-white/50 text-xs tracking-widest uppercase">
              FOUNDER, RK UNIVERSE
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end items-end">
           <div className="about-image-wrapper relative w-full sm:w-[80%] lg:w-[120%] lg:-mr-10 aspect-[3/4] sm:aspect-square lg:aspect-auto lg:h-[800px]" style={{ maskImage: "linear-gradient(to right, transparent, black 15%), linear-gradient(to top, transparent, black 20%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%), linear-gradient(to top, transparent, black 20%)", WebkitMaskComposite: "source-in", maskComposite: "intersect" }}>
             
             <Image 
               src="/rkimg.png"
               alt="RK Founder"
               fill
               className="object-cover object-top lg:object-center relative z-10"
               priority
             />

             {/* Quote Box inside the photo */}
             <div className="about-quote absolute bottom-4 right-0 lg:bottom-32 lg:right-16 z-30 max-w-[280px] lg:max-w-sm p-2 flex transform scale-90 sm:scale-100 origin-bottom-right">
               <div className="text-[#d4af37] text-3xl lg:text-5xl font-serif leading-none mr-2 lg:mr-3 mt-1">“</div>
               <div>
                  <p className="text-white/90 text-xs lg:text-base font-serif italic leading-relaxed mb-2 lg:mb-4">
                   I don&apos;t just create for today,<br/>I create for a time when stories<br/>will still be remembered.
                 </p>
                 <div className="text-right flex items-center justify-end gap-2">
                   <div className="text-[#d4af37] text-3xl lg:text-5xl font-serif leading-none rotate-180">“</div>
                   <div className="text-white/70 text-[10px] lg:text-sm font-semibold tracking-widest mt-1">- RK</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="container mx-auto px-4 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="about-card flex flex-col h-auto min-h-[300px] lg:h-[350px] border border-white/10 bg-[#050505] overflow-hidden group"
            >
              {/* Top Image */}
              <div className="relative w-full h-1/2 min-h-[160px] overflow-hidden border-b border-[#d4af37]/30">
                 <Image 
                   src={card.image}
                   alt={card.title}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>

              {/* Bottom Content */}
              <div className="relative flex flex-col items-center justify-start flex-1 p-6 pt-8 z-10 bg-[#050505]">
                <div className="absolute -top-6 left-0 right-0 flex justify-center w-full">
                  <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-[#050505] flex items-center justify-center z-20">
                    {card.icon}
                  </div>
                </div>
                
                <h3 className="text-center text-[#d4af37] text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-3 mt-2">
                  {card.title}
                </h3>
                <p className="text-center text-white/70 text-[10px] md:text-xs leading-relaxed max-w-[200px] mx-auto">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
