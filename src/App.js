import { useState } from "react";
import "./style.css";
import Fade from "./Fade";
import Slide from "./Slide";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>

        <Fade active={isToggled}>
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        </Fade>
        {/* Slide motion */}
        <Slide active={isToggled}>
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        </Slide>
        {/* Complex Slide motion */}
        <Slide active={isToggled} direction={-1} distance={600}>
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        </Slide>
        <h1>Scoot</h1>
      </main>
    </div>
  );
}

export default App;
