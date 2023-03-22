import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Importing CourseList
import CourseList from "./CourseList";

// Card import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Importing Png
import programming from "../images/programming.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const courses = [
  {
    id: 1,
    language: "Python",
    description:
      "Python has a simple syntax similar to the English language. Python has syntax that allows developers to write",
  },
  {
    id: 2,
    language: "Javascript",
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. ",
  },
  {
    id: 3,
    language: "C",
    description:
      "What is C? C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.",
  },
  {
    id: 4,
    language: "C++",
    description:
      "C++ is one of the world s most popular programming languages. C++ can be found in todays operating systems",
  },
  {
    id: 5,
    language: "React js",
    description:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs ",
  },
  {
    id: 6,
    language: "Node js",
    description:
      "Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes .",
  },
  {
    id: 7,
    language: "Mongo DB",
    description:
      "Build Your Next Project on MongoDB Atlas, the Cloud-Native Document Database as a Service.For better Performance. ",
  },
  {
    id: 8,
    language: "Html Css",
    description:
      "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies",
  },
];

const AllCourses = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "100px",marginBottom:'100px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item
            style={{ backgroundColor: "rgba(54,54,54,255)", color: "white" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={5} md={4}>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{
                    backgroundColor: "rgba(54,54,54,255)",
                    color: "white",
                    boxShadow: "none",
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ textAlign: "start" }}
                    >
                      EdWisely Courses for <br />
                      All Type of Programming
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      style={{ textAlign: "start" }}
                    >
                      Welcome to our programming course! In today's world,
                      technology has become an essential part of our daily
                      lives, and programming is at the core of this digital
                      revolution.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={2} md={4}></Grid>
              <Grid item xs={5} md={4}>
                <Card
                  sx={{ maxWidth: 200 }}
                  style={{
                    backgroundColor: "rgba(54,54,54,255)",
                    color: "white",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia sx={{ height: 200 }} image={programming} />
                </Card>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={3}>
            {courses.map((data) => (
              <CourseList key={data.id} data={data} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AllCourses;
