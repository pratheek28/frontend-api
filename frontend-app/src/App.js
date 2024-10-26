import react, { useState, useEffect } from 'react';
import Welcome from "./Welcome";
import Barca from './barca.jpeg';
import Gym from './gym.jpeg';

function App() {
  const[dog, setDogData] = useState([]);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(dog => setDogData(dog));
    }, []);

    return (
      <>
      <div>
        <Welcome />
      </div>
      <div style={{display: "rigid"}}>
        <h1>Dogs!</h1>
        {dog.map(post => (
          <div key={post.id}>
            <img src={post.url} width="350" height="250"></img>
          </div>
        ))}
      </div>
      </>
    );
}

export default App;