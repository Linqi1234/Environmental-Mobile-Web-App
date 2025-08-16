import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Bottle from "./imgs/bottle.png";
import Papers from "./imgs/paper.png";
import Pericarp from "./imgs/pericarp.png";
import Others from "./imgs/others.png";
import Cap1 from "./imgs/cap1.png";
import Cap2 from "./imgs/cap2.png";
import Cap3 from "./imgs/cap3.png";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import Leaf from "./imgs/leaf.png";
import Map2 from "./imgs/map2.png";
import Map1 from "./imgs/map1.png";
import Chip from "./imgs/chip.png";
import { Card, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Garden from "./imgs/garden.png";

function Home(props) {
  const itemData = [
    {
      img: Cap1,
      title: "集齐20个瓶子",
    },
    {
      img: Cap2,
      title: "集齐50个瓶子",
    },
    {
      img: Cap3,
      title: "十月瓶子挑战",
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-[#fcf8f4]">
        <Container className="mt-28 pb-2">
          <Card
            sx={{ display: "flex", bgcolor: "#2a6049", borderRadius: "25px" }}
            className="shadow-xl shadow-lime-900 p-3"
          >
            <img className="w-28 rounded-2xl mr-2" src={Map2} alt="map" />
            <div className="flex flex-col">
              <div className="flex ">
                <Avatar
                  sx={{
                    bgcolor: "#477663",
                    width: 56,
                    height: 56,
                    mt: 0.5,
                    mr: 1,
                  }}
                  variant="rounded"
                >
                  <MyLocationIcon
                    sx={{ color: "#2d624b", width: 32, height: 32 }}
                  />
                </Avatar>
                <div>
                  <Typography
                    variant="h6"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    正在{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    进行{" "}
                  </Typography>
                </div>
              </div>
              <div className="grow" />
              <div className="mt-1">
                <Typography variant="subtitle2" color="secondary">
                  纵情山野小分队
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  开始时间：11月17日 8:30{" "}
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  已收集垃圾个数： 14{" "}
                </Typography>
              </div>
            </div>
          </Card>
        </Container>

        <Paper
          elevation={3}
          className="m-4 py-4 shadow-amber-600"
          sx={{ bgcolor: "#e8b57b" }}
        >
          <Typography
            variant="h6"
            color="primary"
            align="center"
            sx={{ letterSpacing: 2, fontWeight: "bold" }}
          >
            你已经捡了
          </Typography>
          <Typography
            variant="h3"
            className="text-white p-3"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            78
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            align="center"
            className="pl-2"
            fontWeight="Bold"
          >
            坚持下去！
          </Typography>
        </Paper>

        <Box className="py-2" sx={{ bgcolor: "#fcf8f4" }}>
          <List sx={{ px: 3 }}>
            <ListItem>
              <img
                src={Papers}
                alt="Icon"
                className="object-contain w-14 mr-2"
              ></img>
              <ListItemText primary="纸巾" />
              <ListItemText primary="14" align="right" className="pr-4" />
            </ListItem>
            <ListItem>
              <img
                src={Bottle}
                alt="Icon"
                className="object-contain w-14 mr-3"
              ></img>
              <ListItemText primary="瓶子" />
              <ListItemText primary="14" align="right" className="pr-4" />
            </ListItem>
            <ListItem>
              <img
                src={Chip}
                alt="Icon"
                className=" object-contain w-14 mr-3 "
              ></img>
              <ListItemText primary="包装袋" />
              <ListItemText primary="14" align="right" className="pr-4" />
            </ListItem>
            <ListItem>
              <img
                src={Pericarp}
                alt="Icon"
                className="object-contain w-14 mr-3"
              ></img>
              <ListItemText primary="果皮" />
              <ListItemText primary="14" align="right" className="pr-4" />
            </ListItem>
            <ListItem>
              <img
                src={Others}
                alt="Icon"
                className="object-contain w-14 mr-3"
              ></img>
              <ListItemText primary="其他" />
              <ListItemText primary="14" align="right" className="pr-4" />
            </ListItem>
          </List>
        </Box>

        <Box className="py-7 mt-4" sx={{ bgcolor: "#bdd0c9" }}>
          <Typography
            variant="h6"
            className="p-4 pl-5"
            sx={{ fontWeight: "bold" }}
            color="primary"
          >
            最新成果
          </Typography>
          <img src={Map1} alt="map" className="px-5"></img>
          <Box className="mx-3 pt-5">
            <Box className="flex mx-5 m-3">
              <Typography variant="subtitle1">收集垃圾数量：</Typography>
              <Box className="grow" />
              <Typography variant="subtitle1" sx={{ color: "#f3852a" }}>
                23
              </Typography>
            </Box>
            <Box className="flex mx-5 my-3 pt-1">
              <Typography variant="subtitle1">活动时长：</Typography>
              <Box className="grow" />
              <Typography variant="subtitle1" sx={{ color: "#f3852a" }}>
                1：35：02
              </Typography>
            </Box>

            <Box className="flex ml-5 my-3">
              <Typography variant="subtitle1" sx={{ pt: 1 }}>
                获得奖励：
              </Typography>
              <Box className="grow" />
              <Typography className="pt-3 pr-1" sx={{ color: "#f3852a" }}>
                23
              </Typography>
              <img
                src={Leaf}
                alt="Icon"
                className="object-contain w-12 pr-1"
              ></img>
            </Box>
          </Box>
        </Box>

        <Box className="p-5 pt-8">
          <Typography
            variant="h6"
            color="primary"
            className="p-2"
            sx={{ fontWeight: "bold" }}
          >
            我的花园
          </Typography>
          <div className="flex">
            <div className="w-1/6" />
            <img src={Garden} className="w-2/3 pt-4" alt="garden" />
          </div>
        </Box>

        <Divider variant="middle" />

        <Box className="pt-8 px-5 pb-2 flex">
          <Typography
            variant="h6"
            color="primary"
            className="p-2"
            sx={{ fontWeight: "bold" }}
          >
            奖章
          </Typography>
          <Box className="grow" />
          <Typography
            variant="subtitle2"
            className="p-2 pt-4"
            sx={{ color: "#f3852a" }}
          >
            显示更多
          </Typography>
        </Box>
        <ImageList className="mb-24 mx-6" cols={3} gap={17}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                className="p-3 pb-0"
              />
              <ImageListItemBar
                title={item.title}
                position="below"
                align="center"
                className="tracking-tight"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </React.Fragment>
  );
}

export default Home;
