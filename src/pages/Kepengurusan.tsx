import HeroHeader from '../components/HeroHeader'

export default function Kepengurusan() {
  const leadership = {
    chair: "Adriano Ferane Gunawan",
    vice: "Alfred Triza & Nathanael Lumen Sukmana"
  };

  const departments = [
    {
      name: "Badan Pengawas Kegiatan dan Keuangan (BPKK)",
      description: "We get the job done 😏🤙🏼. They’re the ones steering the ship, making sure everything runs smoothly.",
      members: ["Nathan Matthew Kurnia", "Muhammad Mulya Salam"]
    },
    {
      name: "Human Resources",
      description: "We’re not licensed therapists 🤫. From team well-being to smooth internal coordination, they’re here to make sure PPI Aachen runs with heart, harmony, and a whole lot of care.",
      members: ["Aisha Safwa Fatiha", "Briggita Graciella"]
    },
    {
      name: "Sekretaris",
      description: "Keeping everything organized and documented.",
      members: ["Tresy Prawita Silalahi", "Vivian Prudence Chen", "Michelle Anwar"]
    },
    {
      name: "Bendahara",
      description: "Managing the finances and keeping the books balanced.",
      members: ["Marlyne Tanankia", "Macario Zachary Machmud"]
    },
    {
      name: "Public Relations",
      description: "🚨We’re the cool kids on the block🚨. No cap, we run the socials 😎📱. From handling external comms to shaping the public image of PPI Aachen, they’re the bridge between us and the world.",
      members: ["Pascal Joseph Nathaniel (Ketua)", "Marie Elaine Winona Silap", "Muhammad Hanif Utomo", "Fictor Marcelbrian", "Andriyani Monica Susanto", "Rafi Arya Putra Hariyadi", "Mervin Yuan Arkana"]
    },
    {
      name: "Sports",
      description: "We ball ! 🏀⚽️🔥. Meet our MVPs from the Sports Department! ⛳️🏐. From tournaments to casual games, they’re here to keep us active, build team spirit, and bring the fun (and sweat) all year long.",
      members: ["Gede Pradnya Paramartha (Ketua)", "Roger Marcelbrian", "Stanislaus Joey Gunawan", "Hanif Aulia Ibrahim", "Kevin Kristianto Widjaja", "Grant Elliot Thomas", "William Krisna Sunjoto"]
    },
    {
      name: "Arts & Culture",
      description: "Too cultured to be subtle 🔥🫦. From showcasing rich traditions to sparking creative expression, they’ll be at the heart of celebrating Indonesian culture in PPI Aachen this year.",
      members: ["Nicholas Daniel Tjandrasa (Ketua)", "Renata Shannon Rijanto", "Delix Andea", "Filbert Filbert", "Joan Ivanka", "Jesslyn Aurelia Tjen", "Bonfilio Onassis Setiawan"]
    },
    {
      name: "Fundraising",
      description: "Buy our merch pls 👉👈. We promise it’s cute and for a good cause 😌. From designing must-have merch to organizing creative fundraising events, they’re the financial fuel behind PPI Aachen’s journey this year.",
      members: ["Liorio Anargya Putra Wibowo (Ketua)", "Imelda Halim", "Grace Adeline", "Philipus Dean Laurent", "Kenzie Weili Wangkawa Winarto", "Keanu Rafif Shadiq Hidayat", "James Edward"]
    },
    {
      name: "Education",
      description: "We’re not nerds 😤. We’re just passionately smart 🤓. From academic enrichment to insightful workshops, they’re here to empower, inspire, and support your learning journey throughout the year.",
      members: ["Brendon Arie Putra (Ketua)", "Jason Louis Laksono", "Sheifer Sidney Cornelly", "Timothy Setiawan", "Dheo Santoso", "Ahmad Maulana", "Ghithrafi Fadhgazka Syarif"]
    },
    {
      name: "Multimedia and IT",
      description: "Our eyes may hurt after this period 👁️💧👄💧👁️. From content creation to tech support, they’ll be behind all things visual and digital for PPI Aachen!",
      members: ["Bartholomeus Marciano Nathan (Ketua)", "Michael Xhristiano Espranata", "Rafael Billy Jayadi", "Deronn Jehosaphat", "Fachrial Dimas Putra Perdana", "Matthew Nathaniel Panggabean", "Navy Hanan", "Samuel Raphael Tanos", "Olivier Al Drich"]
    }
  ];

  return (
    <div>
      <HeroHeader title="Kepengurusan" subtitle="Susunan Kepengurusan PPI Aachen 2025/2026" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Core Leadership */}
        <section className="mb-16 text-center">
          <h2 className="heading-2 mb-8">Executive Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="heading-3 text-[#002F6C] mb-2">Ketua</h3>
              <p className="text-xl font-medium">{leadership.chair}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="heading-3 text-[#002F6C] mb-2">Wakil Ketua</h3>
              <p className="text-xl font-medium">{leadership.vice}</p>
            </div>
          </div>
        </section>

        {/* Departments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {departments.map((dept, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-50 p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
              </div>
              <div className="p-6">
                <p className="body-text text-gray-600 mb-6 italic border-l-4 border-[#0161bf] pl-4">
                  "{dept.description}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 uppercase text-sm tracking-wider">Members</h4>
                  <ul className="space-y-2">
                    {dept.members.map((member, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#0161bf] rounded-full"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

