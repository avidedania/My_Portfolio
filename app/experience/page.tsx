import Navbar from '@/components/Navbar'
import BentoGrid from '@/components/BentoGrid'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <BentoGrid />
      </div>
    </main>
  )
}

