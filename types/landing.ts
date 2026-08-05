export interface Feature {
  title: string
  description: string
  detail: string
  visual: React.ReactNode
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface Signal {
  label: string
}

export interface Metrics {
  mentions: number
  tokens: number
  signals: number
}
