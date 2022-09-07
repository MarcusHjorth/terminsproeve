import React, { useState, useEffect } from 'react';
import axios from "axios";


const MyScheduleComponent = () => {
    const URL = "http://localhost:4000/api/v1/classes/1"
    const [ items, setItems ] = useState()

    useEffect(() => {
        axios({
            url: URL,
            method: "GET",
        }).then(request => { 
            setItems(request.data)
          })
      },[])

      console.log(items);

    return ( 
        <section className="w-full h-[10rem] px-[20px] border-1 border-DarkGray ">
            <div className="h-[10rem] p-[10px] border-2 rounded-[15px] border-DarkGray flex flex-col justify-around  ">
                <h1 className="text-24 font-bold">{items.className}</h1>
                <div className="flex flex-row w-[20rem] space-x-4 text-18 font-semibold">
                    <p>{items.classDay}</p>
                    <p>- {items.classTime}</p>
                </div>
            </div>
        </section>
     );
}
 
export default MyScheduleComponent;