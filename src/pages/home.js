import { useState, useEffect, useRef } from "react";

import "./styles.css";
import "./home.css";

function HomePage({ games, setGames, setViewGame }) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <main>
      {openForm && (
        <GameForm games={games} setGames={setGames} setOpenForm={setOpenForm} />
      )}

      <section className="top-section">
        <div className="search-bar">
          <input type="text" placeholder="Search query..." />
          <img src={require("../img/search.svg").default} />
        </div>
        <div className="search-buttons">
          <button>Game Search</button>
          <button>User Search</button>
          <button
            style={{ backgroundColor: "lightgreen", color: "black" }}
            onClick={() => setOpenForm(true)}
          >
            + Add Game
          </button>
        </div>
      </section>

      <section className="lower-section">
        <h2>Recently updated games</h2>
        <ul className="recent">
          {games.map((game) => (
            <li key={game.id.toString()} onClick={() => setViewGame(game)}>
              <div>
                <img />
                <p className="game-title">{game.title}</p>
              </div>
              <p className="game-desc">{game.desc}</p>
            </li>
          ))}
        </ul>

        <div className="page-controls">
          <p>PREV PAGE</p>
          <p>Showing 50 of N/A</p>
          <p>NEXT PAGE</p>
        </div>
      </section>
    </main>
  );
}

function GameForm({ games, setGames, setOpenForm }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [chars, setChars] = useState([]);
  const [relDate, setRelDate] = useState("");

  function addChar() {
    const tempChars = chars.splice();
    tempChars.push("");
    console.log("Adding\n" + tempChars);
    setChars(() => tempChars);
  }

  function editChar(targetIndex, value) {
    console.log(`editing ${targetIndex}`);
    const tempChars = chars.splice();
    tempChars[targetIndex] = value;
    console.log("Editing\n" + tempChars);
    setChars(() => tempChars);
  }

  function removeChar(targetIndex) {
    console.log(`removing ${targetIndex}`);
    const tempChars = chars;
    tempChars.splice(targetIndex, 1);
    console.log("Removing\n" + tempChars);
    setChars(() => tempChars);
  }

  async function handleUpload() {
    if (!title || !desc || !developer || !publisher || !chars || !relDate) {
      alert("All fields must have a value!");
      return;
    }
  }

  useEffect(() => {
    let timeout;
    const inputHandler = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(element.value);
      }, 1000);
    };

    const inputRef = useRef(null);
    const element = inputRef.current;
    element.addEventListener("keyup", inputHandler);

    return () => {
      element.addEventListener("keyup", inputHandler);
    };
  }, []);

  return (
    <div className="game-form">
      <div>
        <h2>Add a game</h2>
        <input
          type="text"
          placeholder="Title"
          id="title-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Game description"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Developer"
          id="title-input"
          onChange={(e) => setDeveloper(e.target.value)}
        />
        <input
          type="text"
          placeholder="Publisher"
          id="title-input"
          onChange={(e) => setPublisher(e.target.value)}
        />

        <h3>Game Release Date</h3>
        <input type="date" onChange={(e) => setRelDate(e.target.value)} />

        <h3>Game Characters</h3>
        <div className="char-list">
          <ul>
            {chars.map((char, index) => (
              <li key={char}>
                <input
                  type="text"
                  placeholder={`Char ${index}`}
                  onChange={(e) => editChar(index, e.target.value)}
                />
                <button onClick={() => removeChar(index)}>-</button>
              </li>
            ))}
          </ul>
          <button onClick={addChar}>+</button>
        </div>
      </div>
      <div>
        <button onClick={handleUpload}>Add game</button>
        <button onClick={() => setOpenForm(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default HomePage;
