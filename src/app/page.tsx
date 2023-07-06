import Location from "@/components/Location/Location"
import Navigation from "@/components/NavBar/Navigation"
import Footer from "@/components/Footer/Footer"
import Login from "@/components/Login/Login"
import SignUp from "@/components/SignUp/SignUp"

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col">
      <Navigation />
      <Location />
      <Footer />
      <Login />
      <SignUp />
    </main>
  )
}
