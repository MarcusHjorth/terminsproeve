import { AiFillStar } from 'react-icons/ai';

const RatingModal = ({ setModalOn, workout}) => {

    const CloseModal = () => {
        setModalOn(false)
    }

    return (
        <article className="flex justify-center items-center bg-Black bg-opacity-70 absolute top-[0px] z-50 w-screen h-screen pt-[0px]"
        >
            
            <div className="bg-White w-full h-[15rem] py-[20px] mx-[30px] rounded-[20px] flex justify-around items-center flex-col">
                <h1 className="font-bold text-18 px-[20px]">Rate the { workout } class</h1>
                
                <ul className="flex flex-row items-center text-Yellow space-x-2 text-20">
                    <li><AiFillStar/></li>
                    <li><AiFillStar/></li>
                    <li><AiFillStar/></li>
                </ul>

                <p className="ml-[0px]">Your rating 3/5</p>

                <button className="bg-Yellow mt-[10px] py-[1rem] font-semibold rounded-full w-[15rem]"
                    onClick={CloseModal}
                    >
                    SIGN UP
                </button>
            </div>
        </article>
     );
}
 
export default RatingModal;