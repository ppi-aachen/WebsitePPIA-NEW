'use client'

import { useState } from 'react'
import HeroHeader from '../components/HeroHeader'
import arsipData from '../../content/pages/arsip-pengurus.json'

interface Department {
  name: string
  members: string[]
}

interface Cabinet {
  period: string
  chair: string
  vice?: string
  image?: string
  departments: Department[]
}

export default function ArsipPengurus() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const heroSection = arsipData.sections.find(s => s.type === 'Hero')
  const cabinetArchive = arsipData.sections.find(s => s.type === 'CabinetArchive')
  const cabinets = (cabinetArchive?.cabinets || []) as Cabinet[]
  const pastChairs = (cabinetArchive?.pastChairs || []) as { name: string, period: string }[]

  const cabinetArchiveIndex = arsipData.sections.findIndex(s => s.type === 'CabinetArchive')

  return (
    <div data-sb-object-id="content/pages/arsip-pengurus.json">
      <HeroHeader
        title={heroSection?.title || "Arsip Pengurus"}
        subtitle={heroSection?.subtitle || "Past Cabinet Archive"}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 md:px-[48px] py-12">
          {/* Daftar Ketua Section - Moved to Top */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12" data-sb-field-path={`sections.${cabinetArchiveIndex}`}>
            <h2 className="heading-2 mb-8 text-center" data-sb-field-path="pastChairs">Daftar Ketua PPI Aachen</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-1 [column-rule:1px_solid_#e5e7eb]">
              {pastChairs.map((item, idx) => (
                <div key={idx} className="break-inside-avoid flex justify-between items-center h-14 px-2 border-b border-gray-100 hover:bg-gray-50 transition-colors group" data-sb-field-path={`.${idx}`}>
                  <span className="font-medium text-gray-900 border-r border-gray-200 pr-4 flex-1 truncate group-hover:border-[#002f6c]/30 transition-colors" title={item.name} data-sb-field-path=".name">{item.name}</span>
                  <span className="text-sm text-gray-500 font-mono pl-4 text-right min-w-[100px]" data-sb-field-path=".period">{item.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Cabinets Section */}
          <section className="mb-12" data-sb-field-path={`sections.${cabinetArchiveIndex}`}>
            <h2 className="heading-2 mb-12 text-center" data-sb-field-path="title">{cabinetArchive?.title || "Arsip Pengurus Kabinet"}</h2>

            <div className="grid grid-cols-1 gap-6" data-sb-field-path="cabinets">
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
                    data-sb-field-path={`.${idx}`}
                  >
                    {/* Header (Clickable) */}
                    <div className="bg-[#002F6C] text-white p-6 flex flex-col sm:flex-row justify-between items-center relative group">
                      <div className="z-10 text-center sm:text-left">
                        <h3 className="text-2xl font-bold mb-2 sm:mb-0 group-hover:underline decoration-white/50 underline-offset-4 transition-all" data-sb-field-path=".period">
                          {cab.period}
                        </h3>
                      </div>
                      <div className="z-10 text-center sm:text-right flex flex-col items-center sm:items-end">
                        <p className="text-lg font-semibold" data-sb-field-path=".chair">{cab.chair}</p>
                        {cab.vice && cab.vice !== "-" && <p className="text-sm opacity-90">Vice: <span data-sb-field-path=".vice">{cab.vice}</span></p>}
                      </div>

                      {/* Expand/Collapse Indicator */}
                      <div className="sm:hidden mt-3 text-white/70">
                        {isOpen ? "Tap to close" : "Tap to view details"}
                      </div>
                    </div>

                    {/* Body (Collapsible) */}
                    {(cab.departments && cab.departments.length > 0 || cab.image) && (
                      <div
                        className={`
                                          bg-gray-50 transition-all duration-500 ease-in-out overflow-hidden
                                          ${isOpen ? 'max-h-[3000px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}
                                      `}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-sb-field-path=".departments">

                          {cab.departments?.map((dept, dIdx) => (
                            <div key={dIdx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200" data-sb-field-path={`.${dIdx}`}>
                              <h4 className="font-bold text-[#002F6C] mb-2 text-sm uppercase tracking-wide border-b pb-1 border-gray-100" data-sb-field-path=".name">{dept.name}</h4>
                              <ul className="text-sm text-gray-700 space-y-1" data-sb-field-path=".members">
                                {dept.members.map((member, mIdx) => (
                                  <li key={mIdx} data-sb-field-path={`.${mIdx}`}>{member}</li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Cabinet Image if available */}
                          {cab.image && (
                            <div className="md:col-span-2 lg:col-span-3 mt-4">
                              <img
                                src={cab.image}
                                alt={`Kabinet ${cab.period}`}
                                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                data-sb-field-path=".image"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Caretaker Note (Collapsible) */}
                    {(cab.departments?.length === 0 && cab.vice === "Caretaker (Ketua, Sekretaris, Bendahara)") && (
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
    </div>
  )
}
