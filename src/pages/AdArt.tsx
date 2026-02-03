import HeroHeader from '../components/HeroHeader';
import { useState } from 'react';
import adArtData from '../../content/pages/ad-art.json';

// Helper to render HTML content safely
const renderHtmlContent = (content: string) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default function AdArt() {
  const [showModal, setShowModal] = useState(false);

  const heroSection = adArtData.sections.find(s => s.type === 'Hero');
  const contentSections = adArtData.sections.filter(s => s.type === 'Section');

  return (
    <div data-sb-object-id="content/pages/ad-art.json">
      <HeroHeader
        title={heroSection?.title || "AD/ART PPI Aachen"}
        subtitle={heroSection?.subtitle || "Anggaran Dasar & Anggaran Rumah Tangga"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700">

            {contentSections.map((section, index) => {
              const dataIndex = adArtData.sections.indexOf(section);
              const isLastSection = index === contentSections.length - 1;

              return (
                <div key={index} data-sb-field-path={`sections.${dataIndex}`}>
                  {section.title && (
                    <h1 className="heading-2 mb-8" data-sb-field-path="title">{section.title}</h1>
                  )}
                  <div data-sb-field-path="content">
                    {renderHtmlContent(section.content || '')}
                  </div>

                  {/* Divider between sections, but not after the last one */}
                  {!isLastSection && (
                    <div className="my-12 border-t border-gray-200"></div>
                  )}
                </div>
              );
            })}

          </div>

          <div className="my-12 border-t border-gray-200"></div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="body-text mb-4 font-medium">
              Hanya file ini (dokumen yang di-embed di bawah) yang dianggap sah sebagai referensi utama.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002F6C] text-white font-bold rounded-lg hover:bg-[#001D43] transition-colors shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Buka Dokumen Resmi AD/ART
            </button>
          </div>

        </div>
      </div>

      {/* Official Doc Modal */}
      {
        showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] relative flex flex-col animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg">Dokumen Resmi AD/ART PPI Aachen</h3>
                <div className="flex items-center gap-2">
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vS1P12969Vut22ytyBniEyIdopjk08xi5fk73IlC4ZA90_lp01PiB9L78Rz-86c7D7BUgVpnb1Q4Ito/pub"
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
                    onClick={() => setShowModal(false)}
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
                  src="https://docs.google.com/document/d/e/2PACX-1vS1P12969Vut22ytyBniEyIdopjk08xi5fk73IlC4ZA90_lp01PiB9L78Rz-86c7D7BUgVpnb1Q4Ito/pub?embedded=true"
                  className="w-full h-full rounded-lg bg-white"
                  allow="autoplay"
                  title="Official AD/ART Document"
                ></iframe>
              </div>

              {/* Footer Disclaimer */}
              <div className="p-3 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500">
                Hanya file ini yang dianggap sah.
              </div>
            </div>
          </div>
        )
      }
    </div >
  )
}
