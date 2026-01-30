
import wikiData from '../../content/pages/wiki-aachen.json'

export default function WikiAachen() {
  const iframeSection = wikiData.sections.find(s => s.type === 'IframeSection')

  if (!iframeSection) return null;

  return (
    <div className="w-full h-[calc(100vh-64px)] desktop:mt-[0px]" data-sb-object-id="content/pages/wiki-aachen.json">
      <div className="h-full" data-sb-field-path={`sections.${wikiData.sections.findIndex(s => s.type === 'IframeSection')}`}>
        <iframe
          src={iframeSection.src}
          className="w-full h-full border-0"
          title={iframeSection.title || "Aachen Für Dummies"}
          allow="fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  )
}


