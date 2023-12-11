import "./App.css";
import MoviesList from "./components/MovieList";
import ComponentNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetail from "./pages/MoviesDetail";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:imdbID' element={<MoviesDetail />} />
      {/* <Movies/> */}
      {/* <MoviesDetail /> */}
    </Routes>
  );
}

export default App;