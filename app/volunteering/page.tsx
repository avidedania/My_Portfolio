import Navbar from '@/components/Navbar'
import Volunteering from '@/components/Volunteering'

export default function VolunteeringPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Volunteering />
      </div>
    </main>
  )
}

