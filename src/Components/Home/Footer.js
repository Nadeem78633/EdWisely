import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Icons
import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

// Card

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "rgba(255,161,148,255)", marginTop: "20px" }}
    >
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "rgba(255,161,148,255)" }}
      >
        <Grid item xs={12} md={2.4}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "rgba(255,161,148,255)",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                EdWisely
              </Typography>
              <FacebookIcon />
              <TwitterIcon style={{ marginLeft: "10px" }} />
              <InstagramIcon style={{ marginLeft: "10px" }} />
              <EmailIcon style={{ marginLeft: "10px" }} />
              <Typography variant="subtitle1" component="div">
                &copy; 2023 EdWisely
              </Typography>
              <Typography variant="subtitle1" component="div">
                EdWisely is registered
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "rgba(255,161,148,255)",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Courses
              </Typography>
              <Typography variant="subtitle1" component="div">
                Classroom Courses
              </Typography>
              <Typography variant="subtitle1" component="div">
                Virtual Classroom Courses
              </Typography>
              <Typography variant="subtitle1" component="div">
                E-learning Courses
              </Typography>
              <Typography variant="subtitle1" component="div">
                Video Courses
              </Typography>
              <Typography variant="subtitle1" component="div">
                Offline Courses
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "rgba(255,161,148,255)",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Community
              </Typography>

              <Typography variant="subtitle1" component="div">
                Learners
              </Typography>
              <Typography variant="subtitle1" component="div">
                Partners
              </Typography>
              <Typography variant="subtitle1" component="div">
                Developers
              </Typography>
              <Typography variant="subtitle1" component="div">
                Transactions
              </Typography>
              <Typography variant="subtitle1" component="div">
                Blogs
              </Typography>
              <Typography variant="subtitle1" component="div">
                Teaching Center
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "rgba(255,161,148,255)",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Quick Links
              </Typography>

              <Typography variant="subtitle1" component="div">
                Home
              </Typography>
              <Typography variant="subtitle1" component="div">
                Professional Education
              </Typography>
              <Typography variant="subtitle1" component="div">
                Courses
              </Typography>
              <Typography variant="subtitle1" component="div">
                Admission
              </Typography>
              <Typography variant="subtitle1" component="div">
                Testimonial
              </Typography>
              <Typography variant="subtitle1" component="div">
                Programs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2.4}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "rgba(255,161,148,255)",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                More Links
              </Typography>

              <Typography variant="subtitle1" component="div">
                Press
              </Typography>
              <Typography variant="subtitle1" component="div">
                Investors
              </Typography>
              <Typography variant="subtitle1" component="div">
                Terms
              </Typography>
              <Typography variant="subtitle1" component="div">
                Privacy
              </Typography>
              <Typography variant="subtitle1" component="div">
                Help
              </Typography>
              <Typography variant="subtitle1" component="div">
                Contact
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
