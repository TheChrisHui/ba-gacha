import onePull from "../../media/baPullOne.png"
import tenPull from "../../media/baPullTen.png"

function RecruitmentMenu({setPopup}) {
    return(
            <div className="z-10 h-screen overflow-hidden">
                <div className="h-full w-full bg-baDarkBlue portrait:bg-transparent portrait:backdrop-blur-sm flex justify-center items-center">
                    <div className="relative h-[70%] portrait:h-[55%] w-[75%] baRecruitmentColor drop-shadow-lg border border-neutral-400">
                        <div className="px-[40px] py-[20px] lg:py-[25px]">
                            <hr className="border-t-2 border-gray-300 mt-[20px] lg:mt-[50px]"/>
                            <div className="font-bold text-base lg:text-6xl baFontColor">
                                Regular Recruitment
                            </div>
                            <hr className="border-t-2 border-gray-300"/>
                            <div className="font-bold text-xs lg:text-2xl text-sky-500 lg:py-[10px]">
                                Recruit from a wide range of students!
                            </div>
                            <hr className="border-t-2 border-gray-300 lg:mb-[10px]"/>
                            <div className="text-[10px] lg:text-base text-gray-600">
                                ※ Pyroxenes can be purchased for free!
                            </div>
                            <div className="text-[10px] lg:text-base text-gray-600">
                                ※ Turn on the background music!
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
    );
}

export default RecruitmentMenu;