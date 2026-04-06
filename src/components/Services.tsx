import { useState, useEffect, useRef } from 'react';
import { Wrench, Camera, Rocket, MapPin, ShieldCheck, Settings2 } from 'lucide-react';

const layananImages = ['/src/assets/dok/service-1.jpeg', '/src/assets/dok/service-2.jpeg', '/src/assets/dok/service-3.jpeg'];

const serviceItems = [
  {
    icon: <Camera className="w-8 h-8 text-blue-600" />,
    title: 'Instalasi CCTV',
    desc: 'Kami melayani pemasangan CCTV untuk rumah, toko, kantor, hingga area industri. Dikerjakan oleh teknisi berpengalaman dengan hasil rapi, aman, dan siap digunakan.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: 'Maintenance CCTV',
    desc: 'Pastikan sistem CCTV Anda selalu dalam kondisi terbaik. Kami menyediakan layanan perawatan rutin dan perbaikan untuk menghindari gangguan atau kerusakan.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    title: 'Upgrade Sistem',
    desc: 'Ingin kualitas gambar lebih jernih atau fitur lebih canggih? Kami siap membantu upgrade sistem CCTV Anda ke teknologi terbaru sesuai kebutuhan.',
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
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
    <section className="py-10 sm:py-14 bg-gray-50" id="layanan">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-stretch gap-8">
          {/* Kiri: Judul & Gambar Stack */}
          <div className="md:w-5/12 flex flex-col items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Settings2 className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600" />
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans">Layanan Kami</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="hidden sm:flex w-5 h-5 text-blue-600" />
                <span className="text-blue-600 text-base sm:text-lg font-semibold">Solusi Lengkap untuk Kebutuhan CCTV Anda</span>
              </div>
              <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base">Kami menyediakan berbagai layanan profesional untuk memastikan sistem keamanan Anda selalu optimal, mulai dari pemasangan hingga perawatan dan pengembangan.</p>
            </div>
            {/* Stack Images - Desktop/Tablet */}
            <div className="relative w-full hidden md:block mt-2 h-[260px] sm:h-[320px] md:h-[400px]">
              {/* Gambar belakang kiri (prev) */}
              <img
                src={layananImages[getStackIndexes()[0]]}
                alt="Layanan CCTV prev"
                className={`absolute left-6 sm:left-10 top-6 sm:top-10 w-8/12 sm:w-9/12 h-full rounded-2xl shadow-md object-cover z-10 blur-sm rotate-12 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar depan (current) */}
              <img
                src={layananImages[getStackIndexes()[1]]}
                alt="Layanan CCTV utama"
                className={`absolute left-0 top-0 w-8/12 sm:w-9/12 h-full rounded-2xl shadow-md shadow-blue-500 object-cover z-30 border-2 border-blue-500 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar belakang kanan (next) */}
              <img
                src={layananImages[getStackIndexes()[2]]}
                alt="Layanan CCTV next"
                className={`absolute left-4 sm:left-8 top-4 sm:top-8 w-8/12 sm:w-9/12 h-full rounded-2xl shadow object-cover z-20 blur-xs rotate-4 ${fadeClass}`}
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
              className="flex md:hidden w-full mt-4 relative"
              style={{
                aspectRatio: '3 / 4',
                width: 'min(90vw, 320px)',
                maxWidth: '320px',
                minWidth: '180px',
                height: 'auto',
              }}
            >
              {/* Gambar belakang kiri (prev) */}
              <img src={layananImages[getStackIndexes()[0]]} alt="Layanan CCTV prev" className={`absolute left-8 top-8 w-2/3 h-full rounded-xl shadow object-cover blur-sm rotate-12 z-10 ${fadeClass}`} style={{ objectPosition: 'center' }} />
              {/* Gambar depan (current) */}
              <img
                src={layananImages[getStackIndexes()[1]]}
                alt="Layanan CCTV utama"
                className={`absolute left-0 top-0 w-2/3 h-full rounded-xl shadow-xl shadow-blue-500 object-cover border-2 border-blue-600 z-30 ${fadeClass}`}
                style={{ objectPosition: 'center' }}
              />
              {/* Gambar belakang kanan (next) */}
              <img
                src={layananImages[getStackIndexes()[2]]}
                alt="Layanan CCTV next"
                className={`absolute left-6 top-6 w-2/3 h-full rounded-xl shadow object-cover blur-sm rotate-4 z-20 transition-all duration-500 ${fadeClass}`}
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
