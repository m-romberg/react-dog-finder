import { Link } from "react-router-dom";
/**
 * Nav
 *
 * props:
 * - data: [{name, age, src, facts},...]
 *
 * App => Nav => Link
 */

function Nav({ data }) {
  console.log("in Nav");
  console.log("data:", data);

  //dont need additional loop... move down
  const names = data.map(d => d.name);
  console.log("names", names);
  //NOTE: do not use capital whiskey
  return (
    <nav className="Nav">
      {names.map(
        (n, i) =>
        (<button key={i}><Link to={`dogs/${n}`} key={i}>{n}</Link></button>))}
    </nav>
  );
}
//
export default Nav;