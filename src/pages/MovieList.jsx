import { Outlet } from "react-router-dom";
import Card from "../components/Card";

function MovieList() {
  return (
    <div className="app-container">
      <Outlet/>
      <h2 className="text-center mt-3 mb-3 p-5 h1" >Ultime Novità</h2>
      <Card/>
    </div>
  );
}

export default MovieList;
