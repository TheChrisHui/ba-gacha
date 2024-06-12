import Menu from "./components/menu.js"
import Gacha from "./components/gacha.js"
import connectedSky from "./media/connectedSky.mp3"

import { useState } from "react";

function App() {
  const [gacha, setGacha] = useState(false);

  function handleClick() {
    setGacha(!gacha)
  }

  return (
    <div>
      {gacha ? <Gacha onClick={()=>handleClick()} /> : <Menu onClick={()=>handleClick()} />}
      <audio loop autoPlay>
        <source src={connectedSky} type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default App;
