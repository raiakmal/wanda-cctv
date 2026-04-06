import React, { useState } from 'react';

interface CatalogCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  price: string;
  image: string;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ icon, title, desc, price, image }) => {
  const [expanded, setExpanded] = useState(false);

  // Deskripsi expand (lebih dari 100 karakter)
  const isLong = desc.length > 100;
  const shortDesc = isLong ? desc.slice(0, 100) + '...' : desc;

  return (
    <div className="bg-gray-50 rounded-2xl p-0 shadow-sm border border-blue-100 flex flex-col group transition-all duration-300 hover:shadow-lg hover:shadow-blue-300 hover:bg-white overflow-hidden">
      <div className="w-full h-40 sm:h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={title} className="object-contain w-full h-full" loading="lazy" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">{icon}</div>
        <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">{title}</h3>
        <p className="text-gray-700 text-sm sm:text-base mb-2">{expanded || !isLong ? desc : shortDesc}</p>
        {isLong && (
          <button className="text-gray-500 text-xs font-semibold mb-2 self-start hover:underline" onClick={() => setExpanded((v) => !v)} type="button">
            {expanded ? 'Tutup' : 'Selengkapnya'}
          </button>
        )}
        <span className="font-bold text-blue-600 text-base mt-auto">{price}</span>
      </div>
    </div>
  );
};

export default CatalogCard;
