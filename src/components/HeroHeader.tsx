interface HeroHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  height?: 'small' | 'medium' | 'large'
}

export default function HeroHeader({
  title,
  subtitle,
  backgroundImage,
  height = 'medium',
}: HeroHeaderProps) {
  const heightClasses = {
    small: 'h-[180px] pt-[60px] pb-8',
    medium: 'hero-header',
    large: 'h-[520px] pt-[60px] pb-[60px]',
  }

  return (
    <div
      className={`${heightClasses[height]} text-white relative`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-dark opacity-40" />
      <div className="relative z-10 px-12 md:px-[48px]">
        <h1 className="heading-1 text-white mb-6">{title}</h1>
        {subtitle && <p className="text-white text-[15pt] font-light">{subtitle}</p>}
      </div>
    </div>
  )
}

