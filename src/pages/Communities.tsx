import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'

import indoAachenerImg from '../assets/communities/indo-aachener.png'
import badmintonImg from '../assets/communities/badminton.jpg'
import basketImg from '../assets/communities/basket.jpg'
import futsalImg from '../assets/communities/futsal.jpg'
import voliImg from '../assets/communities/voli.jpg'
import kiaImg from '../assets/communities/kia.jpg'
import kmkiImg from '../assets/communities/kmki.jpg'
import perkiImg from '../assets/communities/perki.jpg'
import kbaImg from '../assets/communities/kba.jpg'
import cekrekImg from '../assets/communities/aachen-cekrek.jpg'
import kokuchenImg from '../assets/communities/kokuchen.jpg'
import surkamImg from '../assets/communities/surkam.jpg'
import arbeitskreisImg from '../assets/communities/arbeitskreis.jpg'

interface CommunityLink {
  label: string
  url: string
}

interface Community {
  name: string
  description: string
  longDescription?: string
  links?: CommunityLink[]
  image?: string
  category?: string
}

export default function Communities() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null)

  const indoAachener: Community = {
    name: "Indo Aachener",
    description: "Sebuah komunitas tidak hanya untuk pelajar Indonesia, melainkan juga untuk semua orang Indonesia di Aachen dan sekitarnya. Wadah utama untuk saling terhubung, berbagi informasi, dan menjalin silaturahmi antar warga Indonesia di kota Aachen.",
    longDescription: "Sebuah komunitas tidak hanya untuk pelajar Indonesia, melainkan juga untuk semua orang Indonesia di Aachen dan sekitarnya.\n\nA community not only for Indonesian Students, but also for all Indonesians living in and around Aachen.",
    links: [
      { label: "Discord Server", url: "https://link.ppiaachen.de/dc-aachener" },
      { label: "WhatsApp Community", url: "https://link.ppiaachen.de/wa-aachener" },
      { label: "Telegram Community", url: "https://t.me/indoaachener" },
      { label: "Facebook Group", url: "https://link.ppiaachen.de/fb-aachener" },
    ],
    image: indoAachenerImg
  }

  const communities: Community[] = [
    // Sports
    {
      name: "Badminton",
      category: "Olahraga",
      description: "Latihan rutin badminton bareng warga Indo. Lokasi: Hochschulsport / Tivoli.",
      links: [{ label: "Join Group", url: "https://link.ppiaachen.de/badmin-aachen" }],
      image: badmintonImg
    },
    {
      name: "Basket",
      category: "Olahraga",
      description: "Komunitas basket Indonesia di Aachen. Lokasi: Hochschulsport / Scheiben.",
      links: [{ label: "Join Group", url: "https://link.ppiaachen.de/basket-aachen" }],
      image: basketImg
    },
    {
      name: "Futsal (Indo Aachen FC)",
      category: "Olahraga",
      description: "Main futsal bareng! Lokasi: Kennedy / Scheiben / Kelmis. Instagram: @indoaachenfc",
      links: [{ label: "Join Group", url: "https://link.ppiaachen.de/futsal-aachen" }],
      image: futsalImg
    },
    {
      name: "Voli (Nord Volleyball)",
      category: "Olahraga",
      description: "Latihan voli seru-seruan. Lokasi: Vaals. Instagram: @nordvolleyball",
      links: [{ label: "Join Group", url: "https://link.ppiaachen.de/voli-aachen" }],
      image: voliImg
    },

    // Religious
    {
      name: "Keluarga Islam Aachen (KIA)",
      category: "Agama",
      description: "Wadah untuk memenuhi kebutuhan rohani muslim Indonesia di Aachen. Program rutin: Pengajian Bulanan, TPA, Sommer Grillen, dan Rihlah.",
      longDescription: "Keluarga Islam Aachen (KIA) merupakan perkumpulan yang didirikan oleh warga muslim Indonesia di Aachen sebagai wadah untuk memenuhi kebutuhan rohani para jamaah melalui pengadaan program-program yang diharapkan dapat mempererat tali silaturahim antar jamaah sekaligus dapat memperkuat keimanan dan ketaqwaan.\n\nProgram yang rutin diselenggarakan oleh KIA dibagi menjadi 3 kategori, yaitu Program Ikhwan (laki-laki), Akhwat (Perempuan), dan Gabungan. Program-program tersebut terdiri dari kegiatan Tarbiyah yang meliputi Pengajian Bulanan yang diselenggarakan secara terpisah untuk Ikhwan dan Akhwat serta Pengajian Gabungan. Tidak hanya itu, terdapat juga Program Ukhuwah yang secara rutin diselenggarakan seperti Sommer Grillen dan Rihlah.\n\nSelain itu, kami juga menyediakan program Taman Pendidikan Al-Qur’an (TPA) sebagai wadah untuk memperkenalkan dan belajar membaca Al-Qur’an kepada anak-anak jamaah Keluarga Islam Aachen.",
      links: [
        { label: "Website", url: "https://aachen-kia.de/" },
        { label: "Instagram", url: "https://www.instagram.com/kia_aachen" }
      ],
      image: kiaImg
    },
    {
      name: "KMKI Aachen",
      category: "Agama",
      description: "Keluarga Mahasiswa Katolik Indonesia. Mengadakan misa Bahasa Indonesia setiap bulan (minggu ke-3), spielabend, dan acara kekeluargaan lainnya.",
      longDescription: "Suatu organisasi dari dan untuk mahasiswa/i Indonesia di Jerman yang dijiwai semangat kekatolikan serta kekeluargaan. Namun, KMKI juga terbuka bagi rekan-rekan dari berbagai kalangan dan agama lain.\n\nKMKI mengadakan misa Bahasa Indonesia setiap bulan (minggu ketiga setiap bulan). Selain itu, ada pula kegiatan spielabend, halloween, Christmas Dinner dll.",
      links: [{ label: "Instagram", url: "https://www.instagram.com/kmki.aachen" }],
      image: kmkiImg
    },
    {
      name: "PERKI Aachen",
      category: "Agama",
      description: "Persekutuan Kristen Indonesia Aachen. Mendasarkan kepercayaan pada Alkitab, mendukung pertumbuhan rohani melalui pertemuan rutin dan persekutuan doa.",
      longDescription: "Perki Aachen adalah singkatan dari Persekutuan Kristen Indonesia Aachen dan merupakan sebuah persekutuan Kristen yang mendasarkan kepercayaan, ajaran dan kehidupannya pada seluruh isi Alkitab Perjanjian Lama dan Perjanjian Baru yang diakuinya sebagai Firman Tuhan yang diilhami. Persekutuan kami tidak berafiliasi dengan kelompok gereja tertentu. Semua kegiatan ditujukan untuk mendukung perwujudan Amanat Agung Tuhan Yesus Kristus.\n\nKami berusaha untuk memupuk rasa kebersamaan yang kuat dan pertumbuhan rohani di antara para anggota kami, mendorong diri kami sendiri untuk menghidupi iman mereka secara otentik dan membagikan pesan kasih dan keselamatan Tuhan kepada orang lain. Melalui pertemuan rutin, persekutuan doa, dan program-program penjangkauan, para anggota kami diperlengkapi untuk melayani sebagai duta-duta Kristus di komunitas lokal mereka dan di luar. Kita hanyalah persekutuan orang berdosa yang ingin bertumbuh bersama ke arah Kristus.",
      links: [
        { label: "Website", url: "https://perkiweb.vercel.app/" },
        { label: "Instagram", url: "https://www.instagram.com/perki.aachen" }
      ],
      image: perkiImg
    },
    {
      name: "Kalyanamitta (KBA)",
      category: "Agama",
      description: "Komunitas mahasiswa/i Buddhis di Aachen. Sharing info acara vihara, meetup rutin, dan kegiatan kebersamaan lainnya.",
      longDescription: "Halo teman-teman Buddhis di Aachen, kita punya kabar baik nih! Kenalin kita adalah komunitas mahasiswa/i Buddhis di Aachen yang open buat kalian semua. Yuk, join komunitas kita untuk:\n- Sharing info: Acara, kebaktian, dan Dhammatalk di Vihara NRW & sekitarnya\n- Meetup rutin: ngobrol, belajar, dan praktik bersama\n- Rencanakan kegiatan bersama: apapun itu, yang penting bikin kita makin solid",
      links: [{ label: "WhatsApp", url: "https://link.ppiaachen.de/kabar-aachen" }],
      image: kbaImg
    },

    // Interest & Groups
    {
      name: "Aachen Cekrek",
      category: "Hobi",
      description: "Komunitas fotografi dan multimedia. Buat yang hobi foto, mau belajar motret, atau mau jadi model foto. Bebas pakai kamera atau HP.",
      longDescription: "Buat kalian yang memiliki minat fotografi, pengen foto foto tapi tapi takut kalau sendiri, pengen jadi model foto bisa banget loh ikut organisasi kami. Kita juga bebas nih mau make kamera atau hp dan bakal diajarin caranya ambil foto yang bagus juga loh, kedepannya club ini bukan hanya akan menggeluti dunia fotografi namun juga dunia multimedia.",
      links: [
        { label: "WhatsApp", url: "https://link.ppiaachen.de/aachen-cekrek" },
        { label: "Instagram", url: "https://www.instagram.com/aachencekrek" }
      ],
      image: cekrekImg
    },
    {
      name: "KoKuchen",
      category: "Hobi",
      description: "Komunitas Kucing Aachen dan Sekitarnya. Tempat berbagi foto kucing, tanya jawab seputar kucing, dan rekomendasi vet.",
      longDescription: "Komunitas Kucing Aachen dan Sekitarnya (KoKuchen) adalah komunitas untuk pemilik dan penyuka kucing. Di komunitas ini, kalian bisa berbagi foto kucing kalian, bertanya-tanya mengenai hal-hal seputar kucing, mencari rekomendasi dokter hewan, dll.\n\nSemua orang boleh ikut serta komunitasnya kok!",
      links: [{ label: "WhatsApp", url: "https://link.ppiaachen.de/kokuchen" }],
      image: kokuchenImg
    },
    {
      name: "Suara Kami",
      category: "Sosial Politik",
      description: "Pergerakan pemuda non-profit dibidang sosial politik. Membangun kesadaran politik dan mendorong pemikiran kritis kaum muda.",
      longDescription: "SuaraKami adalah sebuah pergerakan pemuda non-profit dan non-partai dibidang sosial politik dalam lingkup demokrasi Indonesia yang berdomisili di Aachen, Jerman. SuaraKami berusaha membawakan warna baru dalam sistem politik Indonesia dengan ide dan terobosan baru yang didukung dengan semangat dan perspektif muda.\n\nSuaraKami bertujuan untuk membangun kesadaran masyarakat khususnya kaum muda akan politik dan mendorong lebih jauh, bukan hanya aktif tetapi juga kritis dan memperoleh informasi yang luas tentang topik tersebut.",
      links: [
        { label: "Website", url: "https://www.suarakami.org/" },
        { label: "Instagram", url: "https://www.instagram.com/suarakami" }
      ],
      image: surkamImg
    },
    {
      name: "Arbeitskreis Indonesia",
      category: "Sosial Budaya",
      description: "Jembatan penyambung masyarakat Jerman dan Indonesia. Memperkenalkan perkembangan sosial, politik, dan budaya Indonesia.",
      longDescription: "Arbeitskreis Indonesien e.V. (AK-I e.V) melihat tugasnya tidak hanya sebagai jembatan penyambung antara masyarakat Jerman dan Indonesia yang berada di Aachen, tetapi juga memperkenalkan dan menyebarkan informasi tentang perkembangan sosial, politik dan budaya di Indonesia. Selama beberapa tahun, AK-I e.V ikut mengawal proses demokratisasi di Indonesia melalui serangkaian acara kritis. Mulai dari Politisi, ilmuwan, jurnalis dan aktivis diundang oleh AK-I e.V untuk melaporkan dan mendiskusikan situasi serta perkembangan di Indonesia.",
      links: [{ label: "Instagram", url: "https://www.instagram.com/arbeitskreis.id" }],
      image: arbeitskreisImg
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroHeader title="Communities" subtitle="Komunitas Indonesia di Aachen" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Spotlight Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row transform transition-transform hover:scale-[1.01] duration-300">
            <div className="md:w-3/5 h-64 md:h-auto relative bg-gray-200">
              <img
                src={indoAachener.image}
                alt={indoAachener.name}
                className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-8">
                <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-md">{indoAachener.name}</h2>
              </div>
            </div>

            <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
              <h3 className="heading-2 mb-4 text-[#002F6C]">Pusat Komunitas</h3>
              <p className="body-text text-gray-700 mb-8 text-lg">
                {indoAachener.description}
              </p>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect with us</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3">
                  {indoAachener.links?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0161bf] text-white rounded-lg hover:bg-[#004a9e] transition-all shadow-md hover:shadow-lg text-sm font-medium w-full h-full text-center"
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-2 text-3xl">Explore Communities</h2>
            <div className="h-1 bg-gray-200 flex-grow ml-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((comm, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
                onClick={() => setSelectedCommunity(comm)}
              >
                <div className="h-48 relative overflow-hidden bg-gray-200">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {comm.category}
                    </span>
                  </div>
                  <img
                    src={comm.image}
                    alt={comm.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="heading-3 text-xl mb-3 text-gray-800 group-hover:text-[#0161bf] transition-colors">{comm.name}</h3>
                  <p className="body-text text-sm text-gray-600 mb-6 line-clamp-4 flex-grow">
                    {comm.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-[#0161bf] flex items-center gap-1">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Community Details Modal */}
      {selectedCommunity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCommunity(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative animate-in fade-in zoom-in duration-200 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCommunity(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors z-10 md:text-gray-800 text-gray-800 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image - Left Side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0 bg-gray-100">
              <img
                src={selectedCommunity.image}
                alt={selectedCommunity.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content - Right Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh] bg-white">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-3 pr-8">
                  {selectedCommunity.category && (
                    <span className="bg-[#0161bf] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCommunity.category}
                    </span>
                  )}
                </div>

                <h2 className="heading-2 mb-4 pr-8 text-3xl font-bold text-gray-900">{selectedCommunity.name}</h2>

                <div className="prose max-w-none text-gray-700 leading-relaxed body-text text-lg">
                  <p className="whitespace-pre-line">
                    {selectedCommunity.longDescription || selectedCommunity.description}
                  </p>
                </div>
              </div>

              {selectedCommunity.links && selectedCommunity.links.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect with us</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedCommunity.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-[#0161bf] font-semibold rounded-lg hover:bg-[#0161bf] hover:text-white transition-all border border-gray-200 hover:border-[#0161bf]"
                      >
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
