import { useParams } from "react-router-dom";
/**
 * DogDetails
 *
 * Displays details for specific dog
 *
 * App => DogDetails
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name = name);

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <img src={`../public/${dog.src}.jpg`} alt={dog.src}></img>
      {<ol>
        {dog.facts.map(f => <li>{f}</li>)}
      </ol>}
    </div>
  );

}

export default DogDetails;