import HeroHeader from '../components/HeroHeader'
import impressumData from '../../content/pages/impressum.json';

// Helper to render HTML content safely
const renderHtmlContent = (content: string) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default function Impressum() {
    const heroSection = impressumData.sections.find(s => s.type === 'Hero');
    const contentSections = impressumData.sections.filter(s => s.type === 'Section');

    return (
        <div data-sb-object-id="content/pages/impressum.json">
            <HeroHeader
                title={heroSection?.title || "Impressum"}
                subtitle={heroSection?.subtitle || "Impressum & Datenschutzerklärung"}
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="px-4 md:px-[48px] py-12">
                    {/* Content Wrapper to maintain readability if needed, or just let it flow 7xl */}
                    <div className="space-y-12">

                        {contentSections.map((section, index) => {
                            const dataIndex = impressumData.sections.indexOf(section);

                            return (
                                <section key={index} className={`space-y-6 ${index > 0 ? 'pt-12 border-t border-gray-200' : ''}`} data-sb-field-path={`sections.${dataIndex}`}>
                                    {section.title && (
                                        <h2 className="heading-2" data-sb-field-path="title">{section.title}</h2>
                                    )}
                                    <div className="body-text" data-sb-field-path="content">
                                        {renderHtmlContent(section.content || '')}
                                    </div>
                                </section>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
