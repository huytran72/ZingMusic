"use client"
import { useHasMounted } from "@/utils/customHook"
import AppBar from "@mui/material/AppBar"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { Container } from "@mui/material"

const AppFooter = () => {
  const hasMounted = useHasMounted()

  if (!hasMounted) return <></>
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, background: "#f2f2f2" }}
    >
      <Container sx={{ display: "flex", gap: 10 }}>
        <AudioPlayer
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
          volume={0.5}
          style={{ boxShadow: "none", background: "#f2f2f2" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            minWidth: 100,
          }}
        >
          <div style={{ color: "#ccc" }}>Harry</div>
          <div style={{ color: "black" }}>Who I am?</div>
        </div>
      </Container>
    </AppBar>
  )
}

export default AppFooter
