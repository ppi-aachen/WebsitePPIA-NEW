import HeroHeader from '../components/HeroHeader'

export default function ArsipPengurus() {
  return (
    <div>
      <HeroHeader title="Arsip Pengurus" subtitle="Archive of Management" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Arsip Pengurus</h2>
          <p className="body-text">
            Archive of previous management teams and committee members.
          </p>
        </section>
      </div>
    </div>
  )
}

