import pyroxeneImg from "../../media/pyroxene.png"
import plus from "../../media/plus.png"
import NavbarPopUp from "./navbarPopUp.js";
import { useState } from "react";

function Navbar({pyroxene, setPyroxene}) {
    const [popup, setPopup] = useState(false);

    return(
        <div>
            <nav className="fixed z-20 portrait:h-[7%] landscape:h-[7%] lg:h-[5%] flex justify-between items-center bg-white w-screen px-[3%] py-[5px]">
                <div className="baFontColor font-bold text-sm lg:text-2xl">
                    Student Recruitment     
                </div>
                <div className="flex space-x-1 lg:space-x-5 items-center h-full">
                    <div className="h-full flex items-center">
                        <img className="w-auto h-full" src={pyroxeneImg} alt="pyroxeneImg"/>
                        <div className="text-gray-700 text-sm lg:text-xl">{pyroxene}</div>
                    </div>
                    <button className="aspect-square h-[60%]" onClick={() => {setPopup(true)}}>
                        <img className="w-auto h-full" src={plus} alt="addPyroxene"/>
                    </button>
                </div>
            </nav>
            <NavbarPopUp setPyroxene={setPyroxene} setPopup={setPopup} popup={popup}/>
        </div>
    );
}

export default Navbar;