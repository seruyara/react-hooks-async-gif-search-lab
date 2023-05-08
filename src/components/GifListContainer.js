import { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query = "cats") => {
    const apiKey = "78o6zGWYqUxzV6ZQr1xCAjpmR6elwx9e";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const gifs = data.data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  const handleSearch = (query) => {
    fetchGifs(query);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;