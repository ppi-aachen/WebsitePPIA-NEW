import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'
import pressKitData from '../../content/pages/press-kit.json'

interface Logo {
  name: string
  image: string
}

export default function PressKit() {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const heroSection = pressKitData.sections.find(s => s.type === 'Hero')
  const headerSection = pressKitData.sections.find(s => s.type === 'PressKitHeader') as { type: string, title?: string, subtitle?: string, downloadLink?: string, downloadText?: string } | undefined
  const logoGrid = pressKitData.sections.find(s => s.type === 'LogoGrid')
  const logos = (logoGrid?.logos || []) as Logo[]

  const headerSectionIndex = pressKitData.sections.findIndex(s => s.type === 'PressKitHeader')
  const logoGridIndex = pressKitData.sections.findIndex(s => s.type === 'LogoGrid')

  return (
    <div data-sb-object-id="content/pages/press-kit.json" className="mb-24">
      <HeroHeader title={heroSection?.title || "Press Kit"} subtitle={heroSection?.subtitle || "Resources & Assets"} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">
          <h2 className="heading-2 mb-8">Press Kit</h2>

          {/* Header Section */}
          {headerSection && (
            <div
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              data-sb-field-path={`sections.${headerSectionIndex}`}
            >
              <div>
                <h2 className="heading-3 mb-2 text-[#002f6c]" data-sb-field-path="title">{headerSection.title}</h2>
                <p className="body-text text-gray-600 mt-0" data-sb-field-path="subtitle">{headerSection.subtitle}</p>
              </div>
              {headerSection.downloadLink && (
                <a
                  href={headerSection.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0161bf] text-white font-bold rounded-lg hover:bg-[#004e9a] transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                  data-sb-field-path="downloadLink"
                >
                  <span data-sb-field-path="downloadText">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {headerSection.downloadText || "Download"}
                  </span>
                </a>
              )}
            </div>
          )}

          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-sb-field-path={`sections.${logoGridIndex}.logos`}>
            {logos.map((logo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLogo(logo)}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
                data-sb-field-path={`.${idx}`}
              >
                <div className="aspect-square bg-gray-300 flex items-center justify-center p-8 border-b border-gray-100 relative">
                  {/* Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-300 relative z-10">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                      data-sb-field-path=".image"
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
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#0161bf] transition-colors line-clamp-2" title={logo.name} data-sb-field-path=".name">
                    {logo.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
                  src={selectedLogo.image}
                  alt={selectedLogo.name}
                  className="max-w-full max-h-[70vh] object-contain shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/f3f4f6/a1a1aa?text=Logo+Placeholder';
                  }}
                />
              </div>
              <div className="mt-4 px-2 pb-2 text-center">
                <h3 className="font-bold text-gray-900 text-lg">{selectedLogo.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedLogo.image.split('/').pop()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
