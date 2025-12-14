import Navbar from '@/components/Navbar'
import ProjectsBentoGrid from '@/components/ProjectsBentoGrid'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <ProjectsBentoGrid />
      </div>
    </main>
  )
}

