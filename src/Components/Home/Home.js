import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Importing the react router
import { NavLink, Outlet } from "react-router-dom";

// Importing Button
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AlbumIcon from "@mui/icons-material/Album";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

// Importing Image

import teacher from "../images/teacher.jpg";
import school from "../images/school.png";
import course from "../images/course.png";

// Card Import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Card
              sx={{ maxWidth: 500 }}
              style={{
                marginLeft: "50px",

                boxShadow: "none",
              }}
            >
              <CardMedia sx={{ height: 300 }} image={school} />
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card
              sx={{ minWidth: 275, maxWidth: 590 }}
              style={{
                textAlign: "start",
                boxShadow: "none",
                color: "#00203f",
              }}
            >
              <CardContent>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "rgba(255,161,148,255)",
                    marginLeft: "50px",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  Never Stop Learning
                </Typography>
                <Typography variant="h5" style={{ marginLeft: "50px" }}>
                  Grow up Your Skills by online courses with EdWisely
                </Typography>
                <Typography variant="subtitle1" style={{ marginLeft: "50px" }}>
                  <br />
                  Our website features a diverse range of subjects <br />
                  From math and science to history and literature
                  <br /> As well as practical skills such as coding and language
                  learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card
              sx={{ maxWidth: 900 }}
              style={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "30px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "none",
              }}
            >
              <CardMedia
                sx={{ height: 400 }}
                image={teacher}
                style={{ margin: "20px", borderRadius: "10px" }}
              />

              <Button
                variant="contained"
                style={{
                  margin: "10px",
                  backgroundColor: "rgba(255,161,148,255)",
                }}
              >
                <VolumeUpIcon style={{ marginRight: "5px" }} /> Audio classes
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "rgba(255,161,148,255)" }}
              >
                <LiveTvIcon style={{ marginRight: "5px" }} />
                Live Classes
              </Button>
              <Button
                variant="contained"
                style={{
                  margin: "10px",
                  backgroundColor: "rgba(255,161,148,255)",
                }}
              >
                <AlbumIcon style={{ marginRight: "5px" }} />
                Recorded Classes
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card
              sx={{ maxWidth: 500 }}
              style={{
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "30px",
                boxShadow: "none",
              }}
            >
              <CardMedia sx={{ height: 400 }} image={course} />

              <Button
                variant="contained"
                style={{
                  marginTop: "20px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,161,148,255)",
                  marginBottom: "10px",
                }}
              >
                <LibraryBooksIcon style={{ marginRight: "5px" }} />

                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                    textDecoration: "none",
                  })}
                  to="/courses"
                >
                  Visit Courses
                </NavLink>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Outlet />
    </>
  );
};
export default Home;
