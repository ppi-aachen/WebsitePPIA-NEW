import HeroHeader from '../components/HeroHeader'
import spaData from '../../content/pages/spa.json'

export default function Spa() {
  const heroSection = spaData.sections.find(s => s.type === 'Hero')
  const contentSection = spaData.sections.find(s => s.type === 'Section') as { type: string, title?: string, content: string } | undefined
  const contentSectionIndex = spaData.sections.findIndex(s => s.type === 'Section')

  return (
    <div data-sb-object-id="content/pages/spa.json">
      <HeroHeader
        title={heroSection?.title || "SPA"}
        subtitle={heroSection?.subtitle || "Sidang Perwakilan Anggota PPI Aachen"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-12 md:px-[48px] py-12">
          {contentSection && (
            <div
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700"
              data-sb-field-path={`sections.${contentSectionIndex}`}
            >
              <div data-sb-field-path="content" dangerouslySetInnerHTML={{ __html: contentSection.content }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
