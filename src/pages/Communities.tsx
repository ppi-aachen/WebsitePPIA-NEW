import HeroHeader from '../components/HeroHeader'
import { useState, useMemo } from 'react'
import communitiesData from '../../content/pages/communities.json'

interface CommunityLink {
  label: string
  url: string
}

interface Community {
  name: string
  description: string
  longDescription?: string
  links?: CommunityLink[]
  image: string
  category?: string
}

export default function Communities() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null)

  const heroSection = communitiesData.sections.find(s => s.type === 'Hero')
  const spotlightSection = communitiesData.sections.find(s => s.type === 'CommunitySpotlight')
  const gridSection = communitiesData.sections.find(s => s.type === 'CommunityGrid')

  const spotlightCommunity = spotlightSection?.community as Community | undefined;
  const communities = (gridSection?.communities || []) as Community[];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const uniqueCategories = useMemo(() => {
    const categories = new Set(communities.map(c => c.category).filter(Boolean) as string[]);
    return ['All', ...Array.from(categories)];
  }, [communities]);

  const filteredCommunities = useMemo(() => {
    const communitiesWithIndex = communities.map((c, idx) => ({ ...c, originalIndex: idx }));
    if (selectedCategory === 'All') return communitiesWithIndex;
    return communitiesWithIndex.filter(c => c.category === selectedCategory);
  }, [communities, selectedCategory]);

  // Helper to find original index for annotations
  const spotlightSectionIndex = communitiesData.sections.findIndex(s => s.type === 'CommunitySpotlight');
  const gridSectionIndex = communitiesData.sections.findIndex(s => s.type === 'CommunityGrid');

  return (
    <div className="bg-gray-50 min-h-screen mb-24" data-sb-object-id="content/pages/communities.json">
      <HeroHeader
        title={heroSection?.title || "Communities"}
        subtitle={heroSection?.subtitle || "Komunitas Indonesia di Aachen"}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">

          {/* Spotlight Section */}
          {spotlightCommunity && (
            <section className="mb-16" data-sb-field-path={`sections.${spotlightSectionIndex}`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row transform transition-transform hover:scale-[1.01] duration-300">
                <div className="md:w-3/5 h-64 md:h-auto relative bg-gray-200">
                  <img
                    src={spotlightCommunity.image}
                    alt={spotlightCommunity.name}
                    className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-500"
                    data-sb-field-path="community.image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-8">
                    <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-md" data-sb-field-path="community.name">{spotlightCommunity.name}</h2>
                  </div>
                </div>

                <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                  <h3 className="heading-2 mb-4" data-sb-field-path="title">{spotlightSection?.title}</h3>
                  <p className="body-text text-gray-700 mb-8 text-lg" data-sb-field-path="community.description">
                    {spotlightCommunity.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect with us</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3" data-sb-field-path="community.links">
                      {spotlightCommunity.links?.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0161bf] text-white rounded-lg hover:bg-[#004a9e] transition-all shadow-md hover:shadow-lg text-sm font-medium w-full h-full text-center"
                          data-sb-field-path={`.${idx}`}
                        >
                          <span data-sb-field-path=".label">{link.label}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Categories Grid */}
          <section data-sb-field-path={`sections.${gridSectionIndex}`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="heading-2" data-sb-field-path="title">{gridSection?.title}</h2>
              <div className="h-1 bg-gray-200 flex-grow ml-8 rounded-full"></div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${selectedCategory === category
                      ? 'bg-[#0161bf] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-sb-field-path="communities">
              {filteredCommunities.map((comm) => (
                <div
                  key={comm.originalIndex}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
                  onClick={() => setSelectedCommunity(comm)}
                  data-sb-field-path={`.${comm.originalIndex}`}
                >
                  <div className="h-48 relative overflow-hidden bg-gray-200">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm" data-sb-field-path=".category">
                        {comm.category}
                      </span>
                    </div>
                    <img
                      src={comm.image}
                      alt={comm.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      data-sb-field-path=".image"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="heading-3 mb-3 text-gray-800 group-hover:text-[#0161bf] transition-colors" data-sb-field-path=".name">{comm.name}</h3>
                    <p className="body-text text-sm text-gray-600 mb-6 line-clamp-4 flex-grow" data-sb-field-path=".description">
                      {comm.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-[#0161bf] flex items-center gap-1">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Community Details Modal */}
      {selectedCommunity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCommunity(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCommunity(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors z-10 md:text-gray-800 text-gray-800 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image - Left Side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0 bg-gray-100">
              <img
                src={selectedCommunity.image}
                alt={selectedCommunity.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content - Right Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh] bg-white">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-3 pr-8">
                  {selectedCommunity.category && (
                    <span className="bg-[#0161bf] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCommunity.category}
                    </span>
                  )}
                </div>

                <h2 className="heading-2 mb-4 pr-8 text-3xl font-bold text-gray-900">{selectedCommunity.name}</h2>

                <div className="prose max-w-none text-gray-700 leading-relaxed body-text text-lg">
                  <p className="whitespace-pre-line">
                    {selectedCommunity.longDescription || selectedCommunity.description}
                  </p>
                </div>
              </div>

              {selectedCommunity.links && selectedCommunity.links.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect with us</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedCommunity.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-[#0161bf] font-semibold rounded-lg hover:bg-[#0161bf] hover:text-white transition-all border border-gray-200 hover:border-[#0161bf]"
                      >
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
