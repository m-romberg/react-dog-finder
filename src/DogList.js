
/**
 * DogList
 *
 *
 *
 *
 */


function DogList({ dogs }) {

    console.log('in DogList: ');

    return (
        <div className="DogList">
            {dogs.map((d, i) => (
                <div key={i}>
                    <h1> {d.name} </h1>
                    <img src={`/${d.src}.jpg`} alt={d.src}></img>
                </div>
            ))}
        </div>
    );
}

export default DogList;