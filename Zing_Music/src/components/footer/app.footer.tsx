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
      <Container>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          volume={0.5}
          style={{ boxShadow: "none", background: "#f2f2f2" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            minWidth: "100%",
          }}
        >
          <div></div>
        </div>
      </Container>
    </AppBar>
  )
}

export default AppFooter
