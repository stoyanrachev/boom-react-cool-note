import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const save = (e) => {
    setText(e.target.value);
    localStorage.setItem("saved", text)
  };
  const clear = () => {
    localStorage.clear();
  };
  const get = () => {
    localStorage.getItem('saved')
  }
  useEffect(() => {
    setText(localStorage.getItem('saved'))
  }, [])
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              value={text}
              onChange={save}
            >
              {get}
            </textarea>
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={save}>Save</button>
        <button className="button is-large" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
