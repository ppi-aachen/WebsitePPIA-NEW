
import merchandiseData from '../../content/pages/merchandise.json'

export default function Merchandise() {
  const iframeSection = merchandiseData.sections.find(s => s.type === 'IframeSection')

  if (!iframeSection) return null;

  return (
    <div className="w-full h-[calc(100vh-64px)] desktop:mt-[0px]" data-sb-object-id="content/pages/merchandise.json">
      <div data-sb-field-path={`sections.${merchandiseData.sections.findIndex(s => s.type === 'IframeSection')}`}>
        <iframe
          src={iframeSection.src}
          className="w-full h-full border-0"
          title={iframeSection.title || "Linktree - Aachen Studio"}
          allow="fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  )
}

