"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className={`fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-start transition-opacity duration-700 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="w-20 md:w-28 pointer-events-auto">
          <img src="/image_6.png" alt="Lanvok Studio" className="w-full mix-blend-multiply" />
        </div>
        <div className="flex flex-col items-end gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold pointer-events-auto">
          <a href="#projets" className="hover:opacity-40 transition-opacity">Expertise</a>
          <a href="#contact" className="hover:opacity-40 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* 2. HÉRO */}
      <section className="relative w-full h-screen flex flex-col justify-end p-8 md:p-12 pb-24">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/40" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative z-10">
          <h1 className="text-6xl md:text-[9rem] leading-[0.9] font-serif italic uppercase">L'IMPACT.</h1>
          <h2 className="text-3xl md:text-6xl mt-4 font-mono uppercase tracking-[0.05em] text-[#333333]">RIEN D'AUTRES.</h2>
        </motion.div>
      </section>

      {/* 3. EXPERTISE / PROJETS */}
      <section id="projets" className="relative z-10 py-32 px-8 md:px-12 max-w-7xl mx-auto bg-white min-h-screen flex flex-col justify-center">
        <h3 className="text-xs uppercase tracking-[0.3em] mb-20 text-[#666666] border-b border-black pb-4">Nos Domaines d'Intervention</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {[
            { titre: "IDENTITÉ RADICALE", desc: "Élimination du bruit visuel pour une marque qui impose le silence.", img: "/projet1.jpg" },
            { titre: "TYPOGRAPHIE D'ASSAUT", desc: "Chaque caractère est forgé pour verrouiller le regard du prospect.", img: "/projet2.jpg" },
            { titre: "SYSTÈME DE COLLISION", desc: "Stratégie digitale optimisée pour la conversion brutale.", img: "/projet3.jpg" }
          ].map((projet, index) => (
            <div key={index} className="group cursor-default">
              <div className="w-full h-80 mb-8 overflow-hidden bg-black flex items-center justify-center">
                 <img src={projet.img} alt={projet.titre} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <span className="text-[10px] text-[#999999] mb-4 block">0{index + 1}</span>
              <h4 className="text-2xl font-serif italic mb-6 leading-tight">{projet.titre}</h4>
              <p className="text-sm text-[#666666] tracking-wide leading-relaxed">{projet.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONTACT */}
      <section id="contact" className="relative z-10 bg-black text-white py-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Prêt à créer<br />l'impact ?</h2>
            <p className="text-[#999999] text-lg font-light max-w-md">Lanvok Studio est disponible pour discuter de votre prochain projet.</p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-8 text-xl md:text-2xl font-mono uppercase tracking-widest w-full">
            <a href="https://wa.me/22644075577" target="_blank" className="flex items-center gap-4 hover:text-[#555555] pb-4 border-b border-[#333333]">
              <span className="text-sm text-[#666666]">WhatsApp</span> +226 44 07 55 77
            </a>
            <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
              <a href="https://www.instagram.com/lanvok.studio/" target="_blank" className="flex items-center gap-4 hover:text-[#555555]">
                <span className="text-sm text-[#666666]">Instagram</span> @lanvok.studio
              </a>
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white">
                <img src="/qr.png" alt="QR" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}