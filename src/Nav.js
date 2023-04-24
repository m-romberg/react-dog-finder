import { Link } from "react-router-dom";
/**
 * Nav
 *
 * props:
 * - names: name of dogs ["Harry",...]
 * App => Nav
 */

function Nav ({data}) {
  console.log("in Nav");
  console.log("data:", data);

  const names = data.map(d => d.name);

  return (
  <div className="Nav">
    {names.map((n,i) => <p><Link to={`/dogs/${n}`} key={i} /></p>)};
  </div>
  );
}

export default Nav;