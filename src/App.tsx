import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import PhrasesScreen from "./screens/PhrasesScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/phrases" element={<PhrasesScreen />} />
    </Routes>
  );
}

export default App;
