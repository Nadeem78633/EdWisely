import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const CourseDetail = () => {
  return (
    <Card
      sx={{ maxWidth: 800 }}
      style={{ textAlign: "start", marginTop: "40px", marginBottom: "40px" ,boxShadow:'none'}}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Course Details
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A Python course is an excellent way for beginners to learn the basics
          of programming and for experienced developers to enhance their skills.
          In a Python course, learners will be introduced to the language's
          syntax, data structures, functions, control structures, and
          object-oriented programming concepts.
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ marginTop: "20px" }}
        >
          Course Content
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The course will cover various topics such as data analysis, web
          development, machine learning, and artificial intelligence using
          Python libraries like NumPy, Pandas, Flask, Django, TensorFlow, and
          PyTorch.
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ marginTop: "20px", color: "#3c98ff" }}
        >
          Who is this course For
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <ul>
            <li>
              In this day and age where technology is constantly advancing.
            </li>
            <li>
              {" "}
              Python has become a valuable asset for professionals in various
              fields.
            </li>
            <li>
              By learning Python, individuals can boost their career prospects
            </li>
            <li>
              Stay ahead in the job market. A Python course is an excellent
              investment.
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CourseDetail;
