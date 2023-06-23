import "./styles.css";
import "./game.css";

import { useState, useEffect, useRef } from "react";

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

const testCommentData = [
  {
    id: 0,
    poster: 0,
    combo: 3,
    content: "AAAAAAAAAAAA",
  },
  {
    id: 1,
    poster: 1,
    combo: 2,
    content: "OOOOOOOOOOOOOOOO",
  },
  {
    id: 2,
    poster: 0,
    combo: 4,
    content: "EEEEEEEEEEEEEEE",
  },
  {
    id: 3,
    poster: 0,
    combo: 5,
    content: "Fuck you and go to hell nerd",
  },
];

function GamePage({ accounts, viewGame }) {
  const [combos, setCombos] = useState(testComboData);
  const [viewCombo, setViewCombo] = useState(undefined);
  const [orderFilter, setOrderFilter] = useState("liked");
  const [charFilter, setCharFilter] = useState("all");
  const [isLoading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <main>
      {openForm ? (
        <ComboForm
          viewGame={viewGame}
          setCombos={setCombos}
          setOpenForm={setOpenForm}
        />
      ) : null}

      {viewCombo ? (
        <ComboWindow
          accounts={accounts}
          viewGame={viewGame}
          viewCombo={viewCombo}
          setViewCombo={setViewCombo}
        />
      ) : null}

      <section className="game-details">
        <img />
        <div>
          <h3>{viewGame.title}</h3>
          <p>Released {viewGame.relDate}</p>
          <p>Developed by {viewGame.developer}</p>
          <p>Published by {viewGame.publisher}</p>
        </div>
        <textarea readOnly value={viewGame.desc}></textarea>
      </section>
      <section className="combos">
        <div className="top-buttons">
          <div>
            <select defaultValue={"liked"}>
              <option key={"liked"} value="liked">
                Sort by most liked 👍
              </option>
              <option key={"newest"} value="newest">
                Sort by newest 🕒
              </option>
            </select>
            <button>Edit details</button>
            <select
              onChange={(e) => setCharFilter(e.target.value)}
              defaultValue={"all"}
            >
              <option key={"all"} value="all">
                All characters
              </option>
              {viewGame.chars.map((char) => (
                <option key={char} value={char}>
                  {char}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => setOpenForm((form) => !form)}>
            + Add combo
          </button>
        </div>
        {(() => {
          if (!isLoading) {
            if (
              charFilter === "all" &&
              combos.filter((f) => f.game === viewGame.id).length <= 0
            ) {
              return (
                <h2 className="game-message">No combos for this game yet!</h2>
              );
            } else if (
              charFilter !== "all" &&
              combos.filter(
                (f) => f.game === viewGame.id && f.character === charFilter
              ).length <= 0
            ) {
              return (
                <h2 className="game-message">
                  No combos for {charFilter} yet!
                </h2>
              );
            }
          } else {
            return <h2 className="game-message">Loading data...</h2>;
          }
        })()}
        <ul className="combo-list">
          {(() => {
            if (charFilter === "all") {
              return combos
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
                ));
            } else {
              return combos
                .filter(
                  (f) => f.game === viewGame.id && f.character === charFilter
                )
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
                ));
            }
          })()}
        </ul>
      </section>
    </main>
  );
}

function ComboWindow({ accounts, viewGame, viewCombo, setViewCombo }) {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(testCommentData);

  const ref = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (event.code === "Enter") {
        setComments((comm) => [
          {
            id: comm.length,
            poster: 0,
            combo: viewCombo.id,
            content: commentInput,
          },
          ...comm,
        ]);
        console.log(comments);

        setCommentInput(() => "");
        element.value = "";
      }
    };

    const element = ref.current;
    element.addEventListener("keydown", handler);

    return () => {
      element.removeEventListener("keydown", handler);
    };
  }, [commentInput, comments]);

  return (
    <div className="combo-window">
      <button className="window-close" onClick={() => setViewCombo(undefined)}>
        Close window
      </button>
      <div className="combo-container">
        <h1>{viewCombo.content}</h1>
      </div>
      <div className="combo-footer">
        <div className="combo-details">
          <p>{viewCombo.title}</p>
          <p>
            {viewCombo.character} ({viewGame.title})
          </p>
          <textarea readOnly value={viewCombo.desc}></textarea>
          <p>Posted DD/MM/YYYY</p>
        </div>
        <div className="combo-comments">
          <ul className="comments-list">
            {comments.filter((f) => f.combo === viewCombo.id).length <= 0 ? (
              <li key={"nocom"} className="no-comments">
                No comments yet!
              </li>
            ) : (
              comments
                .filter((f) => f.combo === viewCombo.id)
                .map((comment) => {
                  return (
                    <li key={comment.id}>
                      <p>{comment.content}</p>
                      <p>
                        {accounts.find((f) => f.id === comment.poster).username}{" "}
                        - DD/MM/YYYY
                      </p>
                    </li>
                  );
                })
            )}
          </ul>
          <input
            onInput={(e) => {
              setCommentInput(e.target.value);
            }}
            ref={ref}
            placeholder="Add a comment"
          />
        </div>
      </div>
    </div>
  );
}

function ComboForm({ viewGame, setCombos, setOpenForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [comboContent, setComboContent] = useState("");
  const [character, setCharacter] = useState("");

  async function uploadHandler() {
    if (!title || !description || !comboContent || !character) {
      alert("All fields must have a value!");
      return;
    }
  }

  return (
    <div className="combo-form">
      <h2>Add your combo</h2>
      <input
        type="text"
        placeholder="Title"
        id="title-input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Combo content"
        id="content-input"
        onChange={(e) => setComboContent(e.target.value)}
      />
      <textarea
        placeholder="Combo description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select
        defaultValue={"noselect"}
        onChange={(e) => setCharacter(e.target.value)}
      >
        <option value={"noselect"}>Select a character</option>
        {viewGame.chars.map((char) => (
          <option value={char}>{char}</option>
        ))}
      </select>
      <div>
        <button onClick={uploadHandler}>Post combo</button>
        <button onClick={() => setOpenForm(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default GamePage;
