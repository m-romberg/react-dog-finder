import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/**
 * Routes
 *
 * Returns list of all routes
 *
 * App => RoutesList => {DogList, DogDetails, Navigate}
 */

function RoutesList({data}) {
  console.log("in RoutesList")

  return (
    <div className="RoutesList">
      <Routes>
        <Route element={<DogList dogs={data} />} path="/" />
        <Route element={<DogDetails dogs={data} />} path="/dogs/:name" />
        <Route element={<Navigate to="/dogs" />} path="/*" />
      </Routes>
    </div>
  );
}

export default RoutesList;