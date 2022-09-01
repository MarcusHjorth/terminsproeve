import TopImg from "../Assets/welcome-background.jpg"
import BottomImg from "../Assets/welcome-center.jpg"
import { Link } from "react-router-dom"

const WelcomePage = () => {
    return ( 
        <main className="bg-Black">
            <div className="h-screen ">
                <figure className="relative h-[50%]">
                    <img 
                        src={TopImg} 
                        alt=""  
                        className="h-full object-cover"/>
                        <h1 className="text-Yellow text-56 font-bold absolute bottom-[40px] left-[20px]">Belive In Yourself</h1>
                    <div className="flex flex-row items-center absolute bottom-[10px] text-white">
                        <div className="bg-white w-[40px] h-[2px]"></div>
                        <p className="mx-[10px] text-20 font-bold">Train like a pro</p>
                    </div>
                </figure>
                
                <figure className="relative h-[50%] flex justify-center">
                    <img 
                    src={BottomImg} 
                    alt="" 
                    className="h-full object-cover"/>
                    <Link to="/Home" className="absolute bottom-[50px]">
                        <button className="bg-Yellow text-20 font-medium py-[0.75em] px-[1.5em] rounded-full" >START TRANING</button>
                    </Link>
                </figure>
            </div>
        </main>
     );
}
 
export default WelcomePage;