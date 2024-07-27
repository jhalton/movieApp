import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const navLinks = [
  {
    name: "Home",
    icon: "Icon",
    link: "/",
  },
  {
    name: "Movies",
    icon: "MovieIcon",
    link: "/movies",
  },
  {
    name: "Tv Series",
    icon: "TvSeriesIcon",
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: "BookmarkIcon",
    link: "/bookmarks",
  },
];

const Sidebar = () => {
  const pathName = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    ></Box>
  );
};

export default Sidebar;
