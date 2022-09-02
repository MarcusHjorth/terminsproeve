import { useState } from 'react';
import { HiOutlineViewList } from 'react-icons/hi';
import Modal from "../Components/Header/Modal"
import { useParams } from 'react-router-dom';

const Header = () => {    
    const [ modalOn, setModalOn ] = useState(false)

    const clicked = () => {
        setModalOn(true)
    }

    return ( 
        <header className="relative">
            
            <nav className="h-[60px] flex flex-row items-center justify-between mx-[20px]">
                <h1 className="text-36">PopularClasses</h1>
                <HiOutlineViewList className="text-36 text-DarkGray" 
                    onClick={clicked}
                    />
            </nav>
            
            {modalOn && <Modal setModalOn={setModalOn} />}
        </header>
     );
}
 
export default Header;