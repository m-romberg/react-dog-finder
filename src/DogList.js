
/**
 * DogList
 *
 * Shows image and name for list of dogs in root
 *
 * props:
 * - dogs: [{name, age, src, facts},...]
 *
 * RoutesList => DogList
 */


function DogList({ dogs }) {

    console.log('in DogList: ');

    return (
        <div className="DogList">
            {dogs.map((d, i) => (
                <div key={i}>
                    <h1> {d.name} </h1>
                    <img src={`/${d.src}.jpg`} alt={d.name}></img>
                </div>
            ))}
        </div>
    );
}

export default DogList;