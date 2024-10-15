import baAnimation from "../../media/baMenuAnimation.mp4"
import speakerOn from "../../media/volume.png"
import speakerOff from "../../media/volumeOff.png"
import { useState } from "react"
import RecruitmentMenu from "./recruitmentMenu.js";
import RecruitmentPopUp from "./recruitmentPopUp.js";


function Recruitment({onClick, audioRef}) {
    const [popup, setPopup] = useState(0);
    const [sound, setSound] = useState(false);

    return(
        <div>
            <div className="flex portrait:flex-col w-screen h-screen landscape:flex-row md:flex-row overflow-x-hidden overflow-y-auto md:overflow-y-hidden">
                <div className="flex-1 portrait:absolute portrait:inset-0">
                    <video loop autoPlay muted playsInline className="object-cover w-full h-full">
                        <source src={baAnimation} type="video/mp4"/>   
                    </video>
                </div>
                <div className="flex-1 portrait:absolute portrait:inset-0">
                    <RecruitmentMenu setPopup={setPopup}/>
                </div>
                <div className="absolute z-20 flex bottom-[2%] h-[8%] portrait:h-[4%] md:h-[4%] w-screen justify-between px-[30px]">
                    <div className="flex justify-content items-center bg-gray-200 rounded-md p-[5px] drop-shadow-lg h-full w-[8vh] portrait:w-[4vh] md:w-[4vh]">
                        <button onClick={() => {
                            if (!audioRef.current.paused && audioRef.current.currentTime > 0) {
                                audioRef.current.pause();
                                setSound(false);
                            }
                            else {
                                audioRef.current.play();
                                setSound(true);
                            }
                        }}>
                            {sound ? 
                                <img className="object-fit h-full w-full" src={speakerOn} alt="volumeOn" /> :
                                <img className="object-fit h-full w-full" src={speakerOff} alt="volumeOff" />
                            }
                        </button>
                    </div>
                </div>
            </div>
            <RecruitmentPopUp popup={popup} setPopup={setPopup} onClick={onClick}/>
        </div>
    );
}

export default Recruitment;