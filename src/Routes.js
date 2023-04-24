import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/**
 * Routes
 *
 * Returns list of all routes
 *
 * App => RoutesList
 */

function RoutesList() {

  return (
    <div className="Routes">
      <Routes>
        <Route element={<DogList />} path="/" />
        <Route element={<DogDetails />} path="/dogs/:name" />
      </Routes>
    </div>
  );
}

export default RoutesList;