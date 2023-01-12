import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import Details from "./details";
import lizz from "../static/lizz.png";
export default function ActionAreaCard() {
  // const summary =
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica";
  return (
    <div>
      <Card sx={{  maxWidth: 345 ,p:1}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            //   image='../static/lizz.png'
            image={lizz}
            alt="monitor"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sign Up
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* <Details details= {summary} />             */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
