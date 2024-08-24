import CanvasDraw from "./canvasDraw.js"
import PullOne from "./pullOne.js"
import PullTen from "./pullTen.js"
import CharacterAnimation from "./characterAnimation.js";
import blueOne from "../../media/blueOne.mp4"
import { useState, useEffect } from "react";
import {characters} from "../../utilities/characters.js"

function Gacha({pull, onClick, setPyroxene}) {

    
    const [pullList, setPullList] = useState([]);

    function generatePullList(pull) {
        const generatedPullList = [];
        for (let i = 0; i < pull; i++) {
            generatedPullList.push(
                characters[Math.floor(Math.random() * (characters.length - 1))]
            );
        }
        setPullList(generatedPullList);
    };

    useEffect(() => generatePullList(pull), [pull]);

    const [progress, setProgress] = useState(1);

    function handleVideoEnd() {
        setProgress(0);
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
        <div className="relative h-screen w-screen overflow-x-hidden" 
            onTouchStart={(e)=>e.preventDefault()}
            onTouchMove={(e)=>e.preventDefault()}>
            {(progress===1 || progress===0) &&
                <div className="absolute inset-0 bg-baDarkBlue">
                    <video className="object-cover h-full w-full portrait:absolute portrait:top-[25%] portrait:h-[50%]" autoPlay muted playsInline onEnded={handleVideoEnd}>
                        <source src={blueOne}/>
                    </video>
                </div>
            }
            
            <div className="absolute inset-0">
                {(progress===1) && (<CanvasDraw setProgress={setProgress}/>)}

                {(progress===2) && (<>  <CharacterAnimation pullList={pullList} setProgress={setProgress}/> 
                                        <div className="-z-10 absolute top-0 left-0 h-full w-full bg-white opacity-0 fadeOutAnimation"></div></>)}
                
                {(progress===3) && (pull===1 ? 
                    <PullOne setProgress={setProgress} generatePullList={generatePullList} pullList={pullList} onClick={onClick} setPyroxene={setPyroxene}/> : 
                    <PullTen setProgress={setProgress} generatePullList={generatePullList} pullList={pullList} onClick={onClick} setPyroxene={setPyroxene}/>
                )}

            </div>
        </div>
    );
}

export default Gacha;