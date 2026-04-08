import { UserCheck, Clock, BadgeDollarSign, Wrench, Smartphone, Headphones, ShieldCheck } from 'lucide-react';

const featureItems = [
  {
    icon: <UserCheck className="w-6 h-6 text-blue-600" />,
    title: 'Teknisi Berpengalaman & Profesional',
    desc: 'Dikerjakan langsung oleh tim ahli yang sudah berpengalaman menangani berbagai jenis instalasi CCTV, mulai dari rumah hingga skala bisnis.',
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: 'Proses Cepat & Tepat Waktu',
    desc: 'Kami memahami pentingnya keamanan, setiap pemasangan dilakukan dengan cepat tanpa mengorbankan kualitas.',
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-blue-600" />,
    title: 'Harga Transparan & Terjangkau',
    desc: 'Tidak ada biaya tersembunyi. Semua harga kami jelaskan di awal, sehingga Anda bisa menyesuaikan dengan kebutuhan dan budget.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    title: 'Garansi & Layanan Purna Jual',
    desc: 'Kami memberikan garansi pemasangan serta dukungan teknis jika terjadi kendala setelah instalasi.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Monitoring Mudah dari Smartphone',
    desc: 'Pantau kondisi rumah atau bisnis Anda kapan saja dan di mana saja langsung dari HP.',
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-600" />,
    title: 'Support & Konsultasi 24 Jam',
    desc: 'Tim kami siap membantu Anda kapan saja, mulai dari konsultasi hingga penanganan masalah.',
  },
];

const Features = () => (
  <section className="py-10 sm:py-14 bg-white" id="features">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex justify-center mb-2">
          <ShieldCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-sans">Keunggulan Kami</h2>
        <div className="flex justify-center items-center gap-2 mb-2">
          <p className="text-blue-600 text-base sm:text-lg font-semibold">Solusi Keamanan yang Bisa Anda Percaya</p>
        </div>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">Kami hadir untuk memberikan perlindungan maksimal bagi rumah dan bisnis Anda dengan layanan CCTV profesional, cepat, dan terpercaya.</p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featureItems.map((f, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-sm border border-blue-200 flex flex-col h-full group transition-all duration-300 hover:shadow-lg hover:shadow-blue-400 hover:-translate-y-2 hover:bg-white">
            <div className="mb-3">{f.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{f.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
