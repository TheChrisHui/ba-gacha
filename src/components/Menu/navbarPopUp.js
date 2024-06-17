import cross from "../../media/cross.png"
import aronaInPyroxene from "../../media/aronaInPyroxene.webp"
import aronaPackingPyroxene from "../../media/aronaPackingPyroxene.png"
import aronaPullingPyroxene from "../../media/aronaPullingPyroxene.png"

function NavbarPopUp({setPyroxene, setPopup, popup}) {
    if (popup) {
        return(
                <div className="popupBackground">
                    <div className="popupContent w-[80%] md:w-[40%] portrait:w-[90%] h-[50%] landscape:h-[85%] text-center items-center">
                        <div className="relative py-[5px] md:py-[10px] flex bg-baDarkBlue text-xl md:text-4xl font-bold baFontColor drop-shadow-md justify-center items-center">
                            <div>
                                Purchase Pyroxenes
                            </div>
                            <button className="absolute right-[10px] aspect-square h-[60%]" onClick={()=>setPopup(false)}>
                                <img className="h-full w-auto" src={cross} alt="close"/>
                            </button>
                        </div>
                        <div className="grid grid-rows-1 grid-cols-3 h-[85%] w-[99%] bg-gray-300 mx-auto mt-[5px] rounded">
                            <div className="relative m-auto rounded bg-white h-[98%] w-[95%] overflow-hidden">
                                <div className="baFontColor font-bold text-sm md:text-2xl text-center">Pyroxene x3,920</div>
                                <div className="baFontColor font-bold text-sm md:text-2xl text-center">1,960 + 1,960 (Bonus)</div>
                                <img className="absolute top-[20%] portrait:top-[40%] w-[100%]" src={aronaInPyroxene} alt="aronaInPyroxene"/>
                                <div className="absolute bottom-[3%] h-[20%] flex justify-center w-full">
                                    <button className="border border-black h-full w-[70%] baFontColor font-bold text-base md:text-2xl" onClick={()=>setPyroxene(pyroxene => pyroxene+3920)}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div className="relative m-auto rounded bg-white h-[98%] w-[95%] overflow-hidden">
                                <div className="baFontColor font-bold text-sm md:text-2xl text-center">Pyroxene x2352</div>
                                <div className="baFontColor font-bold text-sm md:text-2xl text-center">1,176 + 1,176 (Bonus)</div>
                                <img className="absolute top-[20%] portrait:top-[40%] w-[100%]" src={aronaPullingPyroxene} alt="aronaInPyroxene"/>
                                <div className="absolute bottom-[3%] h-[20%] flex justify-center w-full">
                                    <button className="border border-black h-full w-[70%] baFontColor font-bold text-base md:text-2xl" onClick={()=>setPyroxene(pyroxene => pyroxene+3920)}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div className="relative m-auto rounded bg-white h-[98%] w-[95%] overflow-hidden">
                                <div className="baFontColor font-bold text-sm md:text-2xl text-center">Pyroxene x1,184</div>
                                <div className="baFontColor font-bold text-sm md:text-2xl text-center">592 + 592 (Bonus)</div>
                                <img className="absolute top-[20%] portrait:top-[40%] w-[100%]" src={aronaPackingPyroxene} alt="aronaInPyroxene"/>
                                <div className="absolute bottom-[3%] h-[20%] flex justify-center w-full">
                                    <button className="border border-black h-full w-[70%] baFontColor font-bold text-base md:text-2xl" onClick={()=>setPyroxene(pyroxene => pyroxene+3920)}>
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NavbarPopUp;