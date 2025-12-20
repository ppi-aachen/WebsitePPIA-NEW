import HeroHeader from '../components/HeroHeader'

export default function KontakEmail() {
  return (
    <div>
      <HeroHeader title="Kontak Email" subtitle="Contact Email" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Contact Email</h2>
          <div className="body-text space-y-4">
            <p>
              <strong>General Inquiry:</strong><br />
              <a href="mailto:info@ppiaachen.de" className="text-primary hover:underline">info@ppiaachen.de</a>
            </p>
            <p>
              For specific inquiries, please contact the relevant department or committee member.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

