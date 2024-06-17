import Menu from "./components/Menu/menu.js"
import Gacha from "./components/Gacha/gacha.js"
import connectedSky from "./media/connectedSky.mp3"
import { useState , useRef, useEffect } from "react";

function App() {
  const [gacha, setGacha] = useState(false);
  const [pull, setPull] = useState(0);
  const [pyroxene, setPyroxene] = useState(12000);

  function handleClick(pullNumber) {
    setPull(pullNumber);
    setGacha(!gacha);
    setPyroxene(pyroxene - pullNumber * 120 )
  }

  const audioRef = useRef(null);

  useEffect(()=>{
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  });

  return (
    <div>
      {gacha ? <Gacha pull={pull} onClick={handleClick} setPyroxene={setPyroxene}/> : <Menu onClick={handleClick} pyroxene={pyroxene} setPyroxene={setPyroxene} audioRef={audioRef}/>}
      <audio ref={audioRef} loop>
        <source src={connectedSky} type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default App;
