import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { Card, CardContent } from "@mui/material";

interface MovieTrendCardProps {
  movie: MovieDataType;
}

const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext);
  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        image
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
