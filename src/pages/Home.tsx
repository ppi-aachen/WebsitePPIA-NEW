import HeroHeader from '../components/HeroHeader'
import Carousel from '../components/Carousel'
import { useState } from 'react'

// Import content from JSON
import homeData from '../../content/pages/home.json'

export default function Home() {
  const [isPdfOpen, setIsPdfOpen] = useState(false)
  // Dynamically import all images from the carousel assets folder
  const carouselImages = import.meta.glob('../assets/carousel/*.png', { eager: true })

  // Sort keys to ensure correct order based on naming convention (e.g., 1.png, 2.png)
  const slides = Object.keys(carouselImages)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(path => (carouselImages[path] as { default: string }).default)

  // Helper to find section by title
  const getSection = (title: string) => homeData.sections.find(s => s.title === title)

  const heroSection = getSection('PPI Aachen') || { title: 'PPI Aachen', subtitle: 'Indonesian Students Association in Aachen' } // Fallback or use JSON if structure matches
  const aboutSection = getSection('About Us')
  const historySection = getSection('Short History')
  const logoSection = getSection('Our Logo')
  const petaSection = getSection('Peta Wilayah Kerja')

  // Helper to render content with line breaks
  const renderContent = (content: string) => {
    return <div dangerouslySetInnerHTML={{ __html: content.replace(/\n\n/g, '<br/><br/>') }} />
  }

  return (
    <div data-sb-object-id="content/pages/home.json">
      <HeroHeader
        title={heroSection.title}
        subtitle={heroSection.subtitle || ''}
      />

      {/* Section 1: Carousel + Linktree (Blue) */}
      <div className="bg-[#0161bf] pt-12 pb-12 px-12 md:px-[48px]">
        <div className="mx-auto max-w-7xl">
          <Carousel slides={slides} />
          <div className="flex justify-center mt-12 mb-4">
            <a
              href="https://linktr.ee/aachenppi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#002F6C] font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>Visit our Linktree</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: About Us (White) */}
      {aboutSection && (
        <div className="bg-white pt-6 pb-12 px-12 md:px-[48px]" data-sb-object-id={aboutSection.title}>
          <section className="max-w-7xl mx-auto">
            <h2 className="heading-2" data-sb-field-path="title">{aboutSection.title}</h2>
            <div className="body-text space-y-6 text-lg text-gray-700 leading-relaxed" data-sb-field-path="content">
              {renderContent(aboutSection.content || '')}
            </div>
          </section>
        </div>
      )}

      {/* Section 3: Short History (Blue) */}
      {historySection && (
        <div className="bg-[#0161bf] text-white pt-6 pb-12 px-12 md:px-[48px]" data-sb-object-id={historySection.title}>
          <section className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="body-text space-y-6 text-lg leading-relaxed text-white flex-1 md:text-right">
                <h2 className="heading-2 text-white" data-sb-field-path="title">{historySection.title}</h2>
                <div data-sb-field-path="content">
                  {renderContent(historySection.content || '')}
                </div>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={historySection.image}
                  alt={historySection.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover border-4 border-white/20"
                  data-sb-field-path="image"
                />
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Section 4: Our Logo (White) */}
      {logoSection && (
        <div className="bg-white pt-6 pb-12 px-12 md:px-[48px]" data-sb-object-id={logoSection.title}>
          <section className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={logoSection.image}
                  alt={logoSection.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-sb-field-path="image"
                />
              </div>
              <div className="body-text space-y-6 text-lg text-gray-700 leading-relaxed flex-1">
                <h2 className="heading-2" data-sb-field-path="title">{logoSection.title}</h2>
                <div data-sb-field-path="content">
                  {renderContent(logoSection.content || '')}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Section 5: Aachen für Dummies (Blue) */}
      <div className="bg-[#0161bf] text-white pt-6 pb-12 px-12 md:px-[48px]">
        <section className="max-w-7xl mx-auto">
          <h2 className="heading-2 text-white text-center">Aachen für Dummies</h2>

          <div className="my-8 flex justify-center">
            <div
              className="relative w-full max-w-2xl h-[400px] md:h-[800px] rounded-lg shadow-lg border-0 overflow-hidden cursor-pointer group"
              onClick={() => setIsPdfOpen(true)}
            >
              <iframe
                src="https://drive.google.com/file/d/1JtwUe0FkGHvXqIJbFa0i6iVw79eA-Cu4/preview"
                className="w-full h-full pointer-events-none"
                allow="autoplay"
                title="Aachen für Dummies Preview"
              ></iframe>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 text-[#0161bf] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold shadow-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Click to Read
                </div>
              </div>
            </div>
          </div>

          <div className="body-text space-y-6 text-lg leading-relaxed text-white text-center">
            <p>
              Buku panduan yang dibuat khusus untuk pelajar Indonesia yang baru saja tiba di Aachen<br />
              A guide book specially made for Indonesian students that have just arrived in Aachen
            </p>
            <div className="mt-4 flex justify-center">
              <a href="/wiki-aachen" className="btn-primary bg-white text-[#002F6C] hover:bg-gray-100 rounded-xl px-6 py-2">
                Buka wiki
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Section 6: Peta Wilayah Kerja (White) */}
      {petaSection && (
        <div className="bg-white pt-6 pb-12 px-12 md:px-[48px]" data-sb-object-id={petaSection.title}>
          <section className="max-w-7xl mx-auto">
            <h2 className="heading-2 text-center" data-sb-field-path="title">{petaSection.title}</h2>
            <div className="body-text space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="mt-8 flex justify-center">
                <img
                  src={petaSection.image}
                  alt={petaSection.title}
                  className="rounded-lg shadow-md w-full max-w-lg h-auto"
                  data-sb-field-path="image"
                />
              </div>
              <div className="body-text space-y-6 text-lg leading-relaxed text-gray-700 text-center" data-sb-field-path="content">
                {renderContent(petaSection.content || '')}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* PDF Modal */}
      {isPdfOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsPdfOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] relative flex flex-col animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg">Aachen für Dummies</h3>
              <div className="flex items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/1JtwUe0FkGHvXqIJbFa0i6iVw79eA-Cu4/view"
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
                  onClick={() => setIsPdfOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
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
                src="https://drive.google.com/file/d/1JtwUe0FkGHvXqIJbFa0i6iVw79eA-Cu4/preview"
                className="w-full h-full rounded-lg bg-white border-0"
                allow="autoplay"
                title="Aachen für Dummies Fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
