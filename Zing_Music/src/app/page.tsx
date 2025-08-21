import AppHeader from "@/components/header/app.header"
import App from "next/app"

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Zing Music</h1>
      <p>Your music streaming experience starts here!</p>
      <AppHeader />
    </div>
  )
}
