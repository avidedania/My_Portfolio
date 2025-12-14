import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'

export default function SkillsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Skills />
      </div>
    </main>
  )
}

