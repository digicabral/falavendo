import { useState } from "react";
import MainScreen from "./screens/MainScreen";
import PhrasesScreen from "./screens/PhrasesScreen";

type Screen = "main" | "phrases";

function App() {
  const [screen, setScreen] = useState<Screen>("main");

  if (screen === "phrases") {
    return <PhrasesScreen onBack={() => setScreen("main")} />;
  }

  return <MainScreen onGoToPhrases={() => setScreen("phrases")} />;
}

export default App;
