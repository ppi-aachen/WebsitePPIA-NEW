import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'
import eventsData from '../../content/pages/events.json'

interface Event {
  title: string
  date: string
  time?: string
  location: string
  description: string
  longDescription?: string
  link?: string
  linkText?: string
  tag?: string
  image?: string
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const heroSection = eventsData.sections.find(s => s.type === 'Hero')
  const eventGrid = eventsData.sections.find(s => s.type === 'EventGrid')
  const parseDate = (dateStr: string): Date => {
    // Remove "Deadline: " prefix if present
    const cleanDateStr = dateStr.replace(/deadline:\s*/i, '');

    // Check for "Month - Month Year" format (e.g. "Jan - Feb 2025")
    const monthRangeMatch = cleanDateStr.match(/^([A-Za-z]+)\s*-\s*([A-Za-z]+)\s+(\d{4})$/);
    if (monthRangeMatch) {
      // Use the first month and year
      const monthName = monthRangeMatch[1];
      const year = monthRangeMatch[3];
      return parseDate(`1 ${monthName} ${year}`);
    }

    // Extract day, month, year
    // Supports: "13-14 January 2026", "5 Desember 2025", "11 Oktober 2025"
    const parts = cleanDateStr.match(/(\d+)(?:-\d+)?\s+([A-Za-z]+)\s+(\d{4})/);

    if (parts) {
      const day = parseInt(parts[1], 10);
      const monthName = parts[2].toLowerCase();
      const year = parseInt(parts[3], 10);

      const monthMap: { [key: string]: number } = {
        'januari': 0, 'january': 0, 'jan': 0,
        'februari': 1, 'february': 1, 'feb': 1,
        'maret': 2, 'march': 2, 'mar': 2,
        'april': 3, 'apr': 3,
        'mei': 4, 'may': 4,
        'juni': 5, 'june': 5, 'jun': 5,
        'juli': 6, 'july': 6, 'jul': 6,
        'agustus': 7, 'august': 7, 'aug': 7,
        'september': 8, 'sep': 8,
        'oktober': 9, 'october': 9, 'okt': 9, 'oct': 9,
        'november': 10, 'nov': 10,
        'desember': 11, 'december': 11, 'des': 11, 'dec': 11
      };

      if (monthMap.hasOwnProperty(monthName)) {
        return new Date(year, monthMap[monthName], day);
      }
    }

    // Fallback
    return new Date(dateStr);
  }

  const events = (eventGrid?.events || []) as Event[]
  // Sort events by date descending (newest first)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  const eventGridIndex = eventsData.sections.findIndex(s => s.type === 'EventGrid')


  return (
    <div data-sb-object-id="content/pages/events.json">
      <HeroHeader
        title={heroSection?.title || "Events"}
        subtitle={heroSection?.subtitle || "Kegiatan PPI Aachen"}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-12 md:px-[48px] py-12">

          <section className="mb-12" data-sb-field-path={`sections.${eventGridIndex}`}>
            <h2 className="heading-2 mb-8" data-sb-field-path="title">{eventGrid?.title}</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-sb-field-path="events">
              {sortedEvents.map((event, index) => {

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 bg-[#fdfdfd] flex flex-col cursor-pointer group"
                    onClick={() => setSelectedEvent(event)}
                    data-sb-field-path={`.${index}`}
                  >
                    {/* Image Section */}
                    {event.image && (
                      <div className="h-48 w-full overflow-hidden relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          data-sb-field-path=".image"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="inline-block bg-[#0161bf] text-white text-xs px-2 py-1 rounded-full mb-2" data-sb-field-path=".date">
                          {event.date}
                        </span>
                        {event.tag && (
                          <span className="inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-full mb-2 ml-2" data-sb-field-path=".tag">
                            {event.tag}
                          </span>
                        )}
                        <h3 className="heading-3 mb-1 group-hover:text-primary transition-colors text-[#002f6c]" data-sb-field-path=".title">{event.title}</h3>
                        <div className="text-sm text-gray-500 flex flex-col gap-1 mt-2">
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span data-sb-field-path=".time">{event.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span data-sb-field-path=".location">{event.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="body-text text-sm text-gray-600 mb-6 flex-grow line-clamp-3" data-sb-field-path=".description">
                        {event.description}
                      </p>

                    </div>

                    {/* Card Footer Actions */}
                    <div className="border-t border-gray-100 flex divide-x divide-gray-100 bg-gray-50/50">
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 flex items-center justify-center gap-2 text-[#0161bf] font-semibold text-sm hover:bg-white transition-colors z-10"
                          onClick={(e) => e.stopPropagation()}
                          data-sb-field-path=".link"
                        >
                          <span data-sb-field-path=".linkText">{event.linkText || "Open Link"}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <div className="flex-1 py-3 flex items-center justify-center gap-2 text-[#0161bf] font-semibold text-sm hover:bg-white transition-colors">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="bg-light-gray p-8 rounded-lg text-center">
            <h3 className="heading-3 mb-4">Want to see more?</h3>
            <p className="body-text mb-6">
              Follow our Instagram to get the latest updates on our upcoming events and activities!
            </p>
            <a
              href="https://www.instagram.com/ppiaachen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>@ppiaachen</span>
            </a>
          </section>

        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors z-10 md:text-gray-800 text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image - Left Side */}
            {selectedEvent.image && (
              <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Modal Content - Right Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-3 pr-8">
                  <span className="bg-[#0161bf] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedEvent.date}
                  </span>
                  {selectedEvent.tag && (
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedEvent.tag}
                    </span>
                  )}
                </div>

                <h2 className="heading-2 mb-4 pr-8">{selectedEvent.title}</h2>

                <div className="flex flex-col gap-2 text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg">
                  {selectedEvent.time && (
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0161bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{selectedEvent.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0161bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{selectedEvent.location}</span>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700 leading-relaxed body-text">
                  <p className="whitespace-pre-line">
                    {selectedEvent.longDescription || selectedEvent.description}
                  </p>
                </div>
              </div>

              {selectedEvent.link && (
                <div className="pt-6 border-t border-gray-100 flex justify-end mt-auto">
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    {selectedEvent.linkText || "Learn More"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
