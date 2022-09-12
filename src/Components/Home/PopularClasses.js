import React, { useState, useEffect } from 'react';
import axios from "axios";
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const PopularClasses= () => {
    const URL = "http://localhost:4000/api/v1/classes/"
    const [ item, setItem ] = useState()
    const [ index, setIndex ] = useState(0)
    
    
    useEffect(() => {
        axios({
            url: URL,
            method: "GET",
        }).then(request => { 
            setItem(request.data)
            setIndex(randomItem)
        })
    }, [  ])
    
    let randomItem = item && Math.floor(Math.random() * item.length)

    return ( 
        item ?
        <section className="mt-[20px] mx-[20px] flex justify-center items-center flex-col">
            <Link to={`/Classes/${item[randomItem].id}`} trainer={item[randomItem].trainer.id}>
                
                <article className="">
                    <figure className="bg-OffWhite h-[24rem] rounded-[1.2em] relative overflow-hidden">
                        <img src={item[randomItem].asset.url} alt="" className="h-full object-cover"/>
                        <div className="bg-Yellow w-[250px] h-[80px] p-[20px] absolute rounded-tr-[3em] bottom-0 left-0">
                            <p className="font-semibold">{item[randomItem].className}</p>
                            <ul className="flex flex-row">
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                        </div>
                    </figure>
                    
                </article>
            </Link>
        </section> : <p>Loading</p>
     );
}
 
export default PopularClasses;