import { IconButton, Typography } from "@mui/material";
import Webcam from "react-webcam";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ThemeProvider } from "@mui/material/styles";
import { Themes } from "./Themes";
import CameraIcon2 from "./imgs/camera2.svg";

function Camera(props) {
  return (
    <div className="relative">
      <Webcam className="w-screen h-screen object-cover absolute z-0" />
      <div className="absolute z-10 h-screen w-screen flex flex-col">
        <ThemeProvider theme={Themes}>
          <div className="flex m-4">
            <IconButton color="neutral" aria-label="back" href="./home">
              <ArrowBackRoundedIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <div className="grow mt-3 text-emerald-800" align="center">
              <div>
                <TimerOutlinedIcon />
                1:11:34
              </div>
            </div>
            <IconButton className="grow" color="neutral">
              <BoltRoundedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </div>
          <div className="grow" />
          <div className="w-3/5 h-24 bg-[#2a6049] self-center rounded-t-lg opacity-90">
            <div className="flex px-14 mt-4">
              <DeleteOutlineOutlinedIcon
                color="neutral"
                className="grow"
                sx={{ color: "#f4852b" }}
              />
              <Typography className="text-white grow" align="center">
                :
              </Typography>
              <Typography
                color="secondary"
                className="grow"
                align="center"
                sx={{ color: "#f4852b" }}
              >
                12
              </Typography>
            </div>
            <div className="flex pr-12 pl-8 mt-4">
              <Typography
                className="grow"
                align="center"
                letterSpacing={2}
                sx={{ color: "#f4852b" }}
              >
                当前排名
              </Typography>
              <Typography className=" text-white grow" align="center">
                :
              </Typography>
              <Typography
                sx={{ color: "#f4852b" }}
                className="grow"
                align="center"
                letterSpacing={2}
              >
                18/30
              </Typography>
            </div>
          </div>
          <div className="w-3/5 h-2 bg-white self-center mb-5 rounded-b-lg"></div>
          <img
            position="fixed"
            className="w-20 place-self-center mb-7"
            src={CameraIcon2}
            alt="camera"
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Camera;
