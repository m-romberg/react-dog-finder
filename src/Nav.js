import { Link } from "react-router-dom";
/**
 * Nav
 *
 * props:
 * - names: name of dogs ["Harry",...]
 * App => Nav
 */

function Nav (names) {
  return (
  <div className="Nav">
    {names.map((n,i) => <p><Link to={`/dogs/${n}`} key={i} /></p>)};
  </div>
  );
}

export default Nav;