import { useState, useEffect } from "react";

import HomePage from "./pages/home";

function App() {
  const [viewGame, setViewGame] = useState(undefined);
  const [viewCombo, setViewCombo] = useState(undefined);
  const [viewProfile, setViewProfile] = useState(undefined);
  const [gameForm, setGameForm] = useState(undefined);
  const [comboForm, setComboForm] = useState(undefined);

  return <>{!viewGame ? <HomePage /> : null}</>;
}

export default App;
