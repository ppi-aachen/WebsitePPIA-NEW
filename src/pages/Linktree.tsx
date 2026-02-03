import HeroHeader from '../components/HeroHeader'
import linktreeData from '../../content/pages/linktree.json'

export default function Linktree() {
  const heroSection = linktreeData.sections.find(s => s.type === 'Hero')
  const contentSection = linktreeData.sections.find(s => s.type === 'Section') as { type: string, title?: string, content: string } | undefined
  const contentSectionIndex = linktreeData.sections.findIndex(s => s.type === 'Section')

  return (
    <div data-sb-object-id="content/pages/linktree.json">
      <HeroHeader
        title={heroSection?.title || "Linktree"}
        subtitle={heroSection?.subtitle || "PPI Aachen Links"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">
          {contentSection && (
            <section className="mb-12" data-sb-field-path={`sections.${contentSectionIndex}`}>
              <h2 className="heading-2" data-sb-field-path="title">{contentSection.title}</h2>
              <div data-sb-field-path="content" dangerouslySetInnerHTML={{ __html: contentSection.content }} />
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

