import HeroHeader from '../components/HeroHeader'
import { useState } from 'react'

export default function AdArt() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <HeroHeader title="AD/ART PPI Aachen" subtitle="Anggaran Dasar & Anggaran Rumah Tangga" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700">

          <h1 className="text-[#002F6C] font-bold text-3xl mb-8">ANGGARAN DASAR</h1>

          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab I: Nama, Waktu, Kedudukan dan Daerah Kerja</h2>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 1: Nama</h3>
          <p>Nama Organisasi adalah Perhimpunan Pelajar Indonesia di Aachen, disingkat PPI Aachen / Indonesian Students Association in Aachen / Vereinigung Indonesischer Studenten in Aachen.</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 2: Waktu</h3>
          <p>PPI Aachen didirikan di Aachen pada tanggal 4 Mei 1956 untuk waktu yang tidak terbatas.</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 3: Kedudukan</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Perhimpunan berkedudukan di Aachen, Nordrhein-Westfalen, Jerman.</li>
            <li>Perhimpunan terdaftar sebagai Vereinigung di RWTH Aachen.</li>
            <li>Perhimpunan beralamat di An der Schanz 1, 52064 Aachen.</li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 4: Daerah Kerja</h3>
          <p>Daerah Kerja PPI Aachen meliputi Städteregion Aachen, Kreis Düren dan Kreis Heinsberg.</p>

          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab II: Asas, Sifat dan Lambang</h2>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 2 (Asas)</h3>
          <p>PPI Aachen berasaskan Pancasila dan berdasarkan UUD 1945.</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 3 (Sifat)</h3>
          <p>PPI Aachen adalah organisasi yang bersifat politis non partais, ilmiah, sosial dan independen berbentuk perhimpunan. PPI Aachen merupakan salah satu cabang dari PPI Jerman oleh karena itu memiliki hak dan kewajiban yang sama dengan PPI cabang lainnya terhadap PPI Jerman.</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 4 (Lambang)</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Lambang PPI Aachen adalah sebagai berikut: (Gambar Lambang)</li>
            <li>Lambang perhimpunan terdiri dari dua baris bertuliskan nama organisasi beserta profil samping Charlemagne yang agung.</li>
            <li><strong>Makna:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Semangat berhimpun dalam dunia kesiswaan dari pelajar Indonesia yang ada di Aachen, Jerman.</li>
                <li>Semangat kepemimpinan dan ilmu pengetahuan, dengan gambar Charlemagne sebagai tokoh yang bukan saja memimpin sebagian besar Eropa Barat, tetapi juga mereformasi sistem pendidikan Kekaisaran Romawi Suci.</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 5: Visi</h3>
          <p>Meningkatnya kualitas diri dan optimalnya segala potensi anggota-anggotanya bagi terwujudnya warga Indonesia yang adil dan makmur dan menjadi warga yang berguna untuk bangsa dan negara Indonesia pada khususnya dan dunia pada umumnya.</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 6: Misi</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Menghimpun, mendengarkan, memperjuangkan dan melindungi kepentingan anggota-anggotanya.</li>
            <li>Memupuk rasa persatuan antara anggota-anggotanya dan saling membina dalam suasana kekeluargaan.</li>
            <li>Meningkatkan peran Diaspora Indonesia lainnya.</li>
            <li>Menyelenggarakan atau mengkoordinasikan kegiatan kesiswaan, rohani, olahraga, budaya dan sosial lainnya.</li>
            <li>Menjalin dan mempererat hubungan dengan organisasi nasional maupun internasional.</li>
          </ol>

          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab III: Keanggotaan</h2>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 7: Jenis dan Syarat Keanggotaan</h3>
          <p>1. Anggota PPI Aachen adalah mereka yang namanya tercantum dalam daftar anggota PPI Aachen.</p>
          <p>2. Anggota PPI Aachen terdiri dari anggota Otomatis, Penuh, Luar Biasa, dan Kehormatan dengan kriteria sebagai berikut:</p>
          <ol className="list-[lower-alpha] pl-5 space-y-1 mt-1">
            <li><strong>Anggota Otomatis</strong> adalah Warga Negara Indonesia yang terdaftar pada salah satu lembaga pendidikan atau pengajaran dan bertempat tinggal di Aachen dan daerah kerja PPI Aachen.</li>
            <li><strong>Anggota Penuh</strong> adalah Anggota Otomatis yang sudah melaporkan dirinya ke PPI Aachen.</li>
            <li><strong>Anggota Luar Biasa</strong> adalah mereka dari segala kebangsaan yang menaruh simpati terhadap PPI Aachen, tetapi tidak memenuhi persyaratan dalam AD pasal 7.2.a.</li>
            <li><strong>Anggota Kehormatan</strong> adalah mereka yang telah berjasa kepada PPI Aachen.</li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 8: Hak – Hak Anggota</h3>
          <div className="space-y-4">
            <div>
              <strong>1. Anggota Otomatis:</strong>
              <ul className="list-disc pl-5 mt-1"><li>Mengikuti kegiatan-kegiatan perhimpunan yang bersifat umum.</li></ul>
            </div>
            <div>
              <strong>2. Anggota Penuh:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Mengikuti kegiatan-kegiatan perhimpunan yang bersifat umum.</li>
                <li>Ikut berbicara dan mempunyai hak memilih dan dipilih dalam rapat perhimpunan.</li>
                <li>Memegang jabatan dalam perhimpunan.</li>
                <li>Ikut berbicara dan meminta pertanggung-jawaban dari pengurus pusat dalam Sidang Perwakilan Anggota (SPA).</li>
                <li>Berhak mengusulkan seseorang menjadi anggota kehormatan melalui SPA.</li>
              </ul>
            </div>
            <div>
              <strong>3. Anggota Luar Biasa:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Hadir dan ikut berbicara dalam rapat perhimpunan.</li>
                <li>Mengikuti kegiatan-kegiatan perhimpunan yang bersifat umum.</li>
                <li>Berhak mengusulkan seseorang menjadi anggota kehormatan melalui SPA.</li>
              </ul>
            </div>
            <div>
              <strong>4. Anggota Kehormatan:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Hadir dan ikut berbicara dalam rapat perhimpunan.</li>
                <li>Mengikuti kegiatan-kegiatan perhimpunan yang bersifat umum.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 9: Kewajiban Anggota</h3>
          <div className="space-y-4">
            <div>
              <strong>1. Anggota Penuh:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Taat pada AD/ART PPI Aachen.</li>
                <li>Melaksanakan hasil-hasil rapat perhimpunan.</li>
                <li>Melaksanakan misi perhimpunan sesuai dengan AD pasal 6.</li>
                <li>Melapor kepada PPI Aachen jika sudah tidak memenuhi syarat menjadi anggota penuh PPI Aachen.</li>
              </ul>
            </div>
            <div>
              <strong>2. Anggota Luar Biasa:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Melaksanakan hasil-hasil rapat perhimpunan.</li>
                <li>Melaksanakan misi perhimpunan sesuai dengan AD pasal 6.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 10: Penerimaan Keanggotaan</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Penerimaan keanggotaan penuh dan luar biasa ditentukan oleh Badan Eksekutif PPI Aachen.</li>
            <li>Keanggotaan kehormatan sah, apabila:
              <ul className="list-disc pl-5 mt-1">
                <li>Yang bersangkutan telah menyatakan kesediaannya untuk menjadi anggota PPI Aachen dengan segala hak-haknya.</li>
                <li>Yang bersangkutan telah dikenal dengan baik dan atau diperkenalkan dalam SPA.</li>
                <li>Pengangkatannya telah disetujui dan disahkan dalam SPA.</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 11: Pemberhentian Keanggotaan</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Keanggotaan seseorang diberhentikan, apabila ia:
              <ul className="list-disc pl-5 mt-1">
                <li>Mengingkari AD/ART PPI Aachen baik dengan ucapan atau tindakannya.</li>
                <li>Menjadi anggota perhimpunan atau alat yang memusuhi bangsa dan Negara Indonesia dan/atau PPI Aachen.</li>
                <li>Ikut aktif dalam wadah lain yang merugikan aktivitas PPI Aachen.</li>
                <li>Terbukti secara hukum melakukan tindakan perdata/pidana berat.</li>
              </ul>
            </li>
            <li>Pemberhentian keanggotaan diputuskan dalam rapat anggota, kecuali pemberhentian Anggota Kehormatan diputuskan dalam SPA.</li>
            <li>Seseorang dengan sendirinya tidak lagi menjadi anggota, apabila ia:
              <ul className="list-disc pl-5 mt-1">
                <li>Meninggal dunia.</li>
                <li>Berhenti menjadi anggota atas permintaan sendiri.</li>
                <li>Tidak lagi bertempat tinggal di Aachen dan daerah kerja Aachen, kecuali anggota kehormatan.</li>
              </ul>
            </li>
          </ol>


          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab IV: Struktur Organisasi</h2>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 12: Struktur</h3>
          <p>Struktur organisasi perhimpunan terdiri dari:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Badan Eksekutif:</strong> Badan koordinasi perhimpunan yang merupakan penanggung jawab hukum perhimpunan.</li>
            <li><strong>Badan Pengawas Kegiatan dan Keuangan (BPKK):</strong> Badan dari perhimpunan yang mengontrol dan mengawasi kegiatan dan keuangan pengurus pusat yang bersifat independen.</li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 13: Badan Kelengkapan Perhimpunan</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Sidang Perwakilan Anggota (SPA):</strong> Musyawarah tertinggi yang dihadiri oleh perwakilan anggota.</li>
            <li><strong>Sidang Perwakilan Anggota Luar Biasa (SPA-LB):</strong> Musyawarah tertinggi yang dihadiri oleh perwakilan anggota yang dilaksanakan dalam keadaan darurat.</li>
            <li><strong>Rapat Anggota:</strong> Rapat yang diselenggarakan oleh anggota perhimpunan sesuai dengan keperluan selain SPA dan SPA-LB.</li>
            <li><strong>Badan Eksekutif:</strong> Badan pekerja harian yang ketuanya dipilih dalam SPA atau SPA-LB.</li>
          </ol>


          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab V: Wewenang dan Kewajiban</h2>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 14: SPA & SPA-LB</h3>
          <div className="space-y-4">
            <div>
              <strong>1. Sidang Perwakilan Anggota (SPA):</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>SPA memiliki kekuatan hukum tertinggi dalam perhimpunan.</li>
                <li>SPA bersidang satu kali dalam masa kepengurusan.</li>
                <li>SPA berfungsi untuk memilih Ketua dan anggota BPKK.</li>
                <li>SPA memiliki wewenang untuk mengubah AD/ART, jika dianggap perlu.</li>
                <li>SPA memiliki wewenang untuk meminta Laporan Pertanggungjawaban kepada Badan Eksekutif dan BPKK.</li>
                <li>SPA berhak menerima atau menolak Laporan Pertanggungjawaban Badan Eksekutif dan BPKK.</li>
                <li>Peninjauan dan pencabutan keputusan-keputusan SPA hanya dapat dilakukan di SPA.</li>
                <li>SPA mengesahkan anggota kehormatan.</li>
                <li>Keputusan SPA mengikat setiap anggota dan berlaku dalam segala badan perlengkapan perhimpunan.</li>
                <li>SPA mengesahkan garis-garis besar Program Kerja PPI Aachen.</li>
              </ul>
            </div>
            <div>
              <strong>2. Sidang Perwakilan Anggota Luar Biasa (SPA-LB):</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>SPA-LB memiliki kekuatan hukum yang sama seperti SPA.</li>
                <li>SPA-LB dilaksanakan dalam keadaan darurat.</li>
                <li>SPA-LB hanya dapat dijalankan jika diusulkan oleh anggota penuh dan didukung sekurang-kurangnya 50%+1 dari jumlah anggota dalam rapat anggota.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 15: Rapat Anggota</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Menjabarkan dan mendefinisikan garis-garis besar Program Kerja yang ditetapkan dalam SPA.</li>
            <li>Rapat anggota dilaksanakan melalui tatap muka kecuali dalam keadaan darurat, maka media komunikasi lainnya diperbolehkan.</li>
            <li>Menetapkan peraturan – peraturan yang bersifat independen dan tidak bertentangan dengan AD/ART PPI Aachen.</li>
            <li>Mengusulkan SPA-LB dan perubahan AD/ART.</li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 16: Badan Eksekutif</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Hak:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Mewakili perhimpunan ke luar.</li>
                <li>Mengusulkan SPA-LB.</li>
                <li>Menerima anggota penuh dan luar biasa.</li>
              </ul>
            </li>
            <li><strong>Kewajiban:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Melaksanakan keputusan-keputusan SPA.</li>
                <li>Melakukan koordinasi dengan PPI Jerman.</li>
                <li>Melaksanakan misi organisasi.</li>
                <li>Menyelesaikan persoalan-persoalan PPI Aachen baik ke luar dan ke dalam.</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 17: BPKK</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Menjalankan fungsi kontrol terhadap badan eksekutif.</li>
            <li>Mengambil langkah–langkah yang dianggap perlu dan sesuai dengan fungsi kontrol.</li>
            <li>Berhak mengusulkan SPA-LB.</li>
            <li>Menyelenggarakan SPA-LB, apabila 50 persen plus 1 anggota PPI Aachen menyetujui usulan BPKK.</li>
          </ol>


          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab VI: Persidangan</h2>
          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 18: Keputusan Sidang</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Setiap keputusan dalam perhimpunan diambil secara musyawarah dan mufakat.</li>
            <li>Musyawarah dilaksanakan berdasarkan gotong–royong dengan sikap saling memberi dan menerima dalam suasana kekeluargaan.</li>
            <li>Apabila tidak mencapai mufakat, maka diadakan pemungutan suara (suara terbanyak).</li>
            <li>Setiap persidangan SPA diatur berdasarkan tata tertib SPA.</li>
          </ol>

          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab VII: Keuangan</h2>
          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 19: Keuangan</h3>
          <p>Keuangan perhimpunan didapatkan dari hasil usaha yang sah dan sumbangan yang tidak mengikat. Dipergunakan untuk membiayai keperluan perhimpunan.</p>

          <h2 className="text-[#002F6C] font-bold border-b pb-2 mt-12 mb-6">Bab VIII: Perubahan dan Pembubaran</h2>
          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 20: Perubahan AD/ART</h3>
          <p>Dapat diajukan oleh anggota, disepakati oleh rapat anggota, dan dilaksanakan dalam SPA (persetujuan minimal 2/3 untuk AD, 1/2 untuk ART).</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 21-22: Pemilihan Ketua & BPKK</h3>
          <p>Calon harus WNI, berakhlak mulia, dan bersedia tinggal di Aachen minimal 1 tahun. Pemilihan dilakukan secara musyawarah atau voting jika perlu.</p>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 23: Pembubaran</h3>
          <p>Hanya dapat dilakukan dalam SPA dengan pemberitahuan 1 tahun sebelumnya dan disetujui oleh SELURUH anggota.</p>


          <div className="my-12 border-t border-gray-200"></div>

          <h1 className="text-[#002F6C] font-bold text-3xl mb-8">ANGGARAN RUMAH TANGGA</h1>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 1: Keanggotaan</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Penerimaan keanggotaan penuh dan luar biasa diputuskan oleh Badan Eksekutif.</li>
            <li>Penerimaan keanggotaan kehormatan diserahkan sepenuhnya kepada SPA.</li>
            <li>Anggota penuh tidak boleh terdaftar sebagai anggota dari PPI Cabang lain di Jerman.</li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 3: SPA & SPA-LB</h3>
          <div>
            <strong>1. SPA:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Hak suara: satu orang satu suara.</li>
              <li>Sah jika dihadiri minimal 50% + 1 dari jumlah anggota penuh.</li>
              <li>Perangkat sidang: Ketua Sidang, Ketua I, Ketua II, Sekretaris, Seksi Dokumentasi.</li>
            </ul>
          </div>
          <div className="mt-4">
            <strong>2. SPA-LB:</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Dapat dilaksanakan apabila disetujui minimal 2/3 anggota penuh, atau usulan BPKK dengan persetujuan 50% + 1 anggota.</li>
            </ul>
          </div>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 4: Badan Eksekutif</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Ketua membentuk kepengurusan selambatnya 4 minggu setelah SPA.</li>
            <li>Masa jabatan 1 tahun, opsi perpanjangan 6 bulan.</li>
            <li>Jika ketua berhalangan, wakil ketua menggantikan.</li>
            <li>Badan Eksekutif wajib melaporkan kegiatannya dalam SPA (Laporan kegiatan, administrasi, keuangan, kebijakan).</li>
            <li>SPA adalah satu-satunya badan yang berhak membebaskan pengurus pusat dari jabatannya setelah mempertimbangkan laporan BPKK.</li>
          </ol>

          <h3 className="text-gray-900 font-bold mt-8 mb-2">Pasal 6: BPKK</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Beranggotakan maksimal 3 orang.</li>
            <li>Wajib memeriksa sekurang-kurangnya 6 bulan sekali dan melaporkan secara tertulis.</li>
            <li>Wajib mempertanggungjawabkan hasil kerjanya dalam SPA.</li>
          </ol>

        </div>

        <div className="my-12 border-t border-gray-200"></div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4 font-medium">
            Hanya file ini (dokumen yang di-embed di bawah) yang dianggap sah sebagai referensi utama.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#002F6C] text-white font-bold rounded-lg hover:bg-[#001D43] transition-colors shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Buka Dokumen Resmi AD/ART
          </button>
        </div>

      </div>

      {/* Official Doc Modal */}
      {
        showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] relative flex flex-col animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg">Dokumen Resmi AD/ART PPI Aachen</h3>
                <div className="flex items-center gap-2">
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vS1P12969Vut22ytyBniEyIdopjk08xi5fk73IlC4ZA90_lp01PiB9L78Rz-86c7D7BUgVpnb1Q4Ito/pub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-[#0161bf] hover:bg-blue-50 rounded-full transition-colors"
                    title="Open in new tab"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow bg-gray-100 p-2 rounded-b-xl overflow-hidden">
                <iframe
                  src="https://docs.google.com/document/d/e/2PACX-1vS1P12969Vut22ytyBniEyIdopjk08xi5fk73IlC4ZA90_lp01PiB9L78Rz-86c7D7BUgVpnb1Q4Ito/pub?embedded=true"
                  className="w-full h-full rounded-lg bg-white"
                  allow="autoplay"
                  title="Official AD/ART Document"
                ></iframe>
              </div>

              {/* Footer Disclaimer */}
              <div className="p-3 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500">
                Hanya file ini yang dianggap sah.
              </div>
            </div>
          </div>
        )
      }
    </div >
  )
}
