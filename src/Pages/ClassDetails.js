import React, { useState, useEffect } from 'react';
import axios from "axios";
import { AiFillStar } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import ReHeaderComponent from '../Components/ClassDetails/ReHeaderComponent';
import ReBackButton from '../Components/ClassDetails/ReBackButton';
import SingleTrainer from '../Components/ClassDetails/SingleTrainer';



const ClassDetails = () => {

    
    const URL = "http://localhost:4000/api/v1/classes/"
    const [ item, setItem ] = useState()
    
    const { id } = useParams()

      useEffect(() => {
          axios({
              url: URL + id,
              method: "GET",
          }).then(request => { 
              setItem(request.data)
          })
      }, [ ])
    
    
    return ( 
        item ?
        <main>
            <div className="h-screen">
                <figure className="relative h-[60%]">
                    <div className="absolute top-0 w-full">
                        <ReHeaderComponent reBackButton={<ReBackButton />} />
                    </div>
                    <img 
                        src={item.asset.url} 
                        alt=""  
                        className="h-full object-cover"/>
                        <h1 className="text-Yellow text-36 font-bold absolute bottom-[20%] left-[20px]">
                            {item.className}
                        </h1>
                    <div className="text-24 flex flex-row justify-between items-center absolute bottom-[5%] text-white w-full px-[20px]">
                        <ul className="flex flex-row items-center text-Yellow space-x-2">
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li><AiFillStar/></li>
                            <li className="ml-[0px]">3/5</li>
                        </ul>
                        <button className="border-4 border-Yellow text-Yellow rounded-full p-[10px] px-[40px]">Rate</button>
                    </div>
                </figure>

                <section className="px-[20px] mt-[20px]">
                    <article className="text-18">
                        <p className="font-semibold">{item.classDay} - {item.classTime}</p>
                        <p>{item.classDescription}</p>
                    </article>

                    <SingleTrainer trainer={item.trainer.id} />
                </section>

            </div>

        </main> : <p>Loading</p>
     );
}
 
export default ClassDetails;