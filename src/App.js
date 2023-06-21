import { useState, useEffect } from "react";

import HomePage from "./pages/home";
import GamePage from "./pages/game";

const testGameData = [
  {
    id: 0,
    title: "Mortal Kombat",
    desc: "FATALITY BRUTALITY ANIMALITY QUITALITY FRIENDSHIP",
    img: "",
    developer: "Midway",
    publisher: "Midway",
    relDate: "21/12/1994",
    chars: ["Scorpion", "Sub-Zero", "Kabal", "Raiden"],
    combos: [],
  },
  {
    id: 1,
    title: "Tekken",
    desc: "LP RP LK RK",
    img: "",
    developer: "Namco",
    publisher: "Bandai Namco",
    relDate: "18/10/1996",
    chars: ["Jin Kazama", "Kazuya Mishima", "Bryan Fury", "King"],
    combos: [],
  },
  {
    id: 2,
    title: "Street Fighter",
    desc: "Jumping high kick to crouching mid punch to down forward punch",
    img: "",
    developer: "Capcom",
    publisher: "Capcom",
    relDate: "21/12/1992",
    chars: ["Ryu", "Ken", "Akuma", "M. Bison"],
    combos: [],
  },
];

function App() {
  const [viewGame, setViewGame] = useState(undefined);
  const [viewProfile, setViewProfile] = useState(undefined);
  const [gameForm, setGameForm] = useState(undefined);
  const [comboForm, setComboForm] = useState(undefined);
  const [games, setGames] = useState(testGameData);

  // return <>{!viewGame ? <HomePage /> : null}</>;
  return (
    <>
      <header>
        <h1 onClick={() => setViewGame(undefined)}>ComboHub</h1>
        <div>
          <p>Not logged in</p>
          <img src={require("./img/guest.svg").default} />
        </div>
      </header>

      {viewGame ? (
        <GamePage viewGame={viewGame} setViewGame={setViewGame} />
      ) : (
        <HomePage games={games} setGames={setGames} setViewGame={setViewGame} />
      )}
    </>
  );
}

export default App;
