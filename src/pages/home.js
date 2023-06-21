import { useState, useEffect } from "react";

import "./styles.css";
import "./home.css";

function HomePage({ games, setGames, setViewGame }) {
  return (
    <main>
      <section className="top-section">
        <div className="search-bar">
          <input type="text" placeholder="Search query..." />
          <img src={require("../img/search.svg").default} />
        </div>
        <div className="search-buttons">
          <button>Game Search</button>
          <button>User Search</button>
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

export default HomePage;
