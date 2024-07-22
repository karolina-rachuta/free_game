import { Link } from "react-router-dom";

function GameCard({
  id,
  title,
  thumbnail,
  short_description,
  platform,
  genre,
}) {
  return (
    <Link className="link" to={`/games/${id}`}>
      <div className="card-box">
        <img src={thumbnail} alt="Game Cover" />
        <h2>{title}</h2>
        <p className="card-box_text">Genre: {genre}</p>
        <p>{short_description}</p>
        <h6>{platform}</h6>
      </div>
    </Link>
  );
}

export default GameCard;
