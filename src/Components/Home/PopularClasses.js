import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import { AiFillStar } from 'react-icons/ai';



const PopularClasses= () => {
    const URL = "http://localhost:4000/api/v1/classes/1"


    const [ item, setItem ] = useState()
  
      useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setItem(request.data)
          })
      }, [ ])
  
      /* console.log(item); */



    return ( 
        item ?
        <section className="mt-[20px] mx-[20px] flex justify-center items-center flex-col">
            <article className="">
                <figure className="bg-OffWhite h-[24rem] rounded-[1.2em] relative overflow-hidden">
                    <img src={item.asset.url} alt="" className="h-full object-cover"/>
                    <div className="bg-Yellow w-[250px] h-[80px] p-[20px] absolute rounded-tr-[3em] bottom-0 left-0">
                        <p className="font-semibold">{item.className}</p>
                        <ul className="flex flex-row">
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                        </ul>
                    </div>
                </figure>
            </article>
        </section> : <p>Loading</p>
     );
}
 
export default PopularClasses;