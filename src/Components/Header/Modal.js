import { CgClose } from 'react-icons/cg';
import { Link } from "react-router-dom"

const Modal = ({ setModalOn }) => {

    const CloseModal = () => {
        setModalOn(false)
    }

    return ( 
        <nav className="bg-White absolute top-[-60px] z-50 w-screen h-screen pt-[70px]">
            <button className="w-full h-[60px] flex justify-end">
                <CgClose onClick={CloseModal} className="text-36 text-DarkGray mr-[20px]" />
            </button>
                
            <ul className="w-screen mt-[10rem] h-[16rem] text-24 flex justify-between items-center flex-col">
                <Link to="/Home" onClick={CloseModal}><li>Home</li></Link>
                <Link to="/Search" onClick={CloseModal}><li>Search</li></Link>
                <Link to="/MySchedule" onClick={CloseModal}><li>My schedule</li></Link>
                <Link to="/LogIn" onClick={CloseModal}><li>LogIn</li></Link>
            </ul>
        </nav>
     );
}
 
export default Modal;