import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'
import lpjData from '../../content/pages/arsip-lpj.json'

export default function ArsipLpj() {
  const [selectedLpj, setSelectedLpj] = useState<{ year: string; url: string } | null>(null);

  const heroSection = lpjData.sections.find(s => s.type === 'Hero')
  const lpjListSection = lpjData.sections.find(s => s.type === 'LpjList')
  const lpjList = (lpjListSection?.items || []) as { year: string, url: string }[]

  const lpjListIndex = lpjData.sections.findIndex(s => s.type === 'LpjList')

  const getPreviewUrl = (url: string) => {
    return url.replace('/view', '/preview');
  };

  return (
    <div data-sb-object-id="content/pages/arsip-lpj.json" className="mb-24">
      <HeroHeader
        title={heroSection?.title || "Arsip LPJ"}
        subtitle={heroSection?.subtitle || "Laporan Pertanggungjawaban"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">
          <h2 className="heading-2 mb-8">Arsip LPJ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-sb-field-path={`sections.${lpjListIndex}.items`}>
            {lpjList.map((lpj, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLpj(lpj)}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0161bf] transition-all group flex items-center justify-between cursor-pointer"
                data-sb-field-path={`.${idx}`}
              >
                <div>
                  <h3 className="heading-3 mt-0 mb-1 group-hover:text-[#0161bf] transition-colors" data-sb-field-path=".year">LPJ {lpj.year}</h3>
                  <p className="body-text text-sm text-gray-500 mt-0">View Document</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-[#0161bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedLpj && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedLpj(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] relative flex flex-col animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg">LPJ {selectedLpj.year}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={selectedLpj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-[#0161bf] hover:bg-blue-50 rounded-full transition-colors"
                  title="Open in new tab"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  onClick={() => setSelectedLpj(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow bg-gray-100 p-2 rounded-b-xl overflow-hidden">
              <iframe
                src={getPreviewUrl(selectedLpj.url)}
                className="w-full h-full rounded-lg bg-white"
                allow="autoplay"
                title={`LPJ ${selectedLpj.year}`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
