import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
const DOGS_API_URL = "http://localhost:5001/dogs";


/**
 * App
 *
 * Renders nav bar and routes list
 * calls axios to get dogs
 *
 * State:
 *  -data: [{name, age, src, facts},...]
 *
 * App => {Nav, RoutesList}
 */
function App() {
  console.log("in App");
  //TODO: rename to dogs
  const [data, setData] = useState([]);


  async function getDogs() {
    const result = await axios.get(DOGS_API_URL);
    console.log('result:; ', result);
    setData(result.data);
  }
  //what happens if the axios request sends back... no dogs? could add piece of state for example "isEditing"
  if (data.length === 0) {
    getDogs();
    return (
      <h1 style={{ textAlign: "center" }}>
        I AM GETTING YOU DOGGGOOOOOOSOSSSSSSSSS
      </h1>);
  }

  return (
    <div className="App">
      <h1>Welcome to Dog Finder!</h1>
      <BrowserRouter>
        <Nav data={data} />
        <RoutesList data={data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
