import { useParams } from "react-router-dom";

/**
 * DogDetails
 *
 * Displays details for specific dog
 *
 * props
 * - dogs: [{name, age, src, facts},...]
 *
 * RoutesList => DogDetails
 */

function DogDetails({ dogs }) {
  console.log("in DogDetails");

  const { name } = useParams();
  const dog = dogs.find(d => d.name === name);
  console.log(dogs);
  console.log(dog);

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.src}></img>
      <p><b>age: {dog.age} </b></p>
      {dog.facts.map((f, i) => <p key={i}>{f}</p>)}
    </div>
  );

}

export default DogDetails;