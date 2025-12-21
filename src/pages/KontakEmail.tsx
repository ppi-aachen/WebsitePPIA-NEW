import HeroHeader from '../components/HeroHeader'

export default function KontakEmail() {
  const contacts = [
    { role: "Sekretariat / General Inquiries", email: "info@ppiaachen.de | sekretariat@ppiaachen.de" },
    { role: "Bendahara (Treasury)", email: "treasury@ppiaachen.de" },
    { role: "Human Resources", email: "human.resources@ppiaachen.de" },
    { role: "Public Relations", email: "public.relations@ppiaachen.de" },
    { role: "Fundraising", email: "fundraising@ppiaachen.de" },
    { role: "Multimedia & IT", email: "multimedia@ppiaachen.de" },
    { role: "Education", email: "education@ppiaachen.de" },
    { role: "Arts & Culture", email: "art.culture@ppiaachen.de" },
    { role: "Sports", email: "sports@ppiaachen.de" },
  ];

  return (
    <div>
      <HeroHeader title="Kontak Email" subtitle="Get in Touch" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="heading-2 mb-8 text-center">Department Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex flex-col border-b border-gray-100 pb-4 last:border-0 md:last:border-b md:nth-last-child-2:border-0">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{contact.role}</span>
                  <a href={`mailto:${contact.email}`} className="text-lg font-medium text-[#0161bf] hover:text-[#004a9e] transition-colors">
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-xl text-center">
              <p className="text-gray-700 mb-2 font-medium">Sekretariat PPI Aachen</p>
              <p className="text-gray-600 text-sm">An der Schanz 1, 52064 Aachen, Germany</p>
              <p className="text-[#0161bf] font-medium mt-2">+49 15679 027862 (WA Only)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
