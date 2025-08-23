"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Settings } from "react-slick"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button/Button"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import Divider from "@mui/material/Divider"

interface IPops {
  data: ITrackTop[]
  title: string
}

const MainSlider = (props: IPops) => {
  const { data, title } = props
  const NextArrow = (props: any) => {
    return (
      <Button
        variant="outlined" // Change to "contained"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          zIndex: 2,
          minWidth: 30,
          width: 35,
        }}
      >
        <ChevronRightIcon />
      </Button>
    )
  }

  const PrevArrow = (props: any) => {
    return (
      <Button
        // color="inherit"
        variant="outlined"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          zIndex: 2,
          minWidth: 30,
          width: 35,
        }}
      >
        <ChevronLeftIcon />
      </Button>
    )
  }

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Box
      sx={{
        margin: "0 60px",
        ".track": {
          padding: "0 10px",
          img: {
            height: "150px",
            width: "150px",
          },
        },
        h3: {
          border: "1px solid #ccc",
          padding: "20px",
          height: "150px",
        },
      }}
    >
      <h2>Multiple Tracks</h2>
      <Slider {...settings}>
        <div className="track">
          <h3>Track 1</h3>
        </div>
        <div className="track">
          <h3>Track 2</h3>
        </div>
        <div className="track">
          <h3>Track 3</h3>
        </div>
        <div className="track">
          <h3>Track 4</h3>
        </div>
        <div className="track">
          <h3>Track 5</h3>
        </div>
        <div className="track">
          <h3>Track 6</h3>
        </div>
      </Slider>
      <Divider />
    </Box>
  )
}

export default MainSlider
