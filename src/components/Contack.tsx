import { Mail, Phone, MapPin } from 'lucide-react';

const kontak = [
  {
    icon: <Mail className="w-5 h-5 text-blue-600" />,
    label: 'Email',
    value: 'wandadhpartnet@gmail.com',
    href: 'mailto:wandadhpartnet@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5 text-blue-600" />,
    label: 'WhatsApp',
    value: '0852-4455-3004',
    href: 'https://wa.me/6285244553004',
  },
  {
    icon: <Phone className="w-5 h-5 text-blue-600" />,
    label: 'Facebook',
    value: 'Wanda CCTV',
    href: 'https://www.facebook.com/share/1ABDuYTAmb/',
  },
  {
    icon: <Phone className="w-5 h-5 text-blue-600" />,
    label: 'TikTok',
    value: '@wandacctv',
    href: 'https://www.tiktok.com/@wandacctv?_r=1&_t=ZS-95Kbrg0uSer',
  },
];

const alamat = 'Karangnunggal, Kec. Karangnunggal, Kabupaten Tasikmalaya, Jawa Barat';
const mapsEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.489921885592!2d108.1360612!3d-7.630342400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65e38cb04a0ce7%3A0x1140353b6a3c67ca!2sToko%20Lukman!5e0!3m2!1sid!2sid!4v1775538311473!5m2!1sid!2sid';

const Contact = () => (
  <section className="py-10 sm:py-14 bg-gray-50" id="kontak">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Phone className="w-8 h-8 text-blue-600" />
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 font-sans m-0">Hubungi Kami</h2>
        </div>
        <p className="text-blue-600 text-base sm:text-lg font-semibold">Hubungi kami untuk konsultasi, pemesanan, atau informasi lebih lanjut</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Kontak Info */}
        <div className="md:w-5/12 bg-white rounded-2xl shadow p-6 flex flex-col gap-4 justify-center">
          <div className="flex items-start gap-3">
            <MapPin className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <div className="font-semibold text-gray-900">Alamat</div>
              <div className="text-gray-600 text-sm">{alamat}</div>
            </div>
          </div>
          {kontak.map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              {item.icon}
              <span className="font-medium text-gray-900 group-hover:text-blue-600 transition">{item.value}</span>
            </a>
          ))}
        </div>
        {/* Google Maps */}
        <div className="md:w-7/12 rounded-2xl overflow-hidden shadow h-64 sm:h-80 flex">
          <iframe src={mapsEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Wanda CCTV" />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
