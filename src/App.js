import { useState, useEffect } from "react";
// import client from "./mongo";

import HomePage from "./pages/home";
import GamePage from "./pages/game";
import AccountPage from "./pages/account";

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

const testAccountData = [
  {
    id: 0,
    username: "Greyseth",
    email: "anargya2gilland@gmail.com",
    password: "p5572gil",
    bio: "I want to kill myself",
    combos: [],
  },
  {
    id: 1,
    username: "Dummy",
    email: "dummy@gmail.com",
    password: "12345",
    bio: "I am a dummy account",
    combos: [],
  },
];

function App() {
  const [viewGame, setViewGame] = useState(undefined);
  const [viewProfile, setViewProfile] = useState(undefined);
  const [gameForm, setGameForm] = useState(undefined);
  const [comboForm, setComboForm] = useState(undefined);
  const [games, setGames] = useState(testGameData);
  const [accounts, setAccounts] = useState(testAccountData);

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
        <GamePage
          accounts={accounts}
          viewGame={viewGame}
          setViewGame={setViewGame}
        />
      ) : viewProfile ? (
        <AccountPage accounts={accounts} setAccounts={setAccounts} />
      ) : (
        <HomePage games={games} setGames={setGames} setViewGame={setViewGame} />
      )}
    </>
  );
}

export default App;
