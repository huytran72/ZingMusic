"use client"
import { useHasMounted } from "@/utils/customHook"
import AppBar from "@mui/material/AppBar"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const AppFooter = () => {
  const hasMounted = useHasMounted()

  if (!hasMounted) return <></>
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        volume={0.5}
        // Try other props!
      />
    </AppBar>
  )
}

export default AppFooter
