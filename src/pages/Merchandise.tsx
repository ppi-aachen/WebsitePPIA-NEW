import HeroHeader from '../components/HeroHeader'

export default function Merchandise() {
  return (
    <div>
      <HeroHeader title="Merchandise" subtitle="PPI Aachen Products" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">PPI Aachen Merchandise</h2>
          <p className="body-text mb-6">
            Show your support for PPI Aachen with our official merchandise. All proceeds go towards
            supporting our community activities and events.
          </p>
          <div className="bg-light-gray p-6 rounded">
            <h3 className="heading-3">Coming Soon</h3>
            <p className="body-text">
              Our merchandise store is currently under development. Check back soon for updates!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

