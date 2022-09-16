import { Link } from "react-router-dom"
import { BsArrowLeftShort } from "react-icons/bs"

const BackButton = () => {
    return ( 
        <Link to="/Home">
            <button><BsArrowLeftShort className=" text-56 pt-2 mr-[10px] text-DarkGray" /></button>
        </Link>
     );
}
 
export default BackButton;