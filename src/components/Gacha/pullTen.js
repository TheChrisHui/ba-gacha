import cross from "../../media/cross.png"
import { useState } from "react";

function PullTen({setProgress, generatePullList, pullList, onClick, setPyroxene}) {

    const [popup, setPopup] = useState(false);

    return(
        <div>
            <div className="absolute bg-baDarkBlue h-full w-full">
                <div className="grid grid-rows-2 grid-cols-5 h-fit mx-[20%] portrait:mx-[10%] mt-[5%] gap-x-[3%] gap-y-[30%]">
                    {pullList.map((characterName, i)=>{
                        return(
                            <div key={i}>
                                <img className="w-full h-auto" src={require(`../../media/baIcons/${characterName}_Icon.png`)} alt="characterIcon"/>
                            </div>
                        );
                    })}
                </div>
                <div className="absolute bottom-[17%] h-[10%] flex justify-center w-full gap-[5%] text-l lg:text-2xl font-bold baFontColor">
                    <button className="border border-black h-full w-[30%] lg:w-[15%]" onClick={() => onClick(0)}>
                        OK
                    </button>
                    <button className="border border-black h-full w-[30%] lg:w-[15%]" onClick={() => setPopup(true)}>
                        Continue
                    </button>
                </div>
            </div>

            {popup && <div className="popupBackground">
                <div className="popupContent w-[65%] lg:w-[40%] portrait:w-[90%] h-[80%] lg:h-[65%] portrait:h-[40%]">
                    <div className="py-[5px] lg:py-[10px] relative flex justify-center bg-baDarkBlue text-xl lg:text-4xl font-bold baFontColor drop-shadow-md items-center">
                        <div>
                            Notice
                        </div>
                        <button className="absolute right-[10px] aspect-square h-[60%]" onClick={()=>setPopup(false)}>
                            <img className="h-full w-auto" src={cross} alt="close"/>
                        </button>
                    </div>

                    <div className="absolute top-[40%] lg:top-[45%] w-full flex justify-center text-base lg:text-3xl text-gray-700">
                        Proceed to recruit with 1200 Pyroxenes?
                    </div>
                    <div className="absolute bottom-[10%] h-[15%] flex justify-center w-full gap-[5%] text-xl lg:text-4xl font-bold baFontColor">
                        <button className="border border-black h-full w-[40%]" onClick={() => setPopup(false)}>
                            Cancel
                        </button>
                        <button className="border border-black h-full w-[40%]" onClick={() => {generatePullList(10); setProgress(0); setPyroxene((pyroxene)=>pyroxene-1200)}}>
                            OK
                        </button>
                    </div>
                </div></div>
            }
        </div>

    );
}

export default PullTen;