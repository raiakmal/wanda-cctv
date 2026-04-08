const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
    <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <img src="/src/assets/logo.png" alt="Wanda CCTV" className="w-8 h-8" />
        <span className="font-semibold text-gray-700 text-base">Wanda CCTV</span>
      </div>
      <div className="text-gray-500 text-sm text-center sm:text-right">&copy; {new Date().getFullYear()} Wanda CCTV. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
