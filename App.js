import React, { useEffect, useState } from "react";
import axios from "axios";

import PieceOfArt from "./PieceOfArt";

function App() {
     const [art, setArt] = useState([]);
    useEffect(() => {
    const apiKey = `LvqwJKjT`;
    axios({
        method: "GET",
        url: `https://www.rijksmuseum.nl/api/en/collection`,
        dataResponse: "json",
        params: {
        key: apiKey,
        format: "json",
        hasImage: true,
        },
    }).then((response) => {
        // update 'art' state with response from API:
        setArt(response.data.artObjects);
    });
    }, []);
  return (
    <div className="app">
      <h1>View Dutch Art</h1>
      <section>
        {art.map((artwork) => {
          return (
            <PieceOfArt
              key={artwork.id}
              alt={artwork.title}
              title={artwork.longTitle}
              imagePath={artwork.webImage.url}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;