'use client'

import { useState, useEffect } from 'react'

interface HeroHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  height?: 'small' | 'medium' | 'large'
}

export default function HeroHeader({
  backgroundImage = '/hero.png',
  height = 'medium',
}: HeroHeaderProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heightClasses = {
    small: 'h-[180px] pt-[60px] pb-8',
    // You can also make medium responsive:
    medium: 'h-[400px] xl:h-[550px] pt-[60px] pb-[60px]',
    // UPDATED: Standard is 520px, but on XL screens (1280px+) it becomes 750px
    large: 'h-[520px] xl:h-[750px] pt-[60px] pb-[60px]',
  }

  return (
    <div
      // Added relative and overflow-hidden to handle the inner absolute image
      className={`${heightClasses[height]} relative overflow-hidden text-white flex flex-col justify-center items-center text-center`}
    >
      {/* Parallax Background Layer */}
      <div
        className="absolute w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // PARALLAX LOGIC:
          transform: `translateY(${offset * 0.5}px)`,
          // BUFFER FIX: Make image 20% taller than container and pull it up
          // This ensures that when the container grows on wide screens, 
          // or when parallax moves the image, we don't see white gaps.
          height: '120%',
          top: '-10%',
          zIndex: 0,
        }}
      />


    </div>
  )
}