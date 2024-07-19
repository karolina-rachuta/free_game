import useFetch from "../hooks/useFetch";

function GameList() {
  const {games} = useFetch();

  return (

      <pre>{JSON.stringify(games, null, 2)}</pre>
    
  );
}

export default GameList;
