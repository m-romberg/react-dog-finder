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
  console.log("names", names);
  return (
  <nav className="Nav">
    {names.map((n,i) => <p key={i}><Link to={`dogs/${n}`} key={i}>{n}</Link></p>)}
  </nav>
  )
}
//
export default Nav;