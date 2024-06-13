import { useState, useRef } from "react";

function CharacterAnimation({pullList, setProgress}) {

    const [characterId, setCharacterId] = useState(0);
    const animationRef = useRef(null);

    function handleClick() {
        if (characterId !== pullList.length-1) {
            animationRef.current.style.animation = 'none';
            void animationRef.current.offsetHeight; /* trigger reflow */
            animationRef.current.style.animation = '';
            setCharacterId((prevCharacterId) => prevCharacterId + 1);
        }
        else {
            setProgress(3);
        }
    }

    return(
        <div className="overflow-hidden h-screen bg-baDarkBlue">
            <div className="font-bold baFontColor">
                <div className="text-6xl">
                    {pullList[characterId]}
                </div>
                <button onClick={handleClick}>
                        Next
                </button>
            </div>
            <div ref={animationRef} className="fixed w-auto inline-block characterAnimation">
                <img className="h-full w-auto" src={require(`../../media/baPortraits/${pullList[characterId]}_full.png`)} alt="characterFull"/>
            </div>
        </div>
    );
}

export default CharacterAnimation