import HeroHeader from '../components/HeroHeader'

export default function Events() {
  return (
    <div>
      <HeroHeader title="Events" subtitle="Upcoming and Past Events" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Upcoming Events</h2>
          <p className="body-text mb-6">
            Stay tuned for our upcoming events and activities. We regularly organize gatherings, workshops,
            cultural events, and social activities for our members.
          </p>
          <div className="bg-light-gray p-6 rounded mb-6">
            <h3 className="heading-3">No upcoming events at the moment</h3>
            <p className="body-text">
              Check back soon for updates on our next event!
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-2">Past Events</h2>
          <p className="body-text">
            Browse through our past events and activities to see what we've been up to.
          </p>
        </section>
      </div>
    </div>
  )
}

