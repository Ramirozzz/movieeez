import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalFetching from "./components/Loading/GlobalFetching";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";
import SearchPage from "./pages/SearchPage";
import { useTheme } from "./hooks/useTheme";

import "./App.css";

function App() {
  const { dark } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("navy", !dark);
  }, [dark]);

  return (
    <>
      <GlobalFetching />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<ActorDetailsPage />} />
          <Route path="/movies" element={<MoviesByGenrePage />} />
          <Route
            path="/movies/genre/:genreId"
            element={<MoviesByGenrePage />}
          />
          <Route path="/Search" element={<SearchPage />} />
        </Route>
      </Routes>
      {/* <ReactQueryDevtools /> */}
    </>
  );
}

export default App;
