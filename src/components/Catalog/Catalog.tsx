import { useState } from 'react';
import { Package, BadgeCheck, Camera, Wrench, Headphones, ShoppingCart } from 'lucide-react';
import CatalogCard from './CatalogCard';

const paketCctv = [
  {
    icon: <Package className="w-5 h-5 text-blue-600" />,
    title: 'Paket CCTV 4 Channel',
    desc: '4 Kamera HD, DVR, kabel, adaptor, pemasangan & setting. Cocok untuk rumah/toko kecil. Termasuk instalasi, garansi 1 tahun, dan support remote monitoring.',
    price: 'Mulai Rp2.500.000',
    image: '/src/assets/catalog/paket-1.jpeg',
  },
  {
    icon: <Package className="w-5 h-5 text-blue-600" />,
    title: 'Paket CCTV 8 Channel',
    desc: '8 Kamera HD, DVR, kabel, adaptor, pemasangan & setting. Untuk kantor/ruko/small bisnis. Paket lengkap dengan pemasangan profesional dan pelatihan penggunaan.',
    price: 'Mulai Rp4.500.000',
    image: '/src/assets/catalog/paket-2.jpeg',
  },
  {
    icon: <Package className="w-5 h-5 text-blue-600" />,
    title: 'Paket CCTV 16 Channel',
    desc: '16 Kamera HD, DVR, kabel, adaptor, pemasangan & setting. Untuk big bisnis. Paket lengkap dengan pemasangan profesional dan pelatihan penggunaan.',
    price: 'Mulai Rp8.500.000',
    image: '/src/assets/catalog/paket-3.jpeg',
  },
];

const produkSatuan = [
  {
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    title: 'Kamera CCTV HD',
    desc: 'Kamera CCTV indoor/outdoor, night vision, waterproof. Resolusi 2MP, IR hingga 20m, garansi 1 tahun.',
    price: 'Rp350.000',
    image: '/src/assets/catalog/camera.jpeg',
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    title: 'DVR 4/8/16 Channel',
    desc: 'DVR berbagai kapasitas, support remote monitoring. Mendukung berbagai merek kamera, mudah diintegrasikan.',
    price: 'Rp700.000',
    image: '/src/assets/catalog/dvr.jpeg',
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-blue-600" />,
    title: 'Harddisk CCTV',
    desc: 'Harddisk khusus CCTV, tahan panas & getaran. Kapasitas up to 4TB, cocok untuk rekaman 24 jam nonstop.',
    price: 'Rp650.000',
    image: '/src/assets/catalog/harddisk.jpg',
  },
];

const jasaLayanan = [
  {
    icon: <Camera className="w-5 h-5 text-blue-600" />,
    title: 'Jasa Instalasi CCTV',
    desc: 'Pemasangan profesional, rapi, dan bergaransi. Teknisi berpengalaman, pemasangan cepat dan rapi.',
    price: 'Mulai Rp350.000/titik',
    image: '/src/assets/catalog/instalasi.jpeg',
  },
  {
    icon: <Wrench className="w-5 h-5 text-blue-600" />,
    title: 'Maintenance & Perbaikan',
    desc: 'Perawatan rutin, perbaikan, dan upgrade sistem CCTV. Layanan on-call dan kontrak maintenance bulanan/tahunan.',
    price: 'Mulai Rp150.000',
    image: '/src/assets/catalog/maintenance.jpeg',
  },
  {
    icon: <Headphones className="w-5 h-5 text-blue-600" />,
    title: 'Survey & Konsultasi',
    desc: 'Survey lokasi & konsultasi kebutuhan CCTV GRATIS. Survey langsung ke lokasi dan rekomendasi solusi terbaik.',
    price: 'Gratis',
    image: '/src/assets/catalog/konsultasi.jpeg',
  },
];

const tabs = [
  { label: 'Paket CCTV (Recommended)', data: paketCctv },
  { label: 'Produk Satuan', data: produkSatuan },
  { label: 'Jasa Layanan', data: jasaLayanan },
];

const waNumber = '6285244553004';
const waTemplate = encodeURIComponent('Halo, saya ingin konsultasi dan pesan produk/jasa CCTV dari Wanda CCTV.');

const Catalog = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-10 sm:py-14 bg-white" id="catalog">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-2">
            <ShoppingCart className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 font-sans m-0">Katalog Kami</h2>
          </div>
          <p className="text-blue-600 text-base sm:text-lg font-semibold">Pilih Paket, Produk, atau Jasa Sesuai Kebutuhan Anda</p>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-200
                ${activeTab === idx ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-blue-700 hover:bg-blue-50'}`}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tabs[activeTab].data.map((item, i) => (
            <CatalogCard key={i} icon={item.icon} title={item.title} desc={item.desc} price={item.price} image={item.image} />
          ))}
        </div>
        {/* CTA Section */}
        <div className="flex justify-center mt-10">
          <a
            href={`https://wa.me/${waNumber}?text=${waTemplate}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-base shadow transition flex items-center gap-2"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 3C9.372 3 4 8.372 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.236A11.94 11.94 0 0 0 16 27c6.628 0 12-5.372 12-12S22.628 3 16 3zm0 22c-1.89 0-3.68-.52-5.192-1.418l-.37-.22-4.648 1.33 1.33-4.648-.22-.37A9.956 9.956 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.27-7.03c-.288-.144-1.7-.84-1.963-.936-.263-.096-.454-.144-.646.144-.192.288-.74.936-.907 1.128-.168.192-.335.216-.623.072-.288-.144-1.216-.448-2.32-1.429-.858-.765-1.437-1.71-1.607-1.998-.168-.288-.018-.444.126-.588.13-.13.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.646-1.56-.884-2.142-.232-.558-.468-.48-.646-.489l-.552-.01c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.12 4.928 4.248.688.297 1.224.474 1.642.606.69.22 1.32.189 1.818.115.555-.082 1.7-.693 1.94-1.362.24-.669.24-1.243.168-1.362-.072-.12-.264-.192-.552-.336z"
                fill="#fff"
              />
            </svg>
            Konsultasi & Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
