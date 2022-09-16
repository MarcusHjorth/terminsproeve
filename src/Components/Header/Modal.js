import React, { useContext } from "react";
import { CgClose } from 'react-icons/cg';
import { Link } from "react-router-dom"
import { ContextState } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Modal = ({ setModalOn }) => {
    const navigate = useNavigate();
    const context = useContext( ContextState )
    const CloseModal = () => {
        setModalOn(false)
    }

    const SignOut = () => {
        context.setIsLoggedIn(false)
        context.setToken("")
        navigate('/home', { replace: true });
    }

    return ( 
        <nav className="bg-White absolute top-[0px] z-50 w-screen h-screen pt-[0px]">
            <button className="w-full h-[100px] flex justify-end items-center">
                <CgClose onClick={CloseModal} className="text-36 text-DarkGray mr-[20px]" />
            </button>
                
            <ul className="w-screen mt-[6rem] text-center text-24 flex flex-col space-y-10">
                <Link to="/Home" onClick={CloseModal}><li>Home</li></Link>
                <Link to="/Search" onClick={CloseModal}><li>Search</li></Link>
                
                { context.isLoggedIn && <Link to="/MySchedule" onClick={CloseModal}><li>My schedule</li></Link> }
                
                { context.isLoggedIn ? 
                    <button
                        onClick={()=> {
                            CloseModal()
                            SignOut()
                        }}
                    >Sign out</button>
                    : 
                    <Link to="/Login" onClick={CloseModal}><li>Log in</li></Link>
                }
            </ul>
        </nav>
     );
}
 
export default Modal;