import MainSlider from "@/components/main/main.slider"
import { Container } from "@mui/material"

const res = await fetch("http://localhost:8000/api/v1/tracks/top", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    category: "CHILL",
    limit: 10,
  }),
})
console.log("Check server:", await res.json())

export default function HomePage() {
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </Container>
  )
}
