import HeroHeader from '../components/HeroHeader'

export default function Kepengurusan() {
  return (
    <div>
      <HeroHeader title="Kepengurusan" subtitle="Management and Leadership" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Management Team</h2>
          <p className="body-text mb-6">
            Meet the current management team of PPI Aachen. Our dedicated committee members work hard to
            organize activities, support members, and maintain our community.
          </p>
          <div className="bg-light-gray p-6 rounded">
            <h3 className="heading-3">Current Committee</h3>
            <p className="body-text">
              Information about the current committee members and their roles will be displayed here.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

