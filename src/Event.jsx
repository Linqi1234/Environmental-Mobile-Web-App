import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import IosShareIcon from "@mui/icons-material/IosShare";
import { DataGrid } from "@mui/x-data-grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TopIconButton = (IconEle, text) => {
  return (
    <Button className="flex flex-col">
      {IconEle}
      <div className="grow" />
      <div className="text-xs text-black pt-0.5">{text}</div>
    </Button>
  );
};

function ResponsiveDatePickers() {
  const [val, setVal] = React.useState(dayjs("2022-11-06"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        value={val}
        onChange={(newValue) => {
          setVal(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

const columns = [
  { field: "id", headerName: "排名", width: 70 },
  { field: "firstName", headerName: "用户", width: 100 },
  { field: "num", headerName: "贡献垃圾数量", type: "number" },
];

const rows = [
  { id: 1, firstName: "Jon", num: 35 },
  { id: 2, firstName: "Cersei", num: 32 },
  { id: 3, firstName: "Jaime", num: 28 },
  { id: 4, firstName: "Arya", num: 23 },
  { id: 5, firstName: "Daenerys", num: 20 },
  { id: 6, firstName: "David", num: 19 },
  { id: 7, firstName: "Ferrara", num: 17 },
  { id: 8, firstName: "Rossini", num: 16 },
  { id: 9, firstName: "Harvey", num: 14 },
];

function Event() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }} className="mt-20">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="我的团队" {...a11yProps(0)} sx={{ px: 8 }} />
            <Tab label="动态" {...a11yProps(1)} sx={{ px: 10 }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box>
            <Stack direction="row" spacing={1}>
              {TopIconButton(
                <Avatar sx={{ bgcolor: "#f4852b" }} variant="rounded">
                  N
                </Avatar>,
                "团队一"
              )}
              {TopIconButton(
                <Avatar sx={{ bgcolor: "#f4852b" }} variant="rounded">
                  <AssignmentIcon />
                </Avatar>,
                "团队二"
              )}
              {TopIconButton(
                <AddCircleOutlineIcon
                  fontSize="large"
                  sx={{ color: "#f2a6049" }}
                />,
                "更多"
              )}
            </Stack>
          </Box>
          <Box className="flex">
            <Box className="mt-4 w-40 ml-2">{ResponsiveDatePickers()}</Box>
            <Box className="grow" />
            <IconButton sx={{ mr: 2, mt: 3 }} color="primary">
              <IosShareIcon />
            </IconButton>
          </Box>
          <Box className="mt-6">
            <Typography sx={{ ml: 2, fontWeight: "bold" }}>
              活动时间：8:00 —— 9:35
            </Typography>
            <Typography sx={{ ml: 2, fontWeight: "bold" }}>
              团队共捡到204个垃圾，我贡献了23个。
            </Typography>
            <Typography sx={{ ml: 2, mt: 1, fontWeight: "bold" }}>
              排名：4
            </Typography>
            <Box className="m-2">
              <div style={{ height: 375, width: "100%" }}>
                <DataGrid
                  className="pl-2"
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[3]}
                />
              </div>
            </Box>

            <Divider variant="middle" sx={{ mt: 5 }} />
          </Box>
          <Box>
            <Box className="mt-8 px-5 py-2 flex">
              <Typography sx={{ mt: 1, fontWeight: "bold" }} variant="h6">
                评论
              </Typography>
              <Box className="grow" />
              <Typography
                variant="subtitle2"
                color="primary"
                className="p-2 pt-4"
              >
                显示更多
              </Typography>
            </Box>
            <List sx={{ width: "100%", maxWidth: 360, mb: 7 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={img1} />
                </ListItemAvatar>
                <ListItemText
                  primary="Woo!"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — That's really great!"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={img2} />
                </ListItemAvatar>
                <ListItemText
                  primary="👍👍！"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={img3} />
                </ListItemAvatar>
                <ListItemText
                  primary="感恩🥹！"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        起名好难
                      </Typography>
                      {" — 感谢你们对保护环境的贡献！"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </>
  );
}

export default Event;
