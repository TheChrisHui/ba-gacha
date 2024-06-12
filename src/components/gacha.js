import CanvasDraw from "./canvasDraw.js"
import blueOne from "../media/blueOne.mp4"
import { useState } from "react";

function Gacha({onClick}) {

    const [progress, setProgress] = useState(0);

    function handleVideoEnd() {
        setProgress(1);
    }

    return(
        <div className="relative">
            {(progress===1 || progress===0) ? 
                <video className="absolute h-screen w-auto" autoPlay muted onEnded={handleVideoEnd}>
                    <source src={blueOne}/>
                </video> : <></>
            }
            
            <div className="absolute h-screen w-screen">
                {(progress===1) ? <CanvasDraw setProgress={setProgress}/> : <></>}
                
                {(progress===2) ? 
                    <button className="border border-black" onClick={onClick}>
                        To Menu
                    </button> : <></>
                }
            </div>
        </div>
    );
}

export default Gacha;