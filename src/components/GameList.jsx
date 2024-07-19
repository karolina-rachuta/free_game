import { useState } from "react";
import useFetch from "../hooks/useFetch";
import GameCard from "../components/GameCard"

function GameList() {
  const [filter, setFilter] = useState({
    platform: "browser",
    sortBy: "relevance",
  });

  const { games } = useFetch(filter);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', width:'100%'}}>
      {games.map(({ id, title, thumbnail, short_description, platform, genre }) => (
        <GameCard key={id} title={title} thumbnail={thumbnail} short_description={short_description} platform={platform} genre={genre}/>
      ))}
    </div>
  );
}

export default GameList;
