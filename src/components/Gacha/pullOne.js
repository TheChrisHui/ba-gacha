import cross from "../../media/cross.png"
import { useState } from "react";

function PullOne({setProgress, generatePullList, pullList, onClick, setPyroxene}) {

    const [popup, setPopup] = useState(false);

    return(
        <div>
            <div className="absolute bg-baDarkBlue h-full w-full">
                <div>
                    {(pullList.length !== 0) && <img className="mx-auto mt-[13%] w-[10%] h-auto" src={require(`../../media/baIcons/${pullList[0]}_Icon.png`)} alt="characterIcon"/>}
                </div>
                <div className="absolute bottom-[17%] h-[10%] flex justify-center w-full gap-[5%]">
                    <button className="border border-black h-full w-[15%]" onClick={() => onClick(0)}>
                        OK
                    </button>
                    <button className="border border-black h-full w-[15%]" onClick={() => setPopup(true)}>
                        Continue
                    </button>
                </div>
            </div>

            {popup && <div className="popupBackground">
                <div className="popupContent h-[65%] mt-[6%]">
                    <div className="py-[10px] flex justify-center bg-baDarkBlue text-4xl font-bold baFontColor drop-shadow-md items-center">
                        <div>
                            Notice
                        </div>
                        <button className="absolute right-[10px] aspect-square h-[60%]" onClick={()=>setPopup(false)}>
                            <img className="h-full w-auto" src={cross} alt="close"/>
                        </button>
                    </div>

                    <div className="absolute top-[45%] w-full flex justify-center text-3xl text-gray-700">
                        Proceed to recruit with 120 Pyroxenes?
                    </div>
                    <div className="absolute bottom-[10%] h-[15%] flex justify-center w-full gap-[5%] text-4xl font-bold baFontColor">
                        <button className="border border-black h-full w-[40%]" onClick={() => setPopup(false)}>
                            Cancel
                        </button>
                        <button className="border border-black h-full w-[40%]" onClick={() => {generatePullList(1); setProgress(0); setPyroxene((pyroxene) => pyroxene-120)}}>
                            OK
                        </button>
                    </div>
                </div></div>
            }
        </div>
    );
}

export default PullOne;