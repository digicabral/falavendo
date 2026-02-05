import TtsService from "../services/TtsService";
import "./PhrasesScreen.css";

const phrases = [
  "Olá, tudo bem?",
  "Preciso de ajuda, por favor.",
  "Estou com fome.",
  "Estou com sede.",
  "Onde fica o banheiro?",
  "Obrigada!",
];

const PhrasesScreen = ({ onBack }: { onBack: () => void }) => {
  const handlePhraseSelect = (phrase: string) => {
    TtsService.speak(phrase);
  };

  return (
    <div className="phrases-container">
      <div className="phrases-header">
        <button className="back-button" onClick={onBack}>
          Voltar
        </button>
        <h1 className="phrases-title">Frases Prontas</h1>
      </div>

      <div className="phrases-list">
        {phrases.map((item, index) => (
          <button
            key={index}
            className="phrase-item"
            onClick={() => handlePhraseSelect(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhrasesScreen;
