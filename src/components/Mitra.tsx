import { Handshake } from 'lucide-react';

const logos = [
  '/src/assets/mitra/logo-dahua.png',
  '/src/assets/mitra/logo-hikvision.png',
  '/src/assets/mitra/logo-hilook.png',
  '/src/assets/mitra/logo-ezviz.png',
  '/src/assets/mitra/logo-hikvision.png',
  '/src/assets/mitra/logo-hilook.png',
  '/src/assets/mitra/logo-dahua.png',
  '/src/assets/mitra/logo-hikvision.png',
  '/src/assets/mitra/logo-ezviz.png',
];

const Mitra = () => {
  const mid = Math.ceil(logos.length / 2);
  const topRow = logos.slice(0, mid);
  const bottomRow = logos.slice(mid);

  return (
    <section className="py-10 sm:py-14 bg-gray-100" id="mitra">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Handshake className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 font-sans m-0">Dipercaya oleh Berbagai Perusahaan</h2>
          </div>
          <p className="text-blue-600 text-base sm:text-lg font-semibold">Beberapa mitra & klien yang telah bekerja sama dengan kami</p>
        </div>

        {/* ================= MOBILE (SCROLL) ================= */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 sm:hidden">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt={`Logo ${i}`} className="h-8 min-w-[100px] shrink-0 object-contain" />
          ))}
        </div>

        {/* ================= DESKTOP (ZIGZAG) ================= */}
        <div className="hidden sm:flex flex-col items-center px-4 gap-10">
          {/* Row 1 */}
          <div className="flex justify-center gap-12">
            {topRow.map((logo, i) => (
              <img key={i} src={logo} alt={`Logo ${i}`} className="h-12 min-w-[100px] object-contain grayscale hover:grayscale-0 transition duration-300" />
            ))}
          </div>

          {/* Row 2 (zigzag offset) */}
          <div className="flex justify-center gap-12 px-4">
            {bottomRow.map((logo, i) => (
              <img key={i} src={logo} alt={`Logo ${i}`} className="h-12 min-w-[100px] object-contain grayscale hover:grayscale-0 transition duration-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mitra;
