import HeroHeader from '../components/HeroHeader'

export default function Linktree() {
  return (
    <div>
      <HeroHeader title="Linktree" subtitle="PPI Aachen Links" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-12 md:px-[48px] py-12">
          <section className="mb-12">
            <h2 className="heading-2">PPI Aachen | Linktree</h2>
            <p className="body-text mb-6">
              Access all PPI Aachen links and resources in one place.
            </p>
            <div className="space-y-4">
              <a href="https://linktr.ee/aachenppi" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Visit Linktree
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

