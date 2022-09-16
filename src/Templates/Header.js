import { useState } from 'react';
import { HiOutlineViewList } from 'react-icons/hi';
import Modal from "../Components/Header/Modal"


const Header = (props) => {    
    const [ modalOn, setModalOn ] = useState(false)

    const clicked = () => {
        setModalOn(true)
    }

    return ( 
        <header className="relative">
            <nav className="h-[100px] flex flex-row items-center justify-between mx-[20px] py-[20px]">
                <div className="flex flex-row items-center">
                    {props.backButton}
                    <h1 className="text-36 text-Black">{props.text}</h1>
                </div>

                <HiOutlineViewList className="text-36 text-DarkGray" 
                    onClick={clicked}
                    />
            </nav>
            {modalOn && <Modal setModalOn={setModalOn} />}
        </header>
     );
}
 
export default Header;