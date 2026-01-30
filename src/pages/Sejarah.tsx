import HeroHeader from '../components/HeroHeader'
import sejarahData from '../../content/pages/sejarah.json'

// Helper to render markdown content with line breaks
const renderContent = (content: string) => {
  return <div dangerouslySetInnerHTML={{ __html: content.replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>') }} />
}

export default function Sejarah() {
  const heroSection = sejarahData.sections.find(s => s.type === 'Hero')
  const contentSections = sejarahData.sections.filter(s => s.type === 'Section')

  return (
    <div data-sb-object-id="content/pages/sejarah.json">
      <HeroHeader
        title={heroSection?.title || "Sejarah"}
        subtitle={heroSection?.subtitle || "History of PPI Aachen"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-12 md:px-[48px] py-12">
          {contentSections.map((section, index) => {
            // Calculate the actual index in the sections array for the annotation
            const dataIndex = sejarahData.sections.indexOf(section);

            return (
              <section key={index} className="mb-12" data-sb-field-path={`sections.${dataIndex}`}>
                {section.title && (
                  <h2 className="heading-2 mb-6" data-sb-field-path="title">{section.title}</h2>
                )}
                <div className="body-text space-y-6 text-lg text-gray-700 leading-relaxed">
                  <div className={`flex flex-col ${section.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>

                    {/* Content Side */}
                    <div className="flex-1 space-y-6" data-sb-field-path="content">
                      {renderContent(section.content || '')}
                    </div>

                    {/* Image Side */}
                    {section.image && (
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <img
                          src={section.image}
                          alt={section.imageCaption || "Sejarah Image"}
                          className="rounded-lg shadow-lg w-full h-auto object-cover"
                          data-sb-field-path="image"
                        />
                        {section.imageCaption && (
                          <p className="text-sm text-gray-500 mt-2 text-center italic" data-sb-field-path="imageCaption">
                            {section.imageCaption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  )
}

