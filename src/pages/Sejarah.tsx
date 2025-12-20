import HeroHeader from '../components/HeroHeader'

export default function Sejarah() {
  return (
    <div>
      <HeroHeader title="Sejarah" subtitle="History of PPI Aachen" />
      <div className="px-12 md:px-[48px] py-12">
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
          <h2 className="heading-2">Founding Members</h2>
          <div className="body-text space-y-2">
            <p>
              <strong>Founder:</strong> Peter Manusama
            </p>
            <p>
              <strong>Treasurer:</strong> Liem Keng Kie
            </p>
            <p>
              <strong>Secretary (1956):</strong> B. J. Habibie (3rd President of the Republic of Indonesia)
            </p>
            <p>
              <strong>First Chairman (1957):</strong> B. J. Habibie
            </p>
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

