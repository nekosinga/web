import { useState } from 'react'
import Image from 'next/image'

interface TokenIconProps {
  symbol: string
  image?: string
  size?: number
  className?: string
}

export default function TokenIcon({ symbol, image, size = 24, className = '' }: TokenIconProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Clean symbol (remove $ prefix)
  const cleanSymbol = symbol.replace('$', '').toUpperCase()
  const initial = cleanSymbol.charAt(0)

  // If no image or image failed to load, show fallback
  if (!image || imageError) {
    return (
      <div 
        className={`token-icon-fallback ${className}`}
        style={{ width: size, height: size }}
      >
        {initial}
      </div>
    )
  }

  return (
    <div className={`token-icon-wrapper ${className}`} style={{ width: size, height: size }}>
      {!imageLoaded && (
        <div 
          className="token-icon-fallback" 
          style={{ width: size, height: size }}
        >
          {initial}
        </div>
      )}
      <Image
        src={image}
        alt={`${symbol} icon`}
        width={size}
        height={size}
        className={`token-icon ${imageLoaded ? 'loaded' : ''}`}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        unoptimized // For external CoinGecko images
      />
    </div>
  )
}
