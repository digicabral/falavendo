import "./Card.css";

const Card = ({ item, onCardSelect, isSelected }: any) => {
  const hasImage = Boolean(item.image);

  return (
    <button
      className={`card-container ${isSelected ? "selected" : ""} ${
        !hasImage ? "no-image" : ""
      }`}
      onClick={() => onCardSelect(item)}
      type="button"
    >
      {hasImage && (
        <img src={item.image} alt={item.label} className="card-image" />
      )}

      <span className="card-label">{item.label}</span>
    </button>
  );
};

export default Card;
