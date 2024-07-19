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
    <Link style={{textDecoration:"none", color: 'black'}} 
    to={`/games/${id}`}>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "4px",
          margin: "10px",
          padding: "10px",
          maxWidth: "300px",
          maxHeight: "400px",
          height: '100%'
        }}
      >
        <img
          style={{ width: "100%", borderRadius: "4px" }}
          src={thumbnail}
          alt="Game picture"
        />
        <h2>{title}</h2>
        <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Genre: {genre}
        </p>
        <p>{short_description}</p>
        <h6>{platform}</h6>
      </div>
    </Link>
  );
}

export default GameCard;
