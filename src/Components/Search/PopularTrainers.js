import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"

const PopularTrainers = () => {
    const URL = "http://localhost:4000/api/v1/trainers"


    const [ items, setItems ] = useState()
  
      useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setItems(request.data)
            })
        }, [ ])
        
        console.log(items)

        /* const [ width, setWidth ] = useState(0) */
        const carousel = useRef()
  
        useEffect(() =>{
          console.log(carousel.current, "hello");
          /* setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth) */
        }, [])
        /* console.log(items); */

    return ( 
        <section className="mt-[20px] mx-[20px] flex flex-col">
             <h1 className="my-[20px] text-20 font-bold">Popular Trainers</h1>

               {/* Carousel ----- */}
               <ul ref={carousel} className="flex flex-col">

                {items && Object.values(items).map(({trainerName, asset, id}, i ) => {
                    /* const id = Object.keys(items)[i] */
                    return <Link key={ i } to={`/Classes/${id}`}>

                        {/* List object ------- */}
                        <li className="mr-[20px] pointer-events-none ">
                            <figure className=" rounded-br-none overflow-hidden flex flex-row items-center my-[10px]">
                                <img src={asset.url} alt="" className=" object-cover h-[6rem] w-[6rem] rounded-[1.2em] "/>
                                <p className="font-semibold text-20 ml-[20px]">{trainerName}</p>
                            </figure>
                        </li>
                    </Link>
                })}
            </ul>

        </section>
     );
}
 
export default PopularTrainers;