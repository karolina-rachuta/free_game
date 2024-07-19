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
    <div
      style={{
        padding: "50px",
        maxWidth: "600px",
        width: "100%",
        margin: "20px auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
        position: 'relative'

      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "black",
          fontWeight: "bold",
          backgroundColor: 'blueviolet',
          color: 'white',
          borderRadius: "10px",
          maxWidth: '50px',
          textAlign: 'center',
          position: 'absolute',
          top: '10px',
          left: '60px',
          textTransform: 'uppercase'
        }}
      >
        Back
      </Link>
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "auto",
          padding: "10px",
        }}
      >
        <img style={{ width: "100%" }} src={thumbnail} alt="Game Cover" />
        <a
          href={game_url}
          style={{ textDecoration: "none", color: "black" }}
          target="_blank"
          rel="noreferrer"
        >
          <h1>
            {title} <span style={{ fontSize: "10px" }}>{status}</span>
          </h1>
        </a>
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>{platform}</p>
        <p style={{ fontSize: "14px" }}>
          <b>Publisher: </b>
          {publisher}, <b>Release date:</b> {release_date}
        </p>
        <p style={{ width: "100%", textAlign: "justify" }}>{description}</p>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {screenshots &&
            screenshots.map(({ id, image }) => (
              <img
                style={{ width: "100%", maxWidth: "280px", padding: "10px" }}
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
