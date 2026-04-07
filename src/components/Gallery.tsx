import { useState } from 'react';
import { Camera, ChevronDown, ChevronUp } from 'lucide-react';

const photos = [
  { src: '/src/assets/dok/camera-1.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-1.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/camera-2.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-4.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/camera-3.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/paket-1.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-2.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-3.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-6.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-7.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-11.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/paket-2.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-12.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-8.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-1.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-9.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-2.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/paket-3.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-3.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/paket-4.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-4.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/paket-5.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-5.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-5.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/result-10.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-6.jpeg', alt: 'Pemasangan CCTV' },
  { src: '/src/assets/dok/service-7.jpeg', alt: 'Pemasangan CCTV' },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePhotos = showAll ? photos : photos.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50" id="galeri">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Camera className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 font-sans m-0">Dokumentasi Pemasangan</h2>
          </div>
          <p className="text-blue-600 text-base sm:text-lg font-semibold">Beberapa hasil pekerjaan pemasangan CCTV oleh tim profesional kami</p>
        </div>
        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 space-y-4">
          {visiblePhotos.map((photo, i) => (
            <div key={i} className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer">
              {/* Foto */}
              <img src={photo.src} alt={photo.alt} className="w-full h-auto object-cover transition duration-500 group-hover:scale-110" loading="lazy" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Gambar expand (lebih dari 8 gambar) */}
        {photos.length > 8 && (
          <div className="flex justify-center mt-8">
            <button onClick={() => setShowAll((v) => !v)} className="flex items-center gap-1 text-blue-600 font-semibold text-sm hover:underline focus:outline-none cursor-pointer" type="button">
              {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Selengkapnya'}
              {showAll ? <ChevronUp className="w-6 h-6 text-blue-600" /> : <ChevronDown className="w-6 h-6 text-blue-600" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
