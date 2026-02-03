import HeroHeader from '../components/HeroHeader'
import kepengurusanData from '../../content/pages/kepengurusan.json'

interface Department {
  name: string
  description: string
  members: string[]
}

export default function Kepengurusan() {
  const heroSection = kepengurusanData.sections.find(s => s.type === 'Hero')
  const executiveBoard = kepengurusanData.sections.find(s => s.type === 'ExecutiveBoard') as { type: string, title?: string, chair: string, vice: string } | undefined
  const departmentList = kepengurusanData.sections.find(s => s.type === 'DepartmentList')
  const departments = (departmentList?.departments || []) as Department[]

  const executiveBoardIndex = kepengurusanData.sections.findIndex(s => s.type === 'ExecutiveBoard')
  const departmentListIndex = kepengurusanData.sections.findIndex(s => s.type === 'DepartmentList')

  return (
    <div data-sb-object-id="content/pages/kepengurusan.json">
      <HeroHeader
        title={heroSection?.title || "Kepengurusan"}
        subtitle={heroSection?.subtitle || "Susunan Kepengurusan PPI Aachen 2025/2026"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">

          {/* Core Leadership */}
          {executiveBoard && (
            <section className="mb-16 text-center" data-sb-field-path={`sections.${executiveBoardIndex}`}>
              <h2 className="heading-2 mb-8" data-sb-field-path="title">{executiveBoard.title || "Executive Board"}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="heading-3 mb-2 text-[#002f6c]">Ketua</h3>
                  <p className="text-xl font-medium" data-sb-field-path="chair">{executiveBoard.chair}</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="heading-3 mb-2 text-[#002f6c]">Wakil Ketua</h3>
                  <p className="text-xl font-medium" data-sb-field-path="vice">{executiveBoard.vice}</p>
                </div>
              </div>
            </section>
          )}

          {/* Departments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-sb-field-path={`sections.${departmentListIndex}.departments`}>
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow" data-sb-field-path={`.${idx}`}>
                <div className="bg-gray-50 p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900" data-sb-field-path=".name">{dept.name}</h3>
                </div>
                <div className="p-6">
                  <p className="body-text text-gray-600 mb-6 italic border-l-4 border-[#0161bf] pl-4">
                    "<span data-sb-field-path=".description">{dept.description}</span>"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 uppercase text-sm tracking-wider">Members</h4>
                    <ul className="space-y-2" data-sb-field-path=".members">
                      {dept.members.map((member, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-[#0161bf] rounded-full"></span>
                          <span data-sb-field-path={`.${mIdx}`}>{member}</span>
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
    </div>
  )
}

