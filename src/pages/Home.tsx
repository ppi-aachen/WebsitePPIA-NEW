import HeroHeader from '../components/HeroHeader'
import Carousel from '../components/Carousel'

export default function Home() {
  // Dynamically import all images from the carousel assets folder
  const carouselImages = import.meta.glob('../assets/carousel/*.png', { eager: true })

  // Sort keys to ensure correct order based on naming convention (e.g., 1.png, 2.png)
  const slides = Object.keys(carouselImages)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(path => (carouselImages[path] as { default: string }).default)

  return (
    <div>
      <HeroHeader
        title="PPI Aachen"
        subtitle="Indonesian Students Association in Aachen"
      />

      {/* Section 1: Carousel + Linktree (Blue) */}
      <div className="bg-[#0161bf] pt-12 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Carousel slides={slides} />
          <div className="flex justify-center mt-12 mb-4">
            <a
              href="https://linktr.ee/aachenppi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#002F6C] font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>Visit our Linktree</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: About Us (White) */}
      <div className="bg-white pt-6 pb-12 px-12 md:px-[48px]">
        <section className="max-w-4xl mx-auto">
          <h2 className="heading-2">About Us</h2>
          <div className="body-text space-y-4">
            <p>
              <strong>Perhimpunan Pelajar Indonesia di Aachen</strong> atau PPI Aachen adalah sebuah perkumpulan pelajar Indonesia yang bersifat politik non partais, ilmiah, sosial, dan independen yang berpusat di Aachen. PPI Aachen memiliki misi untuk menghimpun, melindungi, dan membela kepentingan para anggotanya dalam rangka meningkatkan kualitas diri dan mengoptimalkan seluruh potensi yang dimiliki, serta mewujudkan masyarakat Indonesia yang lebih adil dan sejahtera. Menjadi bermanfaat bagi Indonesia dan Jerman adalah visi utama kami.
            </p>
            <p>
              <strong>Perhimpunan Pelajar Indonesia di Aachen (Indonesian Students Association in Aachen)</strong> or PPI Aachen is a non-party political, scientific, social and independent student association based in Aachen. PPI Aachen has a mission to gather, protect, and defend the interests of its members in order to improve their quality and optimize all their potential, and to create a more fair and prosperous Indonesian society. To be beneficial to both Indonesia and Germany is our main vision.
            </p>
          </div>
        </section>
      </div>

      {/* Section 3: Short History (Blue) */}
      <div className="bg-[#0161bf] text-white pt-6 pb-12 px-12 md:px-[48px]">
        <section className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="body-text space-y-4 text-white flex-1 md:text-right">
              <h2 className="heading-2 text-white">Short History</h2>
              <p>
                PPI Aachen didirikan pada 4 Mei 1956 bersamaan dengan berdirinya PPI Jerman. PPI Aachen pertama didirikan oleh Peter Manusama, dengan Liem Keng Kie sebagai bendahara dan Presiden Republik Indonesia ke-3, B. J. Habibie sebagai sekretaris pada masa dia berkuliah di RWTH Aachen. Sidang perwakilan anggota pertama diadakan pada 1957, dimana melalui pemilihan umum, B. J. Habibie terpilih menjadi ketua PPI Aachen. PPI Aachen sendiri didirikan karena ada rasa diperlukannya sebuah organisasi yang bisa mendukung dan membantu pelajar-pelajar Indonesia di Aachen.
              </p>
              <p>
                PPI Aachen was founded on May 4, 1956 at the same time as PPI Jerman (Vereinigung Indonesischer Studenten e.V). PPI Aachen was first founded by Peter Manusama, with Liem Keng Kie as treasurer and the 3rd President of the Republic of Indonesia, B. J. Habibie as secretary while he was studying at RWTH Aachen. The first member representative assembly was held in 1957, where through elections, B. J. Habibie was elected chairman of PPI Aachen. PPI Aachen itself was established because there was a sense of need for an organization that could support and help Indonesian students in Aachen.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/src/assets/habibie_history.jpg"
                alt="B.J. Habibie dan rekan-rekan PPI Aachen 1956"
                className="rounded-lg shadow-lg w-full h-auto object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Section 4: Our Logo (White) */}
      <div className="bg-white pt-6 pb-12 px-12 md:px-[48px]">
        <section className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/src/assets/logo_description.png"
                alt="Logo PPI Aachen"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="body-text space-y-4 flex-1">
              <h2 className="heading-2">Our Logo</h2>
              <p>
                Logo kami terdiri dari 2 garis, dengan 2 jenis warna biru yang berbeda. Warna-warna ini mewakili Universitas RWTH Aachen yang terkenal. Di sisinya, Anda juga dapat menemukan profil samping Charlemagne yang agung, kaisar abad pertengahan yang pernah memerintah sebagian besar Eropa Barat dari Aachen.
              </p>
              <p>
                Our logo consists of 2 lines, adored with 2 different kinds of blue. These colors represent the famous RWTH Aachen University. On its side, you can also find the side profile of the great Charlemagne, a medieval emperor who once ruled much of Western Europe from Aachen.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Section 5: Aachen für Dummies (Blue) */}
      <div className="bg-[#0161bf] text-white pt-6 pb-12 px-12 md:px-[48px]">
        <section className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-white">Aachen für Dummies</h2>

          <div className="my-8 flex justify-center">
            <iframe
              src="https://drive.google.com/file/d/1JtwUe0FkGHvXqIJbFa0i6iVw79eA-Cu4/preview"
              className="w-full max-w-2xl h-[800px] rounded-lg shadow-lg border-0"
              allow="autoplay"
              title="Aachen für Dummies Preview"
            ></iframe>
          </div>

          <div className="body-text space-y-4 text-white">
            <p>
              Buku panduan yang dibuat khusus untuk pelajar Indonesia yang baru saja tiba di Aachen<br />
              A guide book specially made for Indonesian students that have just arrived in Aachen
            </p>
            <div className="mt-4">
              <a href="/wiki-aachen" className="btn-primary bg-white text-[#002F6C] hover:bg-gray-100">
                View Guide
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Section 6: Peta Wilayah Kerja (White) */}
      <div className="bg-white pt-6 pb-12 px-12 md:px-[48px]">
        <section className="max-w-4xl mx-auto">
          <h2 className="heading-2">Peta Wilayah Kerja</h2>
          <div className="body-text space-y-4">
            <div className="mt-8 flex justify-center">
              <img
                src="/src/assets/peta_wilayah.jpg"
                alt="Peta Wilayah Kerja PPI Aachen"
                className="rounded-lg shadow-md max-w-lg h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
