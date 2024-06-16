import baAnimation from "../../media/baMenuAnimation.mp4"
import onePull from "../../media/baPullOne.png"
import tenPull from "../../media/baPullTen.png"
import cross from "../../media/cross.png"
import { useState } from "react"


function Recruitment({onClick}) {
    const [popup, setPopup] = useState(0);

    return(
        <div className="relative">
            <video className="absolute h-screen w-auto" loop autoPlay muted playsInline>
                <source src={baAnimation} type="video/mp4"/>   
            </video>
            <div className="absolute z-10 flex flex-row h-screen w-screen overflow-hidden">
                <div className="basis-1/2 relative">
                    <button className="absolute bottom-[20px] left-[50px] bg-gray-200 rounded-md p-[5px] font-bold text-gray-500 drop-shadow-lg">
                        Rate Info
                    </button>
                </div>
                <div className="basis-1/2 relative">
                    <div className="h-full w-full bg-gradient-to-r from-transparent to-baDarkBlue to-10%">
                    </div>
                    <div className="absolute left-[15%] top-[15%] h-[70%] w-[75%] baRecruitmentColor drop-shadow-lg border border-neutral-400">
                        <div className="px-[40px]">
                            <hr className="border-t-2 border-gray-300 mt-[50px]"/>
                            <div className="font-bold text-6xl baFontColor py-[25px]">
                                Regular Recruitment
                            </div>
                            <hr className="border-t-2 border-gray-300"/>
                            <div className="font-bold text-2xl text-sky-500 py-[10px]">
                                Recruit from a wide range of students!
                            </div>
                            <hr className="border-t-2 border-gray-300 mb-[10px]"/>
                            <div className="text-gray-600">
                                ※ Pyroxenes can be purchased for free!
                            </div>
                        </div>
                        <div className="absolute bottom-0 flex flex-row justify-center w-full px-[20px] pb-[20px]">
                            <button onClick={() => setPopup(1)}>
                                <img src={onePull} alt="one pull"></img>
                            </button>
                            <button onClick={() => setPopup(10)}>
                                <img src={tenPull} alt="ten pull"></img>
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
            {popup !== 0 && <div className="popupBackground">
                <div className="popupContent h-[65%] mt-[6%]">
                    <div className="py-[10px] flex justify-center bg-baDarkBlue text-4xl font-bold baFontColor drop-shadow-md items-center">
                        <div>
                            Notice
                        </div>
                        <button className="absolute right-[10px] aspect-square h-[60%]" onClick={()=>setPopup(0)}>
                            <img className="h-full w-auto" src={cross} alt="close"/>
                        </button>
                    </div>

                    <div className="absolute top-[45%] w-full flex justify-center text-3xl text-gray-700">
                        {`Proceed to recruit with ${120*popup} Pyroxenes?`}
                    </div>
                    <div className="absolute bottom-[10%] h-[15%] flex justify-center w-full gap-[5%] text-4xl font-bold baFontColor">
                        <button className="border border-black h-full w-[40%]" onClick={() => setPopup(0)}>
                            Cancel
                        </button>
                        <button className="border border-black h-full w-[40%]" onClick={() => onClick(popup)}>
                            OK
                        </button>
                    </div>
                </div></div>}
        </div>
    );
}

export default Recruitment;