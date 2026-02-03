import HeroHeader from '../components/HeroHeader'
import kontakData from '../../content/pages/kontak-email.json'

interface Contact {
    role: string
    email: string
    image?: string
    address?: string
    addressLink?: string
    whatsapp?: string
    whatsappLink?: string
}

export default function KontakEmail() {
    const heroSection = kontakData.sections.find(s => s.type === 'Hero')
    const contactListSection = kontakData.sections.find(s => s.type === 'ContactList') as { type: string, title?: string, contacts?: Contact[], officeName?: string, officeAddress?: string, whatsappNumber?: string } | undefined
    const contacts = (contactListSection?.contacts || [])

    const contactListIndex = kontakData.sections.findIndex(s => s.type === 'ContactList')

    return (
        <div data-sb-object-id="content/pages/kontak-email.json" className="mb-24">
            <HeroHeader
                title={heroSection?.title || "Kontak Email"}
                subtitle={heroSection?.subtitle || "Get in Touch"}
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="px-4 md:px-[48px] py-12">
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" data-sb-field-path={`sections.${contactListIndex}`}>
                        <div className="p-8 md:p-12">
                            <h2 className="heading-2 mb-8 text-center" data-sb-field-path="title">{contactListSection?.title || "Department Contacts"}</h2>
                            <div className="grid grid-cols-1 gap-y-8" data-sb-field-path="contacts">
                                {contacts.map((contact, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-100 pb-6 last:border-0" data-sb-field-path={`.${idx}`}>
                                        {/* Logo Image */}
                                        {contact.image ? (
                                            <div className="flex-shrink-0 p-2">
                                                <img
                                                    src={contact.image}
                                                    alt={contact.role}
                                                    className="w-64 h-auto object-contain"
                                                    data-sb-field-path=".image"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2" data-sb-field-path=".role">{contact.role}</span>
                                            {contact.email.split(' ').map((email, emailIdx) => (
                                                <a
                                                    key={emailIdx}
                                                    href={`mailto:${email.trim()}`}
                                                    className="text-xl font-medium text-[#0161bf] hover:text-[#004a9e] transition-colors break-all block mb-1 last:mb-0"
                                                    data-sb-field-path=".email"
                                                >
                                                    {email.trim()}
                                                </a>
                                            ))}
                                            {contact.whatsapp && (
                                                contact.whatsappLink ? (
                                                    <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#0161bf] font-medium mt-1 hover:text-[#004a9e] transition-colors block" data-sb-field-path=".whatsapp">
                                                        {contact.whatsapp}
                                                    </a>
                                                ) : (
                                                    <p className="text-[#0161bf] font-medium mt-1" data-sb-field-path=".whatsapp">{contact.whatsapp}</p>
                                                )
                                            )}
                                            {contact.address && (
                                                contact.addressLink ? (
                                                    <a href={contact.addressLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 mt-2 hover:text-[#0161bf] transition-colors block" data-sb-field-path=".address">
                                                        {contact.address}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 mt-2" data-sb-field-path=".address">{contact.address}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
