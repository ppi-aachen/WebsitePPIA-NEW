import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'

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
  imageFilename?: string
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  // Dynamically import all images from the events assets folder
  const eventImages = import.meta.glob('../assets/events/*.jpg', { eager: true })

  const getImageUrl = (filename?: string) => {
    if (!filename) return undefined
    const path = `../assets/events/${filename}`
    return (eventImages[path] as { default: string })?.default
  }

  const events: Event[] = [
    {
      title: "Aachen Open 2025",
      date: "6-7 Desember2025",
      location: "BERUFSKOLLEG NORD, Herzogenrath",
      description: "WALK THE TALK, NOT ONLY TALK THE TALK. Tri-Nation League (Malaysia, Indonesia, China). Compete in Futsal, Basketball, Badminton, and Volleyball.",
      link: "https://linktr.ee/aachen.open",
      linkText: "Linktree",
      imageFilename: "aachen-open-2025.jpg"
    },
    {
      title: "RAIA: Research Assembly Indonesia-Aachen",
      date: "5 Desember 2025",
      time: "17:30",
      location: "Humboldt-Haus, Aachen",
      description: "Tempat kita yang lagi S1, S2, atau doktoral bisa ketemu, ngobrol santai soal riset, dan saling belajar dari perjalanan akademik masing-masing.",
      longDescription: "Tempat kita yang lagi S1, S2, atau doktoral bisa ketemu, ngobrol santai soal riset, dan saling belajar dari perjalanan akademik masing-masing. Bukan cuma soal ilmu, tapi juga soal teman baru, insight baru, dan rasa “oh, ternyata kita nggak sendiri di sini.” Yuk daftar pake link di bawah! Siapa tahu obrolan kecil hari itu jadi langkah besar perjalanan kalian di Jerman.",
      link: "https://tally.so/r/81oEpl",
      linkText: "Daftar Sekarang",
      imageFilename: "raia.jpg"
    },
    {
      title: "Aachen Book Club Ep. 3",
      date: "21 November 2025",
      time: "18:00 – 20:00",
      location: "Humboldt Haus, Lantai 2 (2. OG)",
      description: "Membahas dengan mendalam mengenai Madilog, sebuah buku karya Tan Malaka.",
      imageFilename: "book-club-3.jpg"
    },
    {
      title: "The Last Lullaby (Halloween Party)",
      date: "1 November 2025",
      time: "16:00 – 03:00 CEST",
      location: "KHG Aachen, Pontstraße 72",
      description: "Join the ritual. Face the song. And find out what really happened. A haunted house and party experience.",
      longDescription: "A year after Mom’s death, the house stayed hollow. Then my sister died — suddenly. No one told me why. Now, every midnight, our old lullaby plays from the basement… and when I try to stop it, I hear her whisper: “Help me.” Help me uncover the truth. Join the ritual. Face the song. And find out what really happened — before the last lullaby ends.",
      imageFilename: "last-lullaby.jpg"
    },
    {
      title: "Academy Kick-Off: Welcoming Party",
      date: "11 Oktober 2025",
      time: "14:00 - 21:00",
      location: "Humboldt Haus, Pontstraße 41",
      description: "Welcoming Party Ersti PPI Aachen 2025. Ice breaking, games, city tour, snack gratis, dan makan bersama.",
      imageFilename: "welcoming-party-kickoff.jpg"
    },
    {
      title: "Gema Merdeka - 80th Indonesia",
      date: "22 Agustus 2025",
      time: "15:00 – 20:00",
      location: "Aula 1 Hauptgebäude RWTH Aachen",
      description: "Agustusan bareng yuk! Games seru, performance band, fashion show, quiz berhadiah, karaoke, dan aneka ragam makanan Indonesia.",
      link: "https://linktr.ee/ppiaachen17an",
      linkText: "Linktree 17an",
      imageFilename: "gema-merdeka.jpg"
    },
    {
      title: "Warung Nusantara",
      date: "5 Juli 2025",
      time: "13:00 - 19:00",
      location: "Kennedypark",
      description: "Buat kalian yang kangen makanan khas Indonesia, wajib banget dateng dan mampir ke Warung Nusantara!",
      imageFilename: "warung-nusantara.jpg"
    },
    {
      title: "Sommergrillen 2025",
      date: "14 Juni 2025",
      time: "14:00 - 19:30",
      location: "Westpark, Aachen",
      description: "PPI Aachen is back again with Sommergrillen! Paketan grill murah meriah, games, dan keseruan bareng teman-teman.",
      link: "https://bit.ly/SommerGrillen2025",
      linkText: "Daftar Sommergrillen",
      imageFilename: "sommergrillen-2025.jpg"
    },
    {
      title: "Aachen Book Club Ep. 2",
      date: "30 Mei 2025",
      time: "18:00 – 20:00",
      location: "Humboldt Haus, Lantai 2 (2. OG)",
      description: "Diskusi buku dengan twist satu genre spesifik. Bawa bukumu sendiri dan mari berdiskusi!",
      link: "https://bit.ly/AachenBookClubEps2",
      linkText: "Daftar Book Club",
      imageFilename: "book-club-2.jpg"
    },
    {
      title: "Aachen Book Club Ep. 1",
      date: "9 Mei 2025",
      time: "18:00 – 20:00",
      location: "Humboldthaus Aachen (2. OG)",
      description: "Sharing buku, diskusi santai, ngobrol asik, dan snack gratis. Bawa buku kesayanganmu atau cukup bawa rasa penasaranmu.",
      link: "http://bit.ly/aachenbookclub",
      linkText: "Daftar Book Club",
      imageFilename: "book-club-1.jpg"
    },
    {
      title: "Sidang Perwakilan Anggota (SPA) 2025",
      date: "14 Februari 2025",
      time: "17:00 CET",
      location: "Super C, Templergraben 57",
      description: "Forum tertinggi PPI Aachen untuk evaluasi kepengurusan, menyusun rencana, dan memilih Ketua PPI Aachen yang baru.",
      link: "https://www.ppiaachen.de/organization/spa",
      linkText: "Info SPA",
      imageFilename: "spa-2025.jpg"
    },
    {
      title: "CESPI: Beasiswa & Riset",
      date: "23 Januari 2025",
      time: "14:00 CET",
      location: "Instagram Live @ppiaachen",
      description: "Info beasiswa CESP untuk S3 dari Kemendikbud dan beasiswa lainnya di RWTH Aachen bersama narasumber inspiratif.",
      link: "https://www.instagram.com/reel/DFK8Tcsty46/?igsh=MmQxd2xmem8xbnJk",
      linkText: "Tonton Rekaman",
      imageFilename: "cespi.jpg"
    },
    {
      title: "Lerncafe",
      date: "Jan - Feb 2025",
      time: "11:00-16:00 CET",
      location: "AWO Aachen Nord",
      description: "Fasilitas belajar nyaman dengan coffee break, internet, dan pemanas ruangan. Gratis setiap minggu!",
      imageFilename: "lerncafe.jpg"
    },
    {
      title: "Funmatch Esport",
      date: "11 Januari 2025",
      time: "13:00 (MLBB), 17:30 (Valorant)",
      location: "Online (Streamed on YouTube)",
      description: "Fun match Mobile Legends dan Valorant. Pendaftaran gratis dan ada hadiah menarik!",
      imageFilename: "funmatch-esport.jpg"
    },
    {
      title: "Malam 17an 2024",
      date: "18 Agustus 2024",
      time: "11:00-19:00",
      location: "Welthaus Aachen",
      description: "Perayaan Hari Kemerdekaan Indonesia. Penampilan menarik, bazar makanan, dan games seru.",
      link: "https://bit.ly/Foto17an2024",
      linkText: "Lihat Dokumentasi",
      imageFilename: "17an.jpg"
    },
    {
      title: "Indonesian Evening x INCAS",
      date: "30 Juli 2024",
      time: "20:00-22:00",
      location: "Humboldt-Haus, Aachen",
      description: "Culture and celebrations. Free Indonesian food for the first 50 people.",
      imageFilename: "indonesian-evening.jpg"
    },
    {
      title: "MultiKulti Fest",
      date: "16 Juni 2024",
      time: "12:00-19:00",
      location: "Kennedypark",
      description: "PPI Aachen hadir di MultiKulti Fest dengan performance dan makanan khas Indonesia.",
      imageFilename: "multikulti.jpg"
    },
    {
      title: "Sommergrillen 2024",
      date: "8 Juni 2024",
      time: "14:00 - Selesai",
      location: "Westpark, Aachen",
      description: "Grilling, games, dan makan-makan bersama warga Aachen.",
      link: "https://bit.ly/sommergrillen2024",
      linkText: "Info",
      imageFilename: "sommergrillen-2024.jpg"
    },
    {
      title: "Ngabuburit Kuy!!!",
      date: "7 April 2024",
      time: "17:00 - Selesai",
      location: "Humboldt-Haus, Aachen",
      description: "Buka puasa bersama dan ngabuburit seru bareng PPI Aachen.",
      imageFilename: "ngabuburit-2024.jpg"
    },
    {
      title: "Sidang Perwakilan Anggota 2024",
      date: "9 Maret 2024",
      time: "17:00 CET",
      location: "KHG Aachen, Pontstr 72",
      description: "Sidang perwakilan anggota dan pemilihan ketua PPI Aachen 24/25.",
      imageFilename: "spa-2024.jpg"
    },
    {
      title: "Photo Hunting: Aachen Cekrek Club",
      date: "16 Desember 2023",
      time: "16:00 CET",
      location: "Eiscafe Elisenbrunen",
      description: "Photohunting keliling zentrum Aachen bersama komunitas fotografi baru.",
      longDescription: "Hallo Warga Aachen! Admin mau kenalin Club baru nih di aachen yaitu “Aachen Cekrek Club”📸. Buat kalian yang memiliki minat fotografi, pengen foto foto tapi tapi takut kalau sendiri, pengen jadi model foto bisa banget loh ikut acara photohunting keliling zentrum aachen. Acaranya juga bebas nih mau make kamera atau hp dan bakal diajarin caranya ambil foto yang bagus juga loh.",
      imageFilename: "photo-hunting.jpg"
    },
    {
      title: "Blind Date",
      date: "15 Desember 2023",
      time: "19:00 CET",
      location: "Online",
      description: "Blind Date Online buat cari teman baru atau pasangan.",
      imageFilename: "blind-date-2023.jpg"
    },
    {
      title: "Study Tour: Museum LWL Münster",
      date: "18 November 2023",
      time: "08:00 (Meeting Point)",
      location: "Aachen HBF -> Münster",
      description: "Kunjungan ke LWL Museum of Natural History dan Planetarium.",
      link: "https://bit.ly/3udc9cP",
      linkText: "Info",
      imageFilename: "study-tour-muenster.jpg"
    },
    {
      title: "Aachener 101: Welcoming Party 2023",
      date: "21 Oktober 2023",
      time: "16:30 CEST",
      location: "Humboldt-Haus, Aachen",
      description: "Welcoming party untuk Ersti. Games, snack gratis, dan info seputar Aachen.",
      imageFilename: "aachener-101.jpg"
    },
    {
      title: "Nobar Indonesia vs Iraq",
      date: "2024 (Asian Cup)",
      time: "21:00-Selesai",
      location: "Humboldt Haus, Pontstr. 41",
      description: "Nonton bareng timnas Indonesia vs Iraq bersama teman-teman.",
      imageFilename: "nobar-indo-iraq.jpg"
    },
    {
      title: "Open Registration Ketua PPIA 25/26",
      date: "Deadline: 10 Feb 2024",
      location: "Online",
      description: "Periode pendaftaran ketua PPI Aachen 2025/2026.",
      imageFilename: "open-registration-chair.jpg"
    },
    {
      title: "Blind Date",
      date: "24 November 2024",
      time: "15:00 - selesai",
      location: "Zoom Meeting",
      description: "Virtual Blind Date bareng PPI Munich buat kamu yang lagi nyari The One!",
      tag: "Past Event",
      imageFilename: "blind-date.jpg"
    },
    {
      title: "Study Tour: Neanderthal Museum",
      date: "Previous",
      location: "Neanderthal Museum",
      description: "Kunjungan edukatif ke museum Neanderthal.",
      imageFilename: "neanderthal-museum.jpg"
    },
    {
      title: "CarnEVIL of Shadows",
      date: "Previous",
      location: "Unknown",
      description: "Halloween Party event.",
      imageFilename: "carnevil.jpg"
    },
    {
      title: "Pesta SAPA",
      date: "Previous",
      location: "Unknown",
      description: "Welcoming party for new students.",
      imageFilename: "pesta-sapa.jpg"
    },
    {
      title: "Eksil Movie Screening",
      date: "Previous",
      location: "Unknown",
      description: "Screening of the movie Eksil.",
      imageFilename: "eksil-screening.jpg"
    },
    {
      title: "PPIA x INCAS Indonesian Evening",
      date: "Previous",
      location: "Unknown",
      description: "Cultural evening collaboration with INCAS.",
      imageFilename: "indonesian-evening.jpg"
    }

  ]

  // Helper to split events if needed, but for now we list all as 'Events' 
  // since most are in 2025 which spans the current year. "Upcoming" vs "Past" depends on the exact current date which is Dec 21, 2025.
  // So almost all are past. I will title the section "2025 Events" for clarity.

  return (
    <div>
      <HeroHeader title="Events" subtitle="Kegiatan PPI Aachen" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-6 md:px-12 py-12">

          <section className="mb-12">
            <h2 className="heading-2 mb-8">All Events</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => {
                const imageUrl = getImageUrl(event.imageFilename)

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 bg-[#fdfdfd] flex flex-col cursor-pointer group"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {/* Image Section */}
                    {imageUrl && (
                      <div className="h-48 w-full overflow-hidden relative">
                        <img
                          src={imageUrl}
                          alt={event.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="inline-block bg-[#0161bf] text-white text-xs px-2 py-1 rounded-full mb-2">
                          {event.date}
                        </span>
                        {event.tag && (
                          <span className="inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-full mb-2 ml-2">
                            {event.tag}
                          </span>
                        )}
                        <h3 className="heading-3 text-[#002F6C] mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                        <div className="text-sm text-gray-500 flex flex-col gap-1 mt-2">
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{event.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="body-text text-sm text-gray-600 mb-6 flex-grow line-clamp-3">
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
                        >
                          {event.linkText || "Open Link"}
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
            {getImageUrl(selectedEvent.imageFilename) && (
              <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                <img
                  src={getImageUrl(selectedEvent.imageFilename)}
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
