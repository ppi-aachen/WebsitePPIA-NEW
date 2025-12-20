import HeroHeader from '../components/HeroHeader'

export default function Communities() {
  return (
    <div>
      <HeroHeader title="Communities" subtitle="Our Community Groups" />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
          <h2 className="heading-2">Community Groups</h2>
          <p className="body-text mb-6">
            PPI Aachen consists of various community groups and interest-based communities where members can
            connect, share experiences, and pursue common interests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-light-gray p-6 rounded">
              <h3 className="heading-3">Academic Community</h3>
              <p className="body-text">
                Connect with students from similar fields of study and share academic resources.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded">
              <h3 className="heading-3">Cultural Community</h3>
              <p className="body-text">
                Participate in cultural activities and celebrate Indonesian traditions together.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded">
              <h3 className="heading-3">Sports Community</h3>
              <p className="body-text">
                Join sports activities and stay active with fellow members.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded">
              <h3 className="heading-3">Professional Network</h3>
              <p className="body-text">
                Connect with professionals and alumni for career development.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

