import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { ContextState } from "../../Context/Context";
import { Link, useNavigate } from 'react-router-dom';


const MyScheduleComponent = () => {
    const context = useContext( ContextState )
    const URL = `http://localhost:4000/api/v1/users/${context.userID}`
    const [ items, setItems ] = useState()
    const navigate = useNavigate();
    
    useEffect(() => {
        if (context.isLoggedIn === true) {
            axios({
                url: URL,
                method: "GET",
                headers: {
                Authorization: `Bearer ${context.token}`
                },
            }).then(request => {
                setItems(request.data) 
            })
        } else {
            navigate('/home', { replace: true });
        }
    }, [ ])

    return ( 
        items ? 
            <section className="w-full px-[20px] border-1 border-LightGray ">
                {items && Object.values(items?.classes).map(({className, classDay, classTime, id, trainerId}, i ) => {
                    return <Link key={ i } to={`/Classes/${id}`} trainer={trainerId}>
                            <div className="h-[8rem] p-[20px] border-2 rounded-[15px] mt-[1rem] border-LightGray bg-OffWhite flex flex-col justify-around  ">
                                <h1 className="text-24 font-bold">{className}</h1>
                                <p className="w-[20rem] space-x-4 text-18 font-medium"
                                    >{classDay} - {classTime}</p>
                            </div>
                        </Link>
                    })} 
        </section> : <p>loading..</p>
    );
}
 
export default MyScheduleComponent;