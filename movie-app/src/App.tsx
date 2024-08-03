import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MovieProvider } from "./context/movie-context";

const App = () => {
  return (
    <div>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </div>
  );
};

export default App;
