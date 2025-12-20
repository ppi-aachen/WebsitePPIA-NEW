import HeroHeader from '../components/HeroHeader'

export default function PressKit() {
  return (
    <div>
      <HeroHeader title="Press Kit" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Press Kit</h2>
          <p className="body-text">
            Media resources, logos, and press materials for PPI Aachen.
          </p>
        </section>
      </div>
    </div>
  )
}

