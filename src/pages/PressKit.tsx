import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'

export default function PressKit() {
  const [selectedLogo, setSelectedLogo] = useState<{ name: string; file: string } | null>(null);

  const logos = [
    { name: "PPI Aachen Logo - RWTH Colour Scheme", file: "logo-rwth-colour.png" },
    { name: "PPI Aachen Logo - FH Colour Scheme", file: "logo-fh-colour.png" },
    { name: "PPI Aachen Logo - FH Colour Scheme 2", file: "logo-fh-colour-2.png" },
    { name: "PPI Aachen Logo - White", file: "logo-white.png" },
    { name: "PPI Aachen Logo - Black", file: "logo-black.png" },
    { name: "PPI Aachen Logo - New Grey", file: "logo-new-grey.png" },
    { name: "PPI Aachen Logo - Black-Grey", file: "logo-black-grey.png" },
    { name: "PPI Aachen Logo - Long Form", file: "logo-long-form.png" }
  ];

  return (
    <div>
      <HeroHeader title="Press Kit" subtitle="Resources & Assets" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h2 className="heading-3 text-[#002F6C] mb-2">PPI Aachen Logos</h2>
            <p className="text-gray-600">8 Images (533 KB)</p>
          </div>
          <a
            href="https://drive.google.com/file/d/1WkgwhmRnFY6-3A_xX3hh7WB2-uvhZfYq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0161bf] text-white font-bold rounded-lg hover:bg-[#004e9a] transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download all (.zip)
          </a>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedLogo(logo)}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
            >
              <div className="aspect-square bg-gray-300 flex items-center justify-center p-8 border-b border-gray-100 relative">
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-300 relative z-10">
                  <img
                    src={`/src/assets/press-kit/${logo.file}`}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f3f4f6/a1a1aa?text=Logo+Placeholder';
                    }}
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm pointer-events-none">Preview</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#0161bf] transition-colors line-clamp-2" title={logo.name}>
                  {logo.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedLogo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedLogo(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] relative animate-in fade-in zoom-in duration-200 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-2 rounded-xl shadow-2xl relative w-full h-auto">
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center p-4 sm:p-12 min-h-[300px]">
                <img
                  src={`/src/assets/press-kit/${selectedLogo.file}`}
                  alt={selectedLogo.name}
                  className="max-w-full max-h-[70vh] object-contain shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f3f4f6/a1a1aa?text=Logo+Placeholder';
                  }}
                />
              </div>
              <div className="mt-4 px-2 pb-2 text-center">
                <h3 className="font-bold text-gray-900 text-lg">{selectedLogo.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedLogo.file}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
