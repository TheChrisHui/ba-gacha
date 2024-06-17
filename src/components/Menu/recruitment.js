import baAnimation from "../../media/baMenuAnimation.mp4"
import { useState } from "react"
import RecruitmentMenu from "./recruitmentMenu.js";
import RecruitmentPopUp from "./recruitmentPopUp.js";


function Recruitment({onClick}) {
    const [popup, setPopup] = useState(0);

    return(
        <div>
            <div className="flex portrait:flex-col w-screen h-screen landscape:flex-row md:flex-row overflow-x-hidden overflow-y-auto md:overflow-y-hidden">
                <div className="flex-1 portrait:absolute portrait:inset-0">
                    <video loop autoPlay muted playsInline className="object-cover w-full h-full">
                        <source src={baAnimation} type="video/mp4"/>   
                    </video>
                    <div>
                        <button className="absolute z-20 bottom-[2%] left-[3%] bg-gray-200 rounded-md p-[5px] text-xs md:text-base font-bold text-gray-500 drop-shadow-lg">
                            Rate Info
                        </button>
                    </div>
                </div>

                <div className="flex-1 portrait:absolute portrait:inset-0">
                    <RecruitmentMenu setPopup={setPopup}/>
                </div>
            </div>
            <RecruitmentPopUp popup={popup} setPopup={setPopup} onClick={onClick}/>
        </div>
    );
}

export default Recruitment;