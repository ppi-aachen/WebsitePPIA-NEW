import { useState, useEffect } from 'react'

interface CarouselProps {
    slides: string[]
    autoSlide?: boolean
    autoSlideInterval?: number
}

export default function Carousel({
    slides,
    autoSlide = true,
    autoSlideInterval = 5000,
}: CarouselProps) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, curr, slides.length]) // check dependencies

    return (
        <div className="overflow-hidden relative group w-full aspect-[16/9]">
            <div
                className="flex transition-transform ease-out duration-500 h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <img
                        key={i}
                        src={slide}
                        alt={`Slide ${i + 1}`} // Add alt text for accessibility
                        className="w-full h-full object-cover flex-shrink-0"
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow bg-white/30 text-white hover:bg-white/50 transition-colors backdrop-blur-sm"
                >
                    {/* Left Arrow Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow bg-white/30 text-white hover:bg-white/50 transition-colors backdrop-blur-sm"
                >
                    {/* Right Arrow Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {(() => {
                        const maxDots = 7
                        let startDot = 0
                        if (slides.length > maxDots) {
                            startDot = Math.max(0, Math.min(curr - Math.floor(maxDots / 2), slides.length - maxDots))
                        }

                        // Create array of indices to render
                        const visibleDots = Array.from({ length: Math.min(slides.length, maxDots) }, (_, i) => startDot + i)

                        return visibleDots.map((index) => {
                            const isLeftEdge = index === startDot && startDot > 0
                            const isRightEdge = index === startDot + visibleDots.length - 1 && index < slides.length - 1
                            const isSmall = isLeftEdge || isRightEdge

                            return (
                                <div
                                    key={index}
                                    className={`
                                transition-all bg-white rounded-full
                                ${isSmall ? "w-1.5 h-1.5 opacity-40" : "w-3 h-3"}
                                ${curr === index ? "p-2 bg-opacity-100" : "bg-opacity-50"}
                            `}
                                />
                            )
                        })
                    })()}
                </div>
            </div>
        </div>
    )
}
