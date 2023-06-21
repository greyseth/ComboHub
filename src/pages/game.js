import "./styles.css";
import "./game.css";

import { useState, useEffect } from "react";

const testComboData = [
  {
    id: 0,
    poster: 0,
    game: 2,
    title: "BnB Akuma combo",
    desc: "works somehow",
    content: "9 > HK > 5 HP > 2 1 4 LK > 6 2 3 HP",
    character: "Akuma",
    likes: 2,
    comments: [],
  },
  {
    id: 1,
    poster: 0,
    game: 2,
    title: "BnB Ryu combo",
    desc: "Very basic",
    content: "9 > HK > 2 MP > 2 3 6 HP",
    character: "Ryu",
    likes: 5,
    comments: [],
  },
  {
    id: 2,
    poster: 0,
    game: 1,
    title: "Good Bryan Combo",
    desc: "Decent damage with low starter",
    content: "D+F LK > (while rising) LK RK > RK LK RK > (dash) > D LK RP",
    character: "Bryan Fury",
    likes: 1,
    comments: [],
  },
  {
    id: 3,
    poster: 0,
    game: 0,
    title: "Short Kabal Combo",
    desc: "Short combo for someone who is super fast",
    content: "B F HK > HK LK HP HP D+HP > Fjump > HK > B B HK",
    character: "Kabal",
    likes: 4,
    comments: [],
  },
  {
    id: 4,
    poster: 0,
    game: 1,
    title: "Good King Combo",
    desc: "Good damage, but slow starter",
    content: "F+RP D+LP RP > B+LP RP > D+F+RK LK > F F F RP+RK",
    character: "King",
    likes: 3,
    comments: [],
  },
  {
    id: 5,
    poster: 0,
    game: 1,
    title: "Untested Jin combo",
    desc: "Decent damage with uppercut starter",
    content:
      "F N D D+F LP > LP RP > LP RP RK > (dash) > B+LP RP > D+B+RP RP LK",
    character: "Jin Kazama",
    likes: 1,
    comments: [],
  },
];

function GamePage({ viewGame, setViewGame }) {
  const [combos, setCombos] = useState(testComboData);
  const [viewCombo, setViewCombo] = useState(undefined);

  return (
    <main>
      {viewCombo ? (
        <ComboWindow
          viewGame={viewGame}
          viewCombo={viewCombo}
          setViewCombo={setViewCombo}
        />
      ) : null}

      <section class="game-details">
        <img />
        <div>
          <h3>{viewGame.title}</h3>
          <p>Released {viewGame.relDate}</p>
          <p>Developed by {viewGame.developer}</p>
          <p>Published by {viewGame.publisher}</p>
        </div>
        <textarea>{viewGame.desc}</textarea>
      </section>
      <section class="combos">
        <div class="top-buttons">
          <div>
            <select value="liked">
              <option value="liked">Sort by most liked 👍</option>
              <option value="newest">Sort by newest 🕒</option>
            </select>
            <button>Edit details</button>
            <select value="all">
              <option value="all">All characters</option>
              {viewGame.chars.map((char) => (
                <option value={char}>{char}</option>
              ))}
            </select>
          </div>
          <button>+ Add combo</button>
        </div>
        <ul class="combo-list">
          {combos
            .filter((f) => f.game === viewGame.id)
            .map((combo) => (
              <li key={combo.id} onClick={() => setViewCombo(combo)}>
                <p>
                  Posted by <span>N/A</span> for character{" "}
                  <span>{combo.character}</span>
                </p>
                <p>{combo.content}</p>
                <p>{combo.title}</p>
                <div>
                  <button>👍 {combo.likes}</button>
                  <button>🗨️ {combo.comments.length}</button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

function ComboWindow({ viewGame, viewCombo, setViewCombo }) {
  return (
    <div class="combo-window">
      <button class="window-close" onClick={() => setViewCombo(undefined)}>
        Close window
      </button>
      <div class="combo-container">
        <h1>{viewCombo.content}</h1>
      </div>
      <div class="combo-footer">
        <div class="combo-details">
          <p>{viewCombo.title}</p>
          <p>
            {viewCombo.character} ({viewGame.title})
          </p>
          <textarea readonly>{viewCombo.desc}</textarea>
          <p>Posted DD/MM/YYYY</p>
        </div>
        <div>
          <ul class="comments-list">
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                architecto adipisci cumque laudantium facere sequi!
              </p>
              <p>Commenter name - DD/MM/YYYY</p>
            </li>
          </ul>
          <input placeholder="Add a comment" />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
