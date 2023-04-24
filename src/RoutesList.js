import { Routes, Route, Navigate } from "react-router-dom";
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
    <div className="RoutesList">
      <Routes>
        <Route element={<DogList />} path="/" />
        <Route element={<DogDetails />} path="/dogs/:name" />
        <Route element={<Navigate to="/dogs" />} path="*" />
      </Routes>
    </div>
  );
}

export default RoutesList;