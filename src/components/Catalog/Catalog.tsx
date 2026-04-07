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

const Catalog = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-10 sm:py-14 bg-white" id="katalog">
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
          <button type="button" onClick={() => (window.location.hash = '#kontak')} className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-base shadow hover:bg-blue-700 transition">
            Konsultasi & Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
