import pyroxeneImg from "../../media/pyroxene.png"
import plus from "../../media/plus.png"
import cross from "../../media/cross.png"
import aronaInPyroxene from "../../media/aronaInPyroxene.webp"
import aronaPackingPyroxene from "../../media/aronaPackingPyroxene.png"
import aronaPullingPyroxene from "../../media/aronaPullingPyroxene.png"
import { useState } from "react";

function Navbar({pyroxene, setPyroxene}) {
    const [popup, setPopup] = useState(false);

    return(
        <div>
            <nav className="fixed z-20 h-[45px] flex justify-between bg-white w-screen px-[50px] py-[5px]">
                <div className="baFontColor font-bold text-2xl">
                    Student Recruitment     
                </div>
                <div className="flex space-x-5 items-center h-full">
                    <div className="h-full flex items-center">
                        <img className="w-auto h-full" src={pyroxeneImg} alt="pyroxeneImg"/>
                        <div className="text-gray-700 text-xl">{pyroxene}</div>
                    </div>
                    <button className="aspect-square h-[60%]" onClick={() => {setPopup(true)}}>
                        <img className="w-auto h-full" src={plus} alt="addPyroxene"/>
                    </button>
                </div>
            </nav>
            {popup && 
                <div className="popupBackground">
                    <div className="popupContent h-[50%] mt-[12%] text-center items-center">
                        <div className="py-[10px] flex bg-baDarkBlue text-4xl font-bold baFontColor drop-shadow-md justify-center items-center">
                            <div>
                                Purchase Pyroxenes
                            </div>
                            <button className="absolute right-[10px] aspect-square h-[60%]" onClick={()=>setPopup(false)}>
                                <img className="h-full w-auto" src={cross} alt="close"/>
                            </button>
                        </div>
                        <div className="grid grid-rows-1 grid-cols-3 h-[85%] w-[99%] bg-gray-300 mx-auto mt-[5px] rounded">
                            <div className="relative m-auto rounded bg-white h-[98%] w-[95%] overflow-hidden">
                                <div className="baFontColor font-bold text-2xl text-center">Pyroxene x3,920</div>
                                <div className="baFontColor font-bold text-2xl text-center">1,960 + 1,960 (Bonus)</div>
                                <img className="absolute top-[20%] w-[100%]" src={aronaInPyroxene} alt="aronaInPyroxene"/>
                                <div className="absolute bottom-[20px] h-[20%] flex justify-center w-full">
                                    <button className="border border-black h-full w-[70%] baFontColor font-bold text-2xl" onClick={()=>setPyroxene(pyroxene+3920)}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div className="relative m-auto rounded bg-white h-[98%] w-[95%] overflow-hidden">
                                <div className="baFontColor font-bold text-2xl text-center">Pyroxene x2352</div>
                                <div className="baFontColor font-bold text-2xl text-center">1,176 + 1,176 (Bonus)</div>
                                <img className="absolute top-[20%] w-[100%]" src={aronaPullingPyroxene} alt="aronaInPyroxene"/>
                                <div className="absolute bottom-[20px] h-[20%] flex justify-center w-full">
                                    <button className="border border-black h-full w-[70%] baFontColor font-bold text-2xl" onClick={()=>setPyroxene(pyroxene+2352)}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div className="relative m-auto rounded bg-white h-[98%] w-[95%] overflow-hidden">
                                <div className="baFontColor font-bold text-2xl text-center">Pyroxene x1,184</div>
                                <div className="baFontColor font-bold text-2xl text-center">592 + 592 (Bonus)</div>
                                <img className="absolute top-[20%] w-[100%]" src={aronaPackingPyroxene} alt="aronaInPyroxene"/>
                                <div className="absolute bottom-[20px] h-[20%] flex justify-center w-full">
                                    <button className="border border-black h-full w-[70%] baFontColor font-bold text-2xl" onClick={()=>setPyroxene(pyroxene+1184)}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navbar;