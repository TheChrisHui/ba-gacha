function Navbar() {
    return(
        <nav className="fixed z-20 flex justify-between bg-white w-screen px-[50px] py-[10px]">
            <div className="baFontColor font-bold">
                Student Recruitment     
            </div>
            <div className="flex space-x-1">
                <div>Pyroxene</div>
                <div>
                    <button>
                        Add pyroxene
                    </button>
                </div> 
            </div>
        </nav>
    );
}

export default Navbar;