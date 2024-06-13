import CanvasDraw from "./canvasDraw.js"
import Pull from "./pull.js"
import CharacterAnimation from "./characterAnimation.js";
import blueOne from "../../media/blueOne.mp4"
import { useState, useEffect } from "react";
import {characters} from "../../utilities/characters.js"

function Gacha({pull, onClick}) {

    
    const [pullList, setPullList] = useState([]);

    useEffect(() => {
    const generatedPullList = [];
    for (let i = 0; i < pull; i++) {
        generatedPullList.push(
        characters[Math.floor(Math.random() * (characters.length - 1))]
        );
    }
    setPullList(generatedPullList);
    }, [pull]);

    const [progress, setProgress] = useState(0);

    function handleVideoEnd() {
        setProgress(1);
    }

    /**
     * progress === 0
     * pre-sign animation
     * progress === 1
     * signing with gif
     * progress === 2
     * post-sign animation (not implemented)
     * progress === 3
     * Individual animation??????
     * progress === 4
     * pull results screen
     */

    return(
        <div className="relative">
            {(progress===1 || progress===0) ? 
                <video className="absolute h-screen w-auto" autoPlay muted onEnded={handleVideoEnd}>
                    <source src={blueOne}/>
                </video> : <></>
            }
            
            <div className="absolute h-screen w-screen">
                {(progress===1) && (<CanvasDraw setProgress={setProgress}/>)}

                {(progress===2) && (<CharacterAnimation pullList={pullList} setProgress={setProgress}/>)}
                
                {(progress===3) && (<Pull pullList={pullList} onClick={onClick}/>)}

            </div>
        </div>
    );
}

export default Gacha;