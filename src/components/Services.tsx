import { useState, useEffect, useRef } from 'react';
import { Wrench, Camera, Rocket, MapPin, Settings2 } from 'lucide-react';

const layananImages = ['/src/assets/services/service-1.jpeg', '/src/assets/services/service-2.jpeg', '/src/assets/services/service-3.jpeg'];

const serviceItems = [
  {
    icon: <Camera className="w-6 h-6 text-blue-600" />,
    title: 'Instalasi CCTV',
    desc: 'Kami melayani pemasangan CCTV untuk rumah, toko, kantor, hingga area industri. Dikerjakan oleh teknisi berpengalaman dengan hasil rapi, aman, dan siap digunakan.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    title: 'Maintenance CCTV',
    desc: 'Pastikan sistem CCTV Anda selalu dalam kondisi terbaik. Kami menyediakan layanan perawatan rutin dan perbaikan untuk menghindari gangguan atau kerusakan.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: 'Upgrade Sistem',
    desc: 'Ingin kualitas gambar lebih jernih atau fitur lebih canggih? Kami siap membantu upgrade sistem CCTV Anda ke teknologi terbaru sesuai kebutuhan.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: 'Survey Lokasi',
    desc: 'Kami menyediakan layanan survey langsung ke lokasi untuk menentukan titik pemasangan terbaik, sehingga hasil instalasi lebih maksimal dan efisien.',
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Geser otomatis setiap 8 detik dengan animasi fade
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % layananImages.length);
        setFade(true);
      }, 400); // durasi fade out
    }, 8000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Untuk stack, urutkan index gambar
  const getStackIndexes = () => {
    const prev = (current - 1 + layananImages.length) % layananImages.length;
    const next = (current + 1) % layananImages.length;
    return [prev, current, next];
  };

  // Animasi fade
  const fadeClass = fade ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500';

  return (
    <section className="py-10 sm:py-14 bg-gray-50" id="services">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-stretch gap-8">
          {/* Kiri: Judul & Gambar Stack */}
          <div className="md:w-5/12 flex flex-col items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Settings2 className="w-8 h-8 text-blue-600" />
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans">Layanan Kami</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 text-base sm:text-lg font-semibold">Solusi Lengkap untuk Kebutuhan CCTV Anda</span>
              </div>
              <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base">Kami menyediakan berbagai layanan profesional untuk memastikan sistem keamanan Anda selalu optimal, mulai dari pemasangan hingga perawatan dan pengembangan.</p>
            </div>
            {/* CTA */}
            <div className="flex justify-center mb-4">
              <button
                type="button"
                onClick={() => (window.location.hash = '#contact')}
                className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white text-blue-600 border border-blue-600 text-sm sm:text-base font-medium hover:bg-gray-200 transition cursor-pointer"
              >
                Hubungi Kami
              </button>
            </div>
            {/* Stack Images - Desktop/Tablet */}
            <div className="relative w-full hidden md:block mt-2 h-[260px] sm:h-[320px] md:h-[400px] group">
              {/* Gambar belakang kiri (prev) */}
              <img
                src={layananImages[getStackIndexes()[0]]}
                alt="Layanan CCTV prev"
                className={`absolute left-6 sm:left-10 top-6 sm:top-10 w-8/12 sm:w-9/12 h-full rounded-2xl shadow-md object-cover z-10 blur-sm rotate-12 group-hover:scale-105 transition-transform duration-500 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar depan (current) */}
              <img
                src={layananImages[getStackIndexes()[1]]}
                alt="Layanan CCTV utama"
                className={`absolute left-0 top-0 w-8/12 sm:w-9/12 h-full rounded-2xl shadow-lg group-hover:shadow-blue-600 object-cover z-30 group-hover:scale-105 transition-transform transition-shadow duration-500 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar belakang kanan (next) */}
              <img
                src={layananImages[getStackIndexes()[2]]}
                alt="Layanan CCTV next"
                className={`absolute left-4 sm:left-8 top-4 sm:top-8 w-8/12 sm:w-9/12 h-full rounded-2xl shadow object-cover z-20 blur-xs rotate-4 group-hover:scale-105 transition-transform duration-500 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
          {/* Kanan: Daftar Layanan */}
          <div className="md:w-7/12 flex flex-col gap-4">
            {serviceItems.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm shadow-blue-100 border border-gray-100 flex flex-col items-start group transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
            {/* Stack Images - Mobile */}
            <div
              className="md:hidden flex justify-center items-center w-full mt-4 relative group"
              style={{
                width: '100%',
                maxWidth: '320px',
                minWidth: '180px',
                aspectRatio: '9 / 12',
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {/* Gambar belakang kiri (prev) */}
              <img
                src={layananImages[getStackIndexes()[0]]}
                alt="Layanan CCTV prev"
                className={`absolute left-6 top-6 w-9/12 h-full rounded-2xl shadow-md object-cover z-10 blur-sm rotate-12 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-105 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar depan (current) */}
              <img
                src={layananImages[getStackIndexes()[1]]}
                alt="Layanan CCTV utama"
                className={`absolute left-0 top-0 w-9/12 h-full rounded-2xl shadow-lg shadow-blue-600 object-cover z-30 border-2 border-blue-500 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:-translate-y-2 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar belakang kanan (next) */}
              <img
                src={layananImages[getStackIndexes()[2]]}
                alt="Layanan CCTV next"
                className={`absolute left-4 top-4 w-9/12 h-full rounded-2xl shadow object-cover z-20 blur-xs rotate-4 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:scale-105 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
