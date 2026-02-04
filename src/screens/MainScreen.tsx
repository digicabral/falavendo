import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Board from "../components/Board";
import Sentence from "../components/Sentence";
import TtsService from "../services/TtsService";
import { categories } from "../cards/cardsdb";

import "./MainScreen.css";

const MainScreen = () => {
  const [sentence, setSentence] = useState<any[]>([]);
  const [selectedParentCard, setSelectedParentCard] = useState<any>(null);
  const navigate = useNavigate();

  const handleParentCardSelect = (card: any) => {
    setSelectedParentCard(card);
  };

  const handleChildCardSelect = (card: any) => {
    setSentence((prev) => [...prev, card]);
    TtsService.speak(card.label);
  };

  const handleSpeakSentence = () => {
    const text = sentence.map((c) => c.label).join(" ");
    if (text) TtsService.speak(text);
  };

  const handleClearSentence = () => {
    setSentence([]);
  };

  return (
    <div className="container">
      {/* TOPO */}
      <div className="topSection">
        <Sentence sentence={sentence} onClear={handleClearSentence} />

        <div className="buttonsContainer">
          <button
            className="actionButton clearButton"
            onClick={handleClearSentence}
          >
            Limpar
          </button>

          <button
            className="actionButton speakButton"
            onClick={handleSpeakSentence}
          >
            Falar
          </button>

          <button
            className="actionButton phrasesButton"
            onClick={() => navigate("/phrases")}
          >
            Frases Prontas
          </button>
        </div>
      </div>

      {/* BASE */}
      <div className="bottomSection">
        <div className="leftPanel">
          <Board
            cards={categories}
            onCardSelect={handleParentCardSelect}
            selectedCard={selectedParentCard}
          />
        </div>

        <div className="rightPanel">
          {selectedParentCard ? (
            <Board
              cards={selectedParentCard.children}
              onCardSelect={handleChildCardSelect}
            />
          ) : (
            <p className="placeholderText">Selecione uma categoria</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
