import MetricTicker from '../components/landing/MetricTicker'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import SignalStrip from '../components/landing/SignalStrip'
import ProductPreview from '../components/landing/ProductPreview'
import MascotSection from '../components/landing/MascotSection'
import FeatureGrid from '../components/landing/FeatureGrid'
import AIIntelligence from '../components/landing/AIIntelligence'
import TokenShowcase from '../components/landing/TokenShowcase'
import HowItWorks from '../components/landing/HowItWorks'
import FinalCTA from '../components/landing/FinalCTA'
import Footer from '../components/landing/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SignalStrip />
      <ProductPreview />
      <MascotSection />
      <FeatureGrid />
      <AIIntelligence />
      <TokenShowcase />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </>
  )
}
