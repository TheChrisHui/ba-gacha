import { useState, useRef } from "react";

function CharacterAnimation({pullList, setProgress}) {

    const [characterId, setCharacterId] = useState(0);

    const charAnimationRef = useRef(null);
    const rectAnimationRef = useRef(null);
    const nameAnimationRef = useRef(null);

    const animationRef = [charAnimationRef, rectAnimationRef, nameAnimationRef];


    function handleClick() {
        if (characterId !== pullList.length-1) {
            for (let i = 0; i < animationRef.length; i++) {
                animationRef[i].current.style.animation = 'none';
                void animationRef[i].current.offsetHeight; /* trigger reflow */
                animationRef[i].current.style.animation = '';
            }

            setCharacterId((prevCharacterId) => prevCharacterId + 1);
        }
        else {
            setProgress(3);
        }
    }

    return(
        <div className="overflow-hidden h-screen bg-baDarkBlue">
            <div ref={rectAnimationRef} className="fixed z-10 object-cover rectangleTransition w-[120vw] h-[300vw] portrait:w-[120vh] portrait:h-[300vh]">
            </div>
            <div ref={nameAnimationRef} className="flex items-center fixed nameAnimation bottom-[20%] z-10 object-cover h-[10%] opacity-90 rounded-md">
                <div className="text-white text-4xl font-medium mx-5">
                    {pullList[characterId]}
                </div>
            </div>
            <img ref={charAnimationRef} className="mx-auto object-cover characterAnimation" src={require(`../../media/baPortraits/${pullList[characterId]}_full.png`)} alt="characterFull"/>
            <div className="absolute z-10 h-screen w-screen inset-0" onClick={handleClick}/>
        </div>
    );
}

export default CharacterAnimation