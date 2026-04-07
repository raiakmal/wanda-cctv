import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Solusi CCTV Terbaik untuk Rumah & Bisnis Anda',
    desc: 'Pantau keamanan properti Anda kapan saja dan di mana saja dengan layanan pemasangan CCTV profesional.',
    img: '/src/assets/hero/hero-1.jpg',
  },
  {
    title: 'Jasa Pasang CCTV Bergaransi',
    desc: 'Dapatkan instalasi rapi, harga transparan, dan support after sales terbaik dari tim kami.',
    img: '/src/assets/hero/hero-2.jpg',
  },
  {
    title: 'Katalog Produk CCTV Terlengkap',
    desc: 'Pilih berbagai tipe kamera dan paket sesuai kebutuhan Anda, konsultasi gratis!',
    img: '/src/assets/hero/hero-3.jpg',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 8000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section className="relative w-full h-72 sm:h-96 md:h-[420px] lg:h-[520px] flex items-center justify-center overflow-hidden bg-gray-50">
      {slides.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img src={slide.img} alt={slide.title} className="w-full h-full object-cover object-center brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-11/12 max-w-xs sm:max-w-xl sm:w-auto px-3 sm:px-6">
            <h1 className="text-lg xs:text-lg sm:text-xl md:text-4xl font-bold text-white drop-shadow mb-2 sm:mb-4 font-sans">{slide.title}</h1>
            <p className="text-xs sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 font-sans">{slide.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => (window.location.hash = '#katalog')}
                className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-blue-600 text-white text-sm sm:text-base font-medium hover:bg-blue-700 transition cursor-pointer"
              >
                Hubungi Kami
              </button>
              <button
                type="button"
                onClick={() => (window.location.hash = '#kontak')}
                className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white text-blue-600 border border-blue-600 text-sm sm:text-base font-medium hover:bg-gray-200 transition cursor-pointer"
              >
                Lihat Katalog
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Panah navigasi */}
      <button onClick={prevSlide} className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow rounded-full p-2 transition z-20 cursor-pointer" aria-label="Sebelumnya">
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      <button onClick={nextSlide} className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow rounded-full p-2 transition z-20 cursor-pointer" aria-label="Selanjutnya">
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>

      {/* Indikator bulat */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-blue-600 border-blue-600' : 'bg-white border-white'} transition cursor-pointer`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
