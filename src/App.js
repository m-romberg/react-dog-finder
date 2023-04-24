import './App.css';
import RoutesList from './Routes';
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom';


/**
 * App
 *
 * App => {Nav, RoutesList}
 */
function App() {
  return (
    <div className="App">
      <h1>Welcome to Dog Finder!</h1>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
