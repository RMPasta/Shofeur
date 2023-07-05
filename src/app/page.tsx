import LocationDetails from "@/components/LocationDetails"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <main className="flex">
      <Navigation />
      <LocationDetails />
    </main>
  )
}
