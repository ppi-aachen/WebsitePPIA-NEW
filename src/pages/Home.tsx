import HeroHeader from '../components/HeroHeader'

export default function Home() {
  return (
    <div>
      <HeroHeader
        title="PPI Aachen"
        subtitle="Indonesian Students Association in Aachen"
      />
      <div className="px-12 md:px-[48px] py-12">
        <section className="mb-12">
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

        <section className="mb-12">
          <h2 className="heading-2">Short History</h2>
          <div className="body-text space-y-4">
            <p>
              PPI Aachen didirikan pada 4 Mei 1956 bersamaan dengan berdirinya PPI Jerman. PPI Aachen pertama didirikan oleh Peter Manusama, dengan Liem Keng Kie sebagai bendahara dan Presiden Republik Indonesia ke-3, B. J. Habibie sebagai sekretaris pada masa dia berkuliah di RWTH Aachen. Sidang perwakilan anggota pertama diadakan pada 1957, dimana melalui pemilihan umum, B. J. Habibie terpilih menjadi ketua PPI Aachen. PPI Aachen sendiri didirikan karena ada rasa diperlukannya sebuah organisasi yang bisa mendukung dan membantu pelajar-pelajar Indonesia di Aachen.
            </p>
            <p>
              PPI Aachen was founded on May 4, 1956 at the same time as PPI Jerman (Vereinigung Indonesischer Studenten e.V). PPI Aachen was first founded by Peter Manusama, with Liem Keng Kie as treasurer and the 3rd President of the Republic of Indonesia, B. J. Habibie as secretary while he was studying at RWTH Aachen. The first member representative assembly was held in 1957, where through elections, B. J. Habibie was elected chairman of PPI Aachen. PPI Aachen itself was established because there was a sense of need for an organization that could support and help Indonesian students in Aachen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-2">Our Logo</h2>
          <div className="body-text space-y-4">
            <p>
              Logo kami terdiri dari 2 garis, dengan 2 jenis warna biru yang berbeda. Warna-warna ini mewakili Universitas RWTH Aachen yang terkenal. Di sisinya, Anda juga dapat menemukan profil samping Charlemagne yang agung, kaisar abad pertengahan yang pernah memerintah sebagian besar Eropa Barat dari Aachen.
            </p>
            <p>
              Our logo consists of 2 lines, adored with 2 different kinds of blue. These colors represent the famous RWTH Aachen University. On its side, you can also find the side profile of the great Charlemagne, a medieval emperor who once ruled much of Western Europe from Aachen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-2">Aachen für Dummies</h2>
          <div className="body-text space-y-4">
            <p>
              <strong>Wiki Aachen für Dummies</strong>
            </p>
            <p>
              Buku panduan yang dibuat khusus untuk pelajar Indonesia yang baru saja tiba di Aachen<br />
              A guide book specially made for Indonesian students that have just arrived in Aachen
            </p>
            <div className="mt-4">
              <a href="/wiki-aachen" className="btn-primary">
                View Guide
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-2">Peta Wilayah Kerja</h2>
          <div className="body-text space-y-4">
            <p>
              PPI Aachen melayani pelajar Indonesia di wilayah Aachen dan sekitarnya.
            </p>
            <p>
              <em>PPI Aachen serves Indonesian students in the Aachen area and its surroundings.</em>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="heading-2">Contact</h2>
          <div className="body-text space-y-2">
            <p>
              <strong>Email:</strong> <a href="mailto:info@ppiaachen.de" className="text-primary hover:underline">info@ppiaachen.de</a>
            </p>
            <p>
              <strong>Phone/WhatsApp:</strong> <a href="tel:+4915679027862" className="text-primary hover:underline">+49 15679 027862</a>
            </p>
            <p>
              <strong>Address:</strong> An der Schanz 1, 52064 Aachen, Germany
            </p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/ppiaachen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
              <a href="https://www.facebook.com/ppiaachen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>
              <a href="https://www.linkedin.com/company/ppiaachen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
              <a href="https://www.youtube.com/@ppiaachen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">YouTube</a>
              <a href="https://www.tiktok.com/@ppiaachen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TikTok</a>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-light-gray p-6 rounded">
          <p className="body-text text-center">
            <strong>PPI Aachen</strong><br />
            Mendukung dan membantu pelajar Indonesia di Aachen sejak 1956.<br />
            <em>Supporting and helping Indonesian students in Aachen since 1956.</em>
          </p>
        </section>
      </div>
    </div>
  )
}

