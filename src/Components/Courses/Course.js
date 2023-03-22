import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Card import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CourseDetail from "./CourseDetail";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import ReactPlayer from "react-player";
import videoList from "../../data";
import CoursePrice from "./CoursePrice";
import { Typography } from "@mui/material";

const Course = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // For Video Player
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const currentVideo = videoList.flatMap((section) => section.videos)[
    currentVideoIndex
  ];

  const handleVideoEnded = () => {
    if (
      currentVideoIndex <
      videoList.flatMap((section) => section.videos).length - 1
    ) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {/* Video Player */}
              <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
                <CardContent>
                  <div>
                    <ReactPlayer
                      url={currentVideo.src}
                      onEnded={handleVideoEnded}
                      controls
                    />
                    <Typography
                      gutterBottom
                      component="div"
                      variant="h5"
                      style={{ textAlign: "start", marginTop: "30px" }}
                    >
                      {currentVideo.title}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* List */}
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Box
                    sx={{
                      width: "100%",
                      height: 450,
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 400,
                        bgcolor: "background.paper",
                        position: "relative",
                        overflow: "auto",
                        maxHeight: 450,
                        "& ul": { padding: 0 },
                      }}
                      subheader={<li />}
                    >
                      {videoList.map((section) => (
                        <List
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                          }}
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                        >
                          <ListItemButton
                            onClick={handleClick}
                            style={{
                              backgroundColor: "#3c98ff",
                              borderRadius: "5px",
                            }}
                          >
                            <ListItemText style={{ color: "white" }}>
                              {section.avatar}

                              {section.name}
                            </ListItemText>
                            {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {section.videos.map((video, index) => (
                                <>
                                  <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText
                                      key={video.src}
                                      primary={video.title}
                                      onClick={() =>
                                        setCurrentVideoIndex(index)
                                      }
                                    />
                                  </ListItemButton>
                                  <ListItemButton
                                    sx={{ pl: 4 }}
                                    style={{
                                      backgroundColor: "#f5f5f5",
                                      borderRadius: "5px",
                                    }}
                                  >
                                    <a
                                      href={video.articleUrl}
                                      style={{
                                        textDecoration: "none",
                                        color: "black",
                                      }}
                                    >
                                      <ListItemText
                                        key={video.title}
                                        primary={video.articleTitle}
                                      />
                                    </a>
                                  </ListItemButton>
                                </>
                              ))}
                            </List>
                          </Collapse>
                        </List>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <CourseDetail />
        </Grid>
        <Grid item xs={12} md={4}>
          <CoursePrice />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Course;
