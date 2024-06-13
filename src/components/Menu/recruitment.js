import baAnimation from "../../media/baMenuAnimation2.mp4"
import onePull from "../../media/onePull.webp"
import tenPull from "../../media/tenPull.webp"

function Recruitment({onClick}) {
    return(
        <div className="relative">
            <video className="absolute h-screen w-auto" loop autoPlay muted>
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
                    <div className="absolute left-[15%] top-[15%] h-3/4 w-3/4 baRecruitmentColor drop-shadow-lg border border-neutral-400">
                        <div className="font-bold text-6xl baFontColor text-center pt-[20px]">
                            Regular Recruitment
                        </div>
                        <div className="absolute bottom-0 flex flex-row justify-between w-full">
                            <button onClick={() => onClick(1)}>
                                <img src={onePull} alt="one pull"></img>
                            </button>
                            <button onClick={() => onClick(10)}>
                                <img src={tenPull} alt="ten pull"></img>
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Recruitment;

/**
 * gif source
 * https://static.miraheze.org/bluearchivewiki/f/fa/L2d_Gif_Hanako.gif?20210720053606
 * https://c.tenor.com/l7M9By1GzXAAAAAd/tenor.gif
 * https://bluearchive.fandom.com/wiki/Misono_Mika?file=Mika_EX.gif
 */ 