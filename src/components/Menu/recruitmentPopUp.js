import cross from "../../media/cross.png"

function RecruitmentPopUp({popup, setPopup, onClick}) {
    if (popup > 0) {
        return(
            <div className="popupBackground">
                <div className="popupContent w-[65%] lg:w-[40%] portrait:w-[90%] h-[80%] lg:h-[65%] portrait:h-[40%]">
                    <div className="py-[5px] lg:py-[10px] relative flex justify-center bg-baDarkBlue text-xl lg:text-4xl font-bold baFontColor drop-shadow-md items-center">
                        <div>
                            Notice
                        </div>
                        <button className="absolute right-[10px] aspect-square h-[60%]" onClick={()=>setPopup(0)}>
                            <img className="h-full w-auto" src={cross} alt="close"/>
                        </button>
                    </div>

                    <div className="absolute top-[40%] lg:top-[45%] w-full flex justify-center text-base lg:text-3xl text-gray-700">
                        {`Proceed to recruit with ${120*popup} Pyroxenes?`}
                    </div>
                    <div className="absolute bottom-[10%] h-[15%] flex justify-center w-full gap-[5%] text-xl lg:text-4xl font-bold baFontColor">
                        <button className="border border-black h-full w-[40%]" onClick={() => setPopup(0)}>
                            Cancel
                        </button>
                        <button className="border border-black h-full w-[40%]" onClick={() => onClick(popup)}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecruitmentPopUp;