import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";


const CoursePrice = () => {
  return (
    <>
      <Card
        sx={{ minWidth: 275 }}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <CardContent>
          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Price
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{
              marginLeft: "200px",
              fontWeight: "bold",
              color: "rgba(255,161,148,255)",
            }}
          >
            $ 49.00
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Instructor
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ marginLeft: "200px", fontWeight: "bold" }}
          >
            <u>Mohd Nadeem</u>
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Ratings
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              style={{ marginLeft: "140px" }}
            />
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Duration
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold", marginLeft: "200px" }}
          >
            10 Days
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Lessons
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold", marginLeft: "200px" }}
          >
            10
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Quizzes
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold", marginLeft: "200px" }}
          >
            5
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Certificate
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold", marginLeft: "200px" }}
          >
            Yes
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Language
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold", marginLeft: "200px" }}
          >
            English
          </Typography>

          <div style={{ float: "left", display: "inline" }}>
            <Typography variant="subtitle1" gutterBottom>
              Access
            </Typography>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold", marginLeft: "200px" }}
          >
            Lifetime
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        style={{
          marginLeft: "100px",
          marginBottom: "100px",
          backgroundColor: "rgba(255,161,148,255)",
        }}
      >
        Purchase Course
      </Button>
    </>
  );
};
export default CoursePrice;
