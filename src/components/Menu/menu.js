import Navbar from "./navbar.js"
import Recruitment from "./recruitment.js"

function Menu({onClick, pyroxene, setPyroxene}) {
    return(
        <div>
            <Navbar pyroxene={pyroxene} setPyroxene={setPyroxene}/>
            <Recruitment onClick={onClick}/>
        </div>
    );
}

export default Menu;

/**
 * z-0 video
 * z-10 recuitment menu
 * z-20 nav bar
 * z-30 pop up
 */