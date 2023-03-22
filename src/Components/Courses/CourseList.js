import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const CourseList = ({ data }) => {
  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {data.language}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {data.description}
          </Typography>
          <NavLink
           to={`/course/${data.id}`}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "red" : "black",
              textDecoration: "none",
            })}
          >
            <Button
              style={{ backgroundColor: "#beefff", color: "black" }}
              variant="contained"
            >
              Explore
            </Button>
          </NavLink>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CourseList;
