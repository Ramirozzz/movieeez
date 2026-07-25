import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalFetching from "./components/Loading/GlobalFetching";
import "./App.css";

function App() {
  return (
    <>
      <GlobalFetching />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<ActorDetailsPage />} />
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
