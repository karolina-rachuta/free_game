import { useParams } from "react-router";
import useFetchGame from "../hooks/useFetchGame";
import { Link } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const {
    game: {
      thumbnail,
      title,
      description,
      game_url,
      status,
      platform,
      publisher,
      release_date,
      screenshots,
    },
  } = useFetchGame(id);

  return (
    <div className="game-detail_container">
      <Link to="/" className="back_button">
        Back
      </Link>
      <div className="game-detail_box">
        <img src={thumbnail} alt="Game Cover" />
        <a href={game_url} className="link" target="_blank" rel="noreferrer">
          <h1>
            {title} <span>{status}</span>
          </h1>
        </a>
        <p>
          <b>{platform}</b>
        </p>
        <p>
          <b>Publisher: </b>
          {publisher}, <b>Release date:</b> {release_date}
        </p>
        <p>{description}</p>
        <div className="screenshots-box">
          {screenshots &&
            screenshots.map(({ id, image }) => (
              <img
                key={id}
                src={image}
                alt={image.split("/").slice(-1).join().split(".")[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
