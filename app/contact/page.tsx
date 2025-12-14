import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Contact />
      </div>
    </main>
  )
}

