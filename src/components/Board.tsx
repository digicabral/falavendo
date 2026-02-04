import Card from "./Card";
import "./Board.css";

const Board = ({ cards, onCardSelect, selectedCard }: any) => {
  return (
    <div className="board-grid">
      {cards.map((item: any) => (
        <Card
          key={item.id}
          item={item}
          onCardSelect={onCardSelect}
          isSelected={selectedCard?.id === item.id}
        />
      ))}
    </div>
  );
};

export default Board;
