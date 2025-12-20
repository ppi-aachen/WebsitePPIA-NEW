import HeroHeader from '../components/HeroHeader'

export default function ArsipLpj() {
  return (
    <div>
      <HeroHeader title="Arsip LPJ" subtitle="Archive of Activity Reports" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Arsip LPJ</h2>
          <p className="body-text">
            Archive of activity reports (Laporan Pertanggungjawaban) from previous periods.
          </p>
        </section>
      </div>
    </div>
  )
}

