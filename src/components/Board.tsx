import Card from "./Card";
import "./Board.css";

const Board = ({ cards, onCardSelect }: any) => {
  return (
    <div className="board-container">
      <div className="board-grid">
        {cards.map((item: any) => (
          <Card key={item.id} item={item} onCardSelect={onCardSelect} />
        ))}
      </div>
    </div>
  );
};

export default Board;
