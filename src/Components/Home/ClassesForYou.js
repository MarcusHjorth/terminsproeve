import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const ClassesForYou = () => {

    const URL = "http://localhost:4000/api/v1/classes"
    const [ items, setItems ] = useState()
  
      useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setItems(request.data)
          })
      }, [ ])

    /*   const [ width, setWidth ] = useState(0) */
      const carousel = useRef()

      useEffect(() =>{
        console.log(carousel.current, "hello");
        /* setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth) */
      }, [])


    return ( 
        items ?
        <section className="mt-[20px] mx-[20px] overflow-hidden">
            <h1 className="my-[20px] text-20 font-bold">Classes for you</h1>

            {/* Carousel ----- */}
            <motion.ul ref={carousel} className="flex flex-row "
            drag="x"
            dragConstraints={{right: 0, left: 300 }}
            >
                {items && Object.values(items).map(({className, asset, id, trainer}, i ) => {
                    /* const id = Object.keys(items)[i] */
                    return <Link key={ i } to={`/Classes/${id}`} trainer={trainer.id}>
                        {/* List object ------- */}
                        <li className="mr-[20px] pointer-events-none ">
                            <figure className="bg-OffWhite h-[10rem] w-[10rem] rounded-[1.2em] rounded-br-none relative overflow-hidden">
                                <img src={asset.url} alt="" className="h-full object-cover"/>
                                <div className="bg-Yellow w-[10rem] h-[4rem] p-[1em] absolute rounded-tr-[3em] bottom-0 left-0">
                                    <p className="font-semibold text-14">{className}</p>
                                    <ul className="flex flex-row">
                                        <li><AiFillStar/></li>
                                        <li><AiFillStar/></li>
                                        <li><AiFillStar/></li>
                                    </ul>
                                </div>
                            </figure>
                        </li>
                    </Link>
                })}
            </motion.ul>
        </section> : <p>Loading</p>
     );
}
 
export default ClassesForYou;