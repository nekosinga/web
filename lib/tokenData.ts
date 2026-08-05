// Token data with CoinGecko image URLs for landing page display
// In production, this would come from the actual API

export interface TokenData {
  symbol: string
  name: string
  image: string
}

// Common tokens with their CoinGecko image URLs
export const TOKENS: Record<string, TokenData> = {
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/standard/bitcoin.png'
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png'
  },
  SOL: {
    symbol: 'SOL',
    name: 'Solana',
    image: 'https://assets.coingecko.com/coins/images/4128/standard/solana.png'
  },
  PEPE: {
    symbol: 'PEPE',
    name: 'Pepe',
    image: 'https://assets.coingecko.com/coins/images/29850/standard/pepe-token.jpeg'
  },
  ARB: {
    symbol: 'ARB',
    name: 'Arbitrum',
    image: 'https://assets.coingecko.com/coins/images/16547/standard/photo_2023-03-29_21.47.00.jpeg'
  },
  MATIC: {
    symbol: 'MATIC',
    name: 'Polygon',
    image: 'https://assets.coingecko.com/coins/images/4713/standard/polygon.png'
  }
}

export function getTokenData(symbol: string): TokenData {
  const normalized = symbol.replace('$', '').toUpperCase()
  return TOKENS[normalized] || {
    symbol: normalized,
    name: normalized,
    image: ''
  }
}
