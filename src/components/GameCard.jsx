// src/components/GameCard.jsx

export default function GameCard({ name, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="game-card"
    >
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>

      <div className="game-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
