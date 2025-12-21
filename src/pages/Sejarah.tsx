import HeroHeader from '../components/HeroHeader'

import habibieFriends from '../assets/habibie_friends.jpg'
import logoOld from '../assets/logo_ppi_old.png'
import iconicEvent from '../assets/iconic_event.jpg'

export default function Sejarah() {
  return (
    <div>
      <HeroHeader title="Sejarah" subtitle="History of PPI Aachen" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-12 md:px-[48px] py-12">
          <section className="mb-12">
            <h2 className="heading-2">Sejarah PPI Aachen</h2>
            <div className="body-text space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <p>
                    Perhimpunan Pelajar Indonesia (PPI) Aachen didirikan pada 4 Mei 1956 bersamaan dengan berdirinya PPI Jerman. Organisasi ini dibentuk dalam rangka mendukung dan membantu pelajar Indonesia di Aachen. PPI Aachen pertama kali dipimpin oleh Peter Manusama, dengan Liem Keng Kie sebagai bendahara, dan B.J. Habibie sebagai sekretaris saat ia berkuliah di RWTH Aachen. Pada 1957, sidang perwakilan anggota pertama diadakan, dan melalui pemilihan umum, B.J. Habibie terpilih menjadi ketua PPI Aachen.
                  </p>
                  <p>
                    Pada tahun itu juga, PPI Aachen di bawah pimpinan B.J. Habibie mencetuskan Seminar Pembangunan. Seminar ini, sesuai dengan namanya, membawa beberapa tema diskusi seputar pembangunan Indonesia, terutama dalam tema industri dan teknologi, terutama industri strategis seperti industri penerbangan, telekomunikasi dan perkapalan. Selain itu, ada juga diskusi mengenai SDM serta pembahasan mengenai isu-isu politik pada saat itu.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={habibieFriends}
                    alt="Foto Habibie bersama teman-teman PPI"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center italic">
                    Foto B.J. Habibie bersama teman-teman PPI
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={logoOld}
                    alt="Logo lama PPI Aachen"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center italic">
                    Logo PPI Aachen pra-2011
                  </p>
                </div>
                <div className="flex-1 space-y-6">
                  <p>
                    Pada awal 1990-an, PPI Aachen terus berkembang dengan semakin banyaknya pelajar Indonesia yang datang, terutama melalui program beasiswa dari BPPT dan IPTN. Pada 1993, PPI Aachen dipimpin oleh Yoshua, seorang mahasiswa Elektroteknik di RWTH Aachen yang juga aktif di komunitas Kristen PERKI. Pada 1995, kepemimpinan PPI Aachen dipegang oleh Andy Sugiarto, seorang mahasiswa Studienkolleg berusia 19 tahun, menjadikannya ketua termuda PPI di Jerman saat itu.
                  </p>
                  <p>
                    Selama periode ini, PPI Aachen aktif mengadakan berbagai kegiatan, termasuk pertemuan rutin di Katakomben untuk diskusi, permainan, dan program PPI. PPI Aachen juga mengorganisir kunjungan tokoh seperti Amien Rais, bekerja sama dengan KBRI Bonn dalam menyambut pejabat RI, serta mengorganisir perjalanan perwakilan dari PPI Jerman untuk perayaan 17 Agustus 1995 di London.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <p>
                    Dalam perjalanannya, PPI Aachen sempat mengalami masa vakum atau mati suri pada periode 2011 hingga 2015. Selama periode tersebut, Sasmaya Tilottama berperan sebagai caretaker PPI Aachen dengan menjalankan tugas-tugas ketua, sekretaris, dan bendahara secara bersamaan untuk memastikan keberlangsungan organisasi. PPI Aachen akhirnya dihidupkan kembali secara penuh pada tanggal 18 Januari 2015 dalam sebuah pertemuan di gedung Welthaus, Aachen. Pada kesempatan tersebut, Dimaz Ibrahim terpilih sebagai ketua PPI Aachen dan membentuk kabinet PPI Aachen untuk periode 2015/2016.
                  </p>
                  <p>
                    Pada tahun 2021, PPI Aachen bersama dengan PPI Jerman sukses menyelenggarakan ICONIC setelah sempat vakum akibat pandemi. ICONIC sendiri merupakan acara yang memberikan wadah bagi mahasiswa Indonesia di seluruh dunia untuk mengumpulkan dan mempresentasikan hasil riset serta penelitian mereka.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={iconicEvent}
                    alt="ICONIC"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center italic">
                    ICONIC 2022
                  </p>
                </div>
              </div>
              <p>
                Saat ini, PPI Aachen membantu dan mendukung lebih dari 600 pelajar Indonesia yang berada di Aachen dan sekitarnya. Dengan semakin meningkatnya jumlah pelajar Indonesia, baik yang menempuh pendidikan dalam program Ausbildung, Bachelor, Master, PhD, dll, peran PPI Aachen semakin signifikan dalam membantu pelajar Indonesia beradaptasi dan berkembang di lingkungan akademik serta sosial di Jerman.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

