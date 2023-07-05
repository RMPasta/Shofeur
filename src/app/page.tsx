import Location from "@/components/Location/Location"
import Navigation from "@/components/NavBar/Navigation"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <Location />
      <Footer />
    </main>
  )
}
