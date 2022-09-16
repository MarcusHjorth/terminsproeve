import React, { useState, useContext, useEffect } from 'react';
import { ContextState } from "../../Context/Context";
import axios from "axios";
import { Link } from 'react-router-dom';

const SignUpWorkout = (props) => {
    const context = useContext( ContextState )
    const URL = `http://localhost:4000/api/v1/users/${context.userID}`
    const [ items, setItems ] = useState()
    const isSignedUp = items && items.classes.some(classes => classes.id == props.id)
    const [ checkSingedUp, setCheckSingedUp ] = useState(false)

    /* Check if the user is signed in */
    useEffect(() => {
        axios({
            url: URL,
            method: "GET",
            headers: {
                Authorization: `Bearer ${context.token}`
            },
        }).then(request => { 
            setItems(request.data)
        })
    }, [ checkSingedUp])

    /* Post the class workout to the user on click */
    const SignUp = () => {        
        fetch(`${URL}/classes/${props.id}`, {
            method:  isSignedUp ?  "DELETE" : "POST",
            headers: {
                Authorization: `Bearer ${context.token}`
            },
            body: "",
        })
        .then((response) => isSignedUp ? response.text() : response.json())
        .then(() => {
            setCheckSingedUp(!checkSingedUp)
        })
        .catch((err) => {
            console.log('Error', err.message);
        })
    }

    return ( 
        <>
            { context.isLoggedIn ? 
                <button className="bg-Yellow mt-[10px] py-[1rem] font-semibold rounded-full w-full"
                    onClick={SignUp} >{isSignedUp ? "Remove" : "Sign Up"}
                </button>

                : 

                <Link to="/Login">
                    <button className="bg-Yellow mt-[10px] py-[1rem] font-semibold rounded-full w-full"
                        >Log in
                    </button>
                </Link>
            }
        </>
     );
}
 
export default SignUpWorkout;