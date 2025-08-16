import React from "react";
import Login from "./Login";
import Home from "./Home";
import Camera from "./Camera";
import Event from "./Event";
import { Themes } from "./Themes";
import { Routes, Route, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MyAvatar from "./imgs/avatar.jpg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";

const toolbarStyle = {
  minHeight: "80px",
};

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
  color: "#fff",
  backgroundColor: "#2a6049",
});

const TopIconButton = (IconEle, text, uri) => {
  const navigate = useNavigate();
  return (
    <Button className="flex flex-col w-full" onClick={() => navigate(uri)}>
      {IconEle}
      <div className="text-xs">{text}</div>
    </Button>
  );
};

function App(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250, height: "100vh", bgcolor: "#fcf8f4" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton className="z-10" sx={{ ml: 2, mt: 2.5 }}>
        <Avatar alt="Arya" src={MyAvatar} />
      </IconButton>
      <Typography sx={{ ml: 3 }} color="primary" fontWeight="bold">
        Arya
      </Typography>
      <List sx={{ mt: 2 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="个人资料" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="隐私" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="通用" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="我的团队" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        {["关于山野无痕", "退出登陆"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <MailOutlineIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/camera" element={<Camera />} />
      <Route
        path="*"
        element={
          <React.Fragment>
            <ThemeProvider theme={Themes}>
              <HideOnScroll {...props}>
                <AppBar color="secondary" sx={{ boxShadow: 0, pt: 1 }}>
                  <Container maxWidth="xl">
                    <Toolbar
                      style={toolbarStyle}
                      disableGutters
                      className="relative"
                    >
                      <IconButton
                        className="z-20"
                        onClick={toggleDrawer("left", true)}
                        sx={{ mr: 0.5 }}
                      >
                        <Avatar alt="Remy Sharp" src={MyAvatar} />
                      </IconButton>
                      <div>
                        <Typography
                          variant="h6"
                          className="text-black"
                          lineHeight="1.2"
                        >
                          Arya Williamson
                        </Typography>
                        <Typography variant="subtitle2" color="#a5a5a5">
                          Beijing
                        </Typography>
                      </div>

                      <SwipeableDrawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                      >
                        {list("left")}
                      </SwipeableDrawer>
                      <div className="grow" align="right">
                        <IconButton color="primary">
                          <NotificationsNoneIcon />
                        </IconButton>
                      </div>
                    </Toolbar>
                  </Container>
                </AppBar>
              </HideOnScroll>
              <CssBaseline />

              <Box sx={{ flexGrow: 1 }}>
                <AppBar
                  position="fixed"
                  sx={{ top: "auto", bottom: 0, bgcolor: "#fcf8f4" }}
                >
                  <Toolbar>
                    {TopIconButton(<HomeRoundedIcon />, "首页", "home")}
                    <StyledFab aria-label="camera" href="./camera">
                      <CameraAltIcon />
                    </StyledFab>
                    {TopIconButton(<EventRoundedIcon />, "活动", "event")}
                  </Toolbar>
                </AppBar>
              </Box>

              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="event" element={<Event />} />
              </Routes>
            </ThemeProvider>
          </React.Fragment>
        }
      />
    </Routes>
  );
}

export default App;
