import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";

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
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            MovieApp
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
