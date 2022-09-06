import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom"

const SingleTrainer = (props) => {
    const URL = "http://localhost:4000/api/v1/trainers/"

    const [ item, setItem ] = useState()
    const { id } = useParams()
    const [ trainer, setTrainer ] = useState()

    useEffect(() => {
        axios({
            url: URL + Object.values(props),
            method: "GET",
        }).then(request => { 
            setItem(request.data)
            setTrainer(props)
        })
    }, [ ])
    
    return ( 
        item ?
        <section className="mt-[2rem]">
            <h2 className="font-bold text-24">Trainer</h2>
            <figure className=" rounded-br-none overflow-hidden flex flex-row items-center my-[10px]">
                <img src={item.asset.url} alt="" className=" object-cover h-[6rem] w-[6rem] rounded-[1.2em] "/>
                <p className="font-semibold text-20 ml-[20px]">{item.trainerName}</p>
            </figure>
        </section> : <p>Loading</p>
     );
}
 
export default SingleTrainer;