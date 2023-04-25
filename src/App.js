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
 * State:
 *  -names
 *
 * App => {Nav, RoutesList}
 */
function App() {
  console.log("in App");

  const [data, setData] = useState([]);


  async function getDogs () {
    const result = await axios.get(DOGS_API_URL);
    console.log('result:; ' ,result);
    setData(result.data);
  }

  if (data.length=== 0) {
    getDogs();
  }

  return (
    <div className="App">
      <h1>Welcome to Dog Finder!</h1>
      <BrowserRouter>
        <Nav data={data}/>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
