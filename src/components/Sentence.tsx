import "./Sentence.css";

const Sentence = ({ sentence }: any) => {
  return (
    <div>
      <div className="sentence-text-container">
        <span className="sentence-text">
          {sentence.map((card: any) => card.label).join(" ")}
        </span>
      </div>
    </div>
  );
};

export default Sentence;
