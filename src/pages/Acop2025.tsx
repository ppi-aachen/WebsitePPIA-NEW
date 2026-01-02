
import acopData from '../../content/pages/acop2025.json'

export default function Acop2025() {
  const iframeSection = acopData.sections.find(s => s.type === 'IframeSection')

  if (!iframeSection) return null;

  return (
    <div className="w-full h-[calc(100vh-64px)] desktop:mt-[0px]" data-sb-object-id="content/pages/acop2025.json">
      <div data-sb-field-path={`sections.${acopData.sections.findIndex(s => s.type === 'IframeSection')}`}>
        <iframe
          src={iframeSection.src}
          className="w-full h-full border-0"
          title={iframeSection.title || "Aachen Open 2025"}
          allow="fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  )
}

