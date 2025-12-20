import HeroHeader from '../components/HeroHeader'

export default function AdArt() {
  return (
    <div>
      <HeroHeader title="AD/ART PPI Aachen" subtitle="Constitution and Bylaws" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Constitution and Bylaws</h2>
          <p className="body-text mb-6">
            The AD/ART (Anggaran Dasar/Anggaran Rumah Tangga) contains the fundamental principles,
            rules, and regulations that govern PPI Aachen.
          </p>
          <div className="bg-light-gray p-6 rounded">
            <h3 className="heading-3">Document</h3>
            <p className="body-text">
              The complete AD/ART document will be available here. This document outlines the organizational
              structure, membership rules, and operational procedures of PPI Aachen.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

