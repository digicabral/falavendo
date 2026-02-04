import "./Card.css";

const Card = ({ item, onCardSelect }: any) => {
  return (
    <button
      className="card-container"
      onClick={() => onCardSelect(item)}
      type="button"
    >
      <img src={item.image} alt={item.label} className="card-image" />
      <span className="card-label">{item.label}</span>
    </button>
  );
};

export default Card;
