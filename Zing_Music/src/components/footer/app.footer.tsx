import AppBar from "@mui/material/AppBar"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const AppFooter = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      Footer
    </AppBar>
  )
}

export default AppFooter
