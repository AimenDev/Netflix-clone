import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/my-list" element={<UserLiked />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
