import laporData from '../../content/pages/lapor-diri.json'

export default function LaporDiri() {
  const iframeSection = laporData.sections.find(s => s.type === 'IframeSection')

  if (!iframeSection) return null;

  return (
    <div className="w-full h-[calc(100vh-64px)] desktop:mt-[0px]" data-sb-object-id="content/pages/lapor-diri.json">
      <div className="h-full" data-sb-field-path={`sections.${laporData.sections.findIndex(s => s.type === 'IframeSection')}`}>
        <iframe
          src={iframeSection.src}
          className="w-full h-full border-0"
          title={iframeSection.title || "Lapor Diri - Pendataan Masyarakat Indonesia di Aachen"}
          allow="fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  )
}
