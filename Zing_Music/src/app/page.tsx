import AppHeader from "@/components/header/app.header"
import MainSlider from "@/components/main/main.slider"
import App from "next/app"
import { Main } from "next/document"

export default function HomePage() {
  return (
    <div>
      <MainSlider />
    </div>
  )
}
