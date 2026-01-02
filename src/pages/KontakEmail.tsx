import HeroHeader from '../components/HeroHeader'
import kontakData from '../../content/pages/kontak-email.json'

interface Contact {
  role: string
  email: string
}

export default function KontakEmail() {
  const heroSection = kontakData.sections.find(s => s.type === 'Hero')
  const contactListSection = kontakData.sections.find(s => s.type === 'ContactList') as { type: string, title?: string, contacts?: Contact[], officeName?: string, officeAddress?: string, whatsappNumber?: string } | undefined
  const contacts = (contactListSection?.contacts || [])

  const contactListIndex = kontakData.sections.findIndex(s => s.type === 'ContactList')

  return (
    <div data-sb-object-id="content/pages/kontak-email.json">
      <HeroHeader
        title={heroSection?.title || "Kontak Email"}
        subtitle={heroSection?.subtitle || "Get in Touch"}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" data-sb-field-path={`sections.${contactListIndex}`}>
          <div className="p-8 md:p-12">
            <h2 className="heading-2 mb-8 text-center" data-sb-field-path="title">{contactListSection?.title || "Department Contacts"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" data-sb-field-path="contacts">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex flex-col border-b border-gray-100 pb-4 last:border-0 md:last:border-b md:nth-last-child-2:border-0" data-sb-field-path={`.${idx}`}>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1" data-sb-field-path=".role">{contact.role}</span>
                  <a href={`mailto:${contact.email.split('|')[0].trim()}`} className="text-lg font-medium text-[#0161bf] hover:text-[#004a9e] transition-colors" data-sb-field-path=".email">
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-xl text-center">
              <p className="text-gray-700 mb-2 font-medium" data-sb-field-path="officeName">{contactListSection?.officeName || "Sekretariat PPI Aachen"}</p>
              <p className="text-gray-600 text-sm" data-sb-field-path="officeAddress">{contactListSection?.officeAddress || "An der Schanz 1, 52064 Aachen, Germany"}</p>
              <p className="text-[#0161bf] font-medium mt-2" data-sb-field-path="whatsappNumber">{contactListSection?.whatsappNumber || "+49 15679 027862 (WA Only)"}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
