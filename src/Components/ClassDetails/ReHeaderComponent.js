import { useState } from 'react';
import { HiOutlineViewList } from 'react-icons/hi';
import Modal from "../Header/Modal"

const Header = (props) => {    
    const [ modalOn, setModalOn ] = useState(false)

    const clicked = () => {
        setModalOn(true)
    }

    return ( 
        <header className="relative">
            <nav className="h-[100px] flex flex-row items-center justify-between mx-[20px] py-[20px]">
                <div className="flex flex-row items-center">
                    {props.reBackButton}
                    <h1 className="text-36">{props.text}</h1>
                </div>

                <HiOutlineViewList className="text-36 text-white" 
                    onClick={clicked}
                    />
            </nav>
            {modalOn && <Modal setModalOn={setModalOn} />}
        </header>
     );
}
 
export default Header;