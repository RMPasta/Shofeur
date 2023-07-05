import Location from "@/components/Location/Location"
import Navigation from "@/components/NavBar/Navigation"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <Location />
    </main>
  )
}
