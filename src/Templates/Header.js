import { HiOutlineViewList } from 'react-icons/hi';

const Header = () => {
    return ( 
        <header className="flex flex-row items-center justify-between">
            <h1 className="text-36">Popular classes</h1>
            <nav><HiOutlineViewList className="text-36 text-DarkGray" /></nav>
        </header>
     );
}
 
export default Header;