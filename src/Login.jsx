import icon from "./imgs/iconGreen.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { Themes } from "./Themes";
import bg1 from "./imgs/bg1.png";

function Login() {
  return (
    <ThemeProvider theme={Themes}>
      <div
        className="h-screen w-screen bg-cover bg-bottom flex flex-col p-3"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <Box className="mt-32 w-full p-3 self-center flex flex-col space-y-3">
          <img src={icon} alt="Icon" className="object-contain w-48 my-8" />
          <TextField variant="outlined" label="账号" />
          <Box className="h-1" />
          <TextField variant="outlined" label="密码" />
          <box className="flex">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <box className="grow" />
            <Button sx={{ padding: 0 }}>忘记密码?</Button>
          </box>
          <Button
            variant="contained"
            className="self-center"
            color="primary"
            href="./Home"
          >
            登 陆
          </Button>
        </Box>
        <Box className="grow" />
      </div>
    </ThemeProvider>
  );
}

export default Login;
