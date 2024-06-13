import Menu from "./components/Menu/menu.js"
import Gacha from "./components/Gacha/gacha.js"
import connectedSky from "./media/connectedSky.mp3"

import { useState } from "react";

function App() {
  const [gacha, setGacha] = useState(false);
  const [pull, setPull] = useState(0);

  function handleClick(pullNumber) {
    setGacha(!gacha);
    setPull(pullNumber);
  }

  return (
    <div>
      {gacha ? <Gacha pull={pull} onClick={handleClick} /> : <Menu onClick={handleClick} />}
      <audio loop autoPlay>
        <source src={connectedSky} type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default App;
