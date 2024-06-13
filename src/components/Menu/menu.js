import Navbar from "./navbar.js"
import Recruitment from "./recruitment.js"

function Menu({onClick}) {
    return(
        <div className="relative">
            <Navbar />
            <Recruitment onClick={onClick}/>
        </div>
    );
}

export default Menu;