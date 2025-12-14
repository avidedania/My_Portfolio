import Navbar from '@/components/Navbar'
import About from '@/components/About'

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <About />
      </div>
    </main>
  )
}

