'use client'

import { useState } from 'react'
import HeroHeader from '../components/HeroHeader'

import kabinet2425 from '../assets/pengurus/kabinet-2024-2025.jpg'
import kabinet2526 from '../assets/pengurus/kabinet-2025-2026.jpg'
import kabinet2224 from '../assets/pengurus/kabinet-2022-2024.jpg'
import kabinet2122 from '../assets/pengurus/kabinet-2021-2022.jpg'
import kabinet2021 from '../assets/pengurus/kabinet-2020-2021.jpg'
import kabinet1819 from '../assets/pengurus/kabinet-2018-2019.jpg'

export default function ArsipPengurus() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const cabinets = [
    {
      period: "2025/2026",
      chair: "Adriano Ferane Gunawan",
      vice: "Alfred Triza & Nathanael Lumen Sukmana",
      image: kabinet2526,
      departments: [
        { name: "BPKK", members: ["Nathan Matthew Kurnia", "Muhammad Mulya Salam"] },
        { name: "Human Resources", members: ["Aisha Safwa Fatiha", "Briggita Graciella"] },
        { name: "Sekretaris", members: ["Tresy Prawita Silalahi", "Vivian Prudence Chen", "Michelle Anwar"] },
        { name: "Bendahara", members: ["Marlyne Tanankia", "Macario Zachary Machmud"] },
        { name: "Hubungan Masyarakat", members: ["Pascal Joseph Nathaniel (Ketua)", "Marie Elaine Winona Silap", "Muhammad Hanif Utomo", "Fictor Marcelbrian", "Andriyani Monica Susanto", "Rafi Arya Putra Hariyadi", "Mervin Yuan Arkana"] },
        { name: "Pendidikan", members: ["Brendon Arie Putra (Ketua)", "Jason Louis Laksono", "Sheifer Sidney Cornelly", "Timothy Setiawan", "Dheo Santoso", "Ahmad Maulana", "Ghithrafi Fadhgazka Syarif"] },
        { name: "Seni Budaya", members: ["Nicholas Daniel Tjandrasa (Ketua)", "Renata Shannon Rijanto", "Delix Andea", "Filbert Filbert", "Joan Ivanka", "Jesslyn Aurelia Tjen", "Bonfilio Onassis Setiawan"] },
        { name: "Olahraga", members: ["Gede Pradnya Paramartha (Ketua)", "Roger Marcelbrian", "Stanislaus Joey Gunawan", "Hanif Aulia Ibrahim", "Kevin Kristianto Widjaja", "Grant Elliot Thomas", "William Krisna Sunjoto"] },
        { name: "Kewirausahaan", members: ["Liorio Anargya Putra Wibowo (Ketua)", "Imelda Halim", "Grace Adeline", "Philipus Dean Laurent", "Kenzie Weili Wangkawa Winarto", "Keanu Rafif Shadiq Hidayat", "James Edward"] },
        { name: "Multimedia dan IT", members: ["Bartholomeus Marciano Nathan (Ketua)", "Michael Xhristiano Espranata", "Rafael Billy Jayadi", "Deronn Jehosaphat", "Fachrial Dimas Putra Perdana", "Matthew Nathaniel Panggabean", "Navy Hanan", "Samuel Raphael Tanos", "Olivier Al Drich"] },
      ]
    },
    {
      period: "2024/2025",
      chair: "Nathan Matthew Kurnia",
      vice: "Muhammad Mulya Salam",
      image: kabinet2425,
      departments: [
        { name: "BPKK", members: ["Randy Cendiano"] },
        { name: "Human Resources", members: ["Fachrial Dimas Putra Perdana", "Tifano Muhammad Noor Isykio"] },
        { name: "Sekretaris", members: ["Aisha Safwa Fatiha", "Briggita Graciella"] },
        { name: "Bendahara", members: ["Andriyani Monica Susanto"] },
        { name: "Hubungan Masyarakat", members: ["Darrell Octavianus (Ketua)", "Edwin Kusuma", "Vivian Prudence Chen", "Valensya Djoe", "Hasyim Putro"] },
        { name: "Pendidikan dan Seni Budaya", members: ["Gerdan Bergadewata (Ketua)", "Anderson Widjaja", "Adriano Ferane Gunawan", "Muhammad Hadzy Fauzan", "Ammyrah Riztyanti Fahira"] },
        { name: "Olahraga", members: ["Andreas Welly Octavianus (Ketua)", "Albert Triza", "Medwin Samudra", "Kenvara Solivo Lwie", "Pascal Joseph Nathaniel", "Roger Marcelbrian"] },
        { name: "Kewirausahaan", members: ["Jessica Angelina (Ketua)", "Jannice Risse", "Jerry Pranoto", "Jovi Laurent", "Marlyne Tanankia", "Salma Benanni"] },
        { name: "Multimedia dan IT", members: ["Anindya Putri Diandra (Ketua)", "Imelda Halim", "Bartholomeus Marciano Nathan", "Vania Trianjani Iskandar", "Liorio A. Putra Wibowo", "Muhammad Dito Prastyo"] },
      ]
    },
    {
      period: "2022/2024",
      chair: "Tifano Muhammad Noor",
      vice: "Mohammad Agnar Khafani",
      image: kabinet2224,
      departments: [
        { name: "BPKK", members: ["Daniel Ariel Yobel"] },
        { name: "Sekretaris", members: ["Anindya Putri Diandra", "Tarisa Putri Nandita"] },
        { name: "Bendahara", members: ["Salma Benanni"] },
        { name: "Hubungan Masyarakat", members: ["Tasallia Nima Kamil", "Jerry Pranoto", "Nathan Matthew Kurnia"] },
        { name: "Akademik dan Riset", members: ["Anderson Widjaya", "Elberth Sebastian", "Jessica Angelina"] },
        { name: "Olahraga", members: ["Hasyim Asyari Adi Putro", "Christopher Ryan Suwito", "Nur Wahyu Widodo", "Triega Annisa Banowati"] },
        { name: "Seni Budaya", members: ["Muhammad Dito Prastyo", "Aisha Safwa Fatiha", "Purbo Suseno"] },
        { name: "Multimedia dan IT", members: ["Aira Danendra Sutadisastra", "Anindya Putri Diandra", "Muhammad Dito Prastyo"] },
      ]
    },
    {
      period: "2021/2022",
      chair: "Reza Rahman Susilo",
      vice: "Matilda Nydia Harista",
      image: kabinet2122,
      departments: [
        { name: "BPKK", members: ["Faryansyah Putra Rahardian"] },
        { name: "Sekretaris", members: ["Gabriela Giraldine Lutter", "Amirah Amany Hakim"] },
        { name: "Bendahara", members: ["Wa Ode Halda Nuzlia"] },
        { name: "Internal", members: ["Bratasena M. Airlangga", "Jonathan Reynaldo", "Calvin Van Drago", "Dennis Timothy Soetijoso"] },
        { name: "Hubungan Masyarakat", members: ["Devika Audian Ghaffary", "Dyah Ayu Myangsari", "Bryan Matthew"] },
        { name: "Dana Usaha", members: ["Izzi Aufa Di Falah", "Ananda Armand Sumana"] },
        { name: "Akademik dan Riset", members: ["Antonio Baldwin", "Jeremy W. Mulyono", "Arya Hafiidh Kumalajati", "Tifano M. Noor Isykio"] },
        { name: "Olahraga", members: ["Raul Fachwira", "Aditya T. Augrestian", "Vincent Lewinski", "Mahendra Dhaneswara"] },
        { name: "Seni Budaya", members: ["Fransisca Davina Lorenza", "Maria Anastasia Sinarso", "Komang Ayu Restu", "Ricard Kristian Sugiharto"] },
        { name: "Multimedia dan IT", members: ["Dominic Denzell", "Jovan Medianto Riman", "Pieter P. Patonedi", "Wira Pandita"] },
      ]
    },
    {
      period: "2021/2021",
      chair: "Muhammad Al Hasni",
      vice: "-",
      departments: [
        { name: "BPKK", members: ["Daniel Ariel Yobel", "Tegar Permana Diyado"] },
        { name: "Sekretaris", members: ["Shafira Febriana Ekaputri", "Kradicek Nozky Danit"] },
        { name: "Bendahara", members: ["Astriana Hajar Ansori"] },
        { name: "Humas & Perizinan", members: ["Zafira Kanara", "Reza Rahman Susilo", "Najma Rania Nazhifa", "Heronimus Dimas Pandu Utomo"] },
        { name: "Dana Usaha", members: ["Nikolas Edi Pujantoro", "Calvin Van Drago", "Winston Alexander Yauvira"] },
        { name: "Pendidikan", members: ["Arsyan Mohamad Virio Andreyana", "Tifano Muh. Noor Isykio", "Musthofa Kemal Bandu", "Hansen Frenico"] },
        { name: "Olahraga", members: ["Muhammad Farrel Orzya Riko", "Muhammad Rizky Mulachela", "Patrick Andersen Kanginan"] },
        { name: "Seni Budaya", members: ["Natasya Deliana Dewi", "Shidqii Dhiya Ulhaq", "Saddam Haikal Mubaraq"] },
        { name: "Media dan Dokumentasi", members: ["Nadia", "Avanindra Ramdhantyo Utomo", "Diandra Akbar Arifki Siregar"] },
      ]
    },
    {
      period: "2020/2021",
      chair: "Bintan Dzulfikar Hakim",
      vice: "Faryansyah Putra Rahadian",
      image: kabinet2021,
      departments: [
        { name: "BPKK", members: ["Daniel Ariel Yobel", "Tegar Permana Diyado"] },
        { name: "Sekretaris", members: ["Shafira Febriana Ekaputri"] },
        { name: "Bendahara", members: ["Kradicek Nozky Danit"] },
        { name: "Humas", members: ["Zafira Kanara", "Reza Rahman Susilo", "Najma Rania Nazhifa", "Heronimus Dimas Pandu Utomo"] },
        { name: "Dana Usaha", members: ["Nikolas Edi Pujantoro", "Calvin Van Drago", "Winston Alexander Yauvira"] },
        { name: "Pendidikan", members: ["Arsyan Mohadhamad Virio Andreyana", "Tifano Muh. Noor Isykio", "Musthofa Kemal Bandu", "Hansen Frenico"] },
        { name: "Olahraga", members: ["Muh. Al-Hasni", "Farrel Orzya Riko", "Rizky Mulachela"] },
        { name: "Media dan Dokumentasi", members: ["Nadia", "A. Ramdhantyo Utomo", "Diandra Akbar Arifki Siregar"] },
      ]
    },
    {
      period: "2019/2020",
      chair: "Tegar Diyado Permana",
      vice: "Muhammad Sofyan",
      departments: [
        { name: "BPKK", members: ["Fadli Rohman"] },
        { name: "Sekretaris", members: ["Muhammad Haykal Akbar"] },
        { name: "Bendahara", members: ["Daniel Ariel Yobel"] },
        { name: "Eksternal", members: ["Dewa Gede Dhanda Prastya"] },
        { name: "Keilmuan", members: ["Arsyan Mohamad Virio Andreyana", "Gustav Beka Sayudha"] },
        { name: "Internal", members: ["Zaki Fachryan", "Muhammad Brilliant Ardhana", "Muhammad Fajar Ramadhan Triputra"] },
        { name: "Olahraga", members: ["Mohammad Agnar Khalfani", "Putu Gede Bayu Agastya"] },
        { name: "Seni Budaya", members: ["Faryansyah Putra Rahardian", "Muhammad Yudith Imanullah"] },
        { name: "Kreatif", members: ["Zusril Sudiro Abdul Manap"] },
      ]
    },
    {
      period: "2018/2019",
      chair: "Christian Stainly Pungus",
      vice: "Tegar Diyado Permana",
      image: kabinet1819,
      departments: [
        { name: "BPKK", members: ["Romualdus Nugraha Catur Utomo"] },
        { name: "Sekretaris", members: ["Regina Diptahsing Hadiwinata"] },
        { name: "Bendahara", members: ["Deyland Alfattia Asyhari"] },
        { name: "Hubungan Masyarakat", members: ["Daniel Ariel Yobel", "Fheuli Risa Dini Ginting", "Tesalonika Dwi Putri Sianturi"] },
        { name: "Web, Media dan Dokumentasi", members: ["Cosmas Adri Prabowo", "Zhakiatul Imama"] },
        { name: "Pendidikan", members: ["Adiwan Suwono", "Muthia Dewi Alawiyah"] },
        { name: "Seni dan Budaya", members: ["Yusril Sudiro Abdul Manap", "Wati Putri Sihotang", "Nathalia Marlina Runtuwene", "Anindita Indri Hapsari", "Ie Clarissa Naomi Purnomo"] },
        { name: "Divisi Olahraga", members: ["Muhammad Farhan Tawakkal", "Farhan Shafy Sasono", "Adli Anaan Ferasa Prawira Kusuma"] },
        { name: "Dana dan Usaha", members: ["Muhammad Sofyan"] },
      ]
    },
    {
      period: "2017/2018",
      chair: "Irsyad Adri Wicaksono",
      vice: "Kadang Bujana",
      departments: [
        { name: "Sekretaris", members: ["Andra Yulandra"] },
        { name: "Bendahara", members: ["Purandra Ramadhan"] },
        { name: "Dana Usaha", members: ["Cahyono Iriawan", "Marcel Rieger"] },
        { name: "Humas", members: ["Ryan Risyadul Maruf"] },
        { name: "Kekeluargaan", members: ["Tegar Diyado Permana", "Satria", "Febrianto"] },
        { name: "Seni dan Budaya", members: ["Ferina Indriyani", "Deasy Gayatri"] },
        { name: "Web dan Media", members: ["Hafizhul Qisthi"] },
      ]
    },
    {
      period: "2016/2017",
      chair: "Randy Cendieno",
      vice: "Handy Valerian",
      departments: [
        { name: "Sekretaris", members: ["Satria Febrianto", "Azka Savanti"] },
        { name: "Humas", members: ["Ayu R. Dananti Dewi", "Andreas David Gunardi"] },
        { name: "Divisi Pendidikan", members: ["Putu Teguh Satria Adi", "Dedy Christopher Ongkowidjaja", "Muh Rizki Alim Maulana Wibawa"] },
        { name: "Seni dan Budaya", members: ["Caesar Adam Sophian", "Irsyad Adri Wicaksono", "Muhammad Rizki"] },
        { name: "Internal", members: ["Tito Prianggana", "Tegar Diyado Permana"] },
      ]
    },
    {
      period: "2015/2016",
      chair: "Dimaz Ibrahim",
      vice: "Joko Pradityo Moekti Putra",
      departments: [
        { name: "Sekretaris", members: ["Randy Cendieno", "Intan Purnamasari"] },
        { name: "Bendahara", members: ["Irsyad Adri"] },
        { name: "Humas", members: ["Asyraf Rizkyawan Syamsul"] },
        { name: "Seni dan Budaya", members: ["Nathania Amber Suryoputri"] },
        { name: "Informasi Pendidikan", members: ["Imam T. Rahman"] },
        { name: "Olahraga", members: ["Alfie Dhau'i"] },
      ]
    },
    {
      period: "2011 - 2015",
      chair: "Sasmaya Tilottama",
      vice: "Caretaker (Ketua, Sekretaris, Bendahara)",
      departments: []
    },
    {
      period: "2010/2011",
      chair: "Yoshua Pohan Iskandar",
      vice: "Gloria Abidin",
      departments: []
    }
  ];

  return (
    <div>
      <HeroHeader title="Arsip Pengurus" subtitle="Past Cabinet Archive" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Daftar Ketua Section - Moved to Top */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="heading-2 mb-8 text-center text-[#002F6C]">Daftar Ketua PPI Aachen</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-1 [column-rule:1px_solid_#e5e7eb]">
            {[
              { name: "Peter Manusama", period: "1956-1957" },
              { name: "Bacharuddin Jusuf Habibie", period: "1957-1959" },
              { name: "Sjafaril", period: "1959-1961" },
              { name: "Midian Sirait", period: "1961-1964" },
              { name: "Tidak diketahui", period: "1964-1992" },
              { name: "Yoshua", period: "1992-1994" },
              { name: "Andy Sugiarto", period: "1994-1996" },
              { name: "Yapto", period: "1996-1998" },
              { name: "Irwan Suwartana", period: "1998-1999" },
              { name: "Vakum", period: "1999-2004" },
              { name: "Tidak diketahui", period: "2004-2006" },
              { name: "Feby Kumara Adi", period: "2006-2008" },
              { name: "Imee Oktiara Tjoeng", period: "2008-2010" },
              { name: "Yoshua Pohan Iskandar", period: "2010-2011" },
              { name: "Sasmaya Tilottama", period: "2011-2015" },
              { name: "Dimaz Ibrahim", period: "2015-2016" },
              { name: "Randy Cendieno", period: "2016-2017" },
              { name: "Irsyad Adri Wicaksono", period: "2017-2018" },
              { name: "Christian Stainly Pungus", period: "2018-2019" },
              { name: "Tegar Diyado Permana", period: "2019-2020" },
              { name: "Bintan Dzulfikar Hakim", period: "2020-2021" },
              { name: "Faryansyah Putra Rahadian", period: "2021-2021 (PLT)" },
              { name: "Muhammad Al Hasni", period: "2021-2021" },
              { name: "Reza Rahman Susilo", period: "2021-2022" },
              { name: "Tifano Muhammad Noor Isykio", period: "2022-2024" },
              { name: "Nathan Matthew Kurnia", period: "2024-2025" },
              { name: "Adriano Ferane Gunawan", period: "2025-2026" },
            ].map((item, idx) => (
              <div key={idx} className="break-inside-avoid flex justify-between items-center h-14 px-2 border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                <span className="font-medium text-gray-900 border-r border-gray-200 pr-4 flex-1 truncate group-hover:border-[#002f6c]/30 transition-colors" title={item.name}>{item.name}</span>
                <span className="text-sm text-gray-500 font-mono pl-4 text-right min-w-[100px]">{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Cabinets Section */}
        <section className="mb-12">
          <h2 className="heading-2 mb-12 text-center text-[#002F6C]">Arsip Pengurus Kabinet</h2>

          <div className="grid grid-cols-1 gap-6">
            {cabinets.map((cab, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleExpand(idx)}
                  className={`
                                bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden 
                                hover:shadow-lg transition-all duration-300 cursor-pointer
                                ${isOpen ? 'ring-2 ring-[#0161bf]' : ''}
                            `}
                >
                  {/* Header (Clickable) */}
                  <div className="bg-[#002F6C] text-white p-6 flex flex-col sm:flex-row justify-between items-center relative group">
                    <div className="z-10 text-center sm:text-left">
                      <h3 className="text-2xl font-bold mb-2 sm:mb-0 group-hover:underline decoration-white/50 underline-offset-4 transition-all">
                        {cab.period}
                      </h3>
                    </div>
                    <div className="z-10 text-center sm:text-right flex flex-col items-center sm:items-end">
                      <p className="text-lg font-semibold">{cab.chair}</p>
                      {cab.vice && cab.vice !== "-" && <p className="text-sm opacity-90">Vice: {cab.vice}</p>}
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="sm:hidden mt-3 text-white/70">
                      {isOpen ? "Tap to close" : "Tap to view details"}
                    </div>
                  </div>

                  {/* Body (Collapsible) */}
                  {cab.departments && cab.departments.length > 0 && (
                    <div
                      className={`
                                        bg-gray-50 transition-all duration-500 ease-in-out overflow-hidden
                                        ${isOpen ? 'max-h-[3000px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}
                                    `}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {cab.departments.map((dept, dIdx) => (
                          <div key={dIdx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <h4 className="font-bold text-[#002F6C] mb-2 text-sm uppercase tracking-wide border-b pb-1 border-gray-100">{dept.name}</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              {dept.members.map((member, mIdx) => (
                                <li key={mIdx}>{member}</li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Cabinet Image if available */}
                        {/* @ts-ignore - Validating dynamic property */}
                        {cab.image && (
                          <div className="md:col-span-2 lg:col-span-3 mt-4">
                            <img
                              // @ts-ignore
                              src={cab.image}
                              alt={`Kabinet ${cab.period}`}
                              className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Caretaker Note (Collapsible) */}
                  {(cab.departments.length === 0 && cab.vice === "Caretaker (Ketua, Sekretaris, Bendahara)") && (
                    <div
                      className={`
                                        bg-gray-50 text-center text-gray-500 italic transition-all duration-300
                                        ${isOpen ? 'max-h-24 p-6' : 'max-h-0 p-0 overflow-hidden'}
                                    `}
                    >
                      Bertindak sebagai pelaksana tugas untuk memastikan keberlanjutannya PPI Aachen.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
