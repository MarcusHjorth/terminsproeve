import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ContextState } from "../Context/Context";

import TrainLikeAPro from "../Components/LogIn/TrainLikaAPro";
import Header from "../Templates/Header";

const schema = yup.object({
    email: yup.string("Enter a valid email address").required("Enter a valid email address").
        max(64, "Enter a valid email address"),
        /* matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Enter a valid email address"
        ), */
        /* Email validering /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ */
    password: yup.string().required("Enter a valid password").
        min(4, "Invalid password" ).
        max(32, "Invalid password" ),
        /* matches("^(?=.*[aA-zZÅ-ÿ])(?=.*[0-9])",
            "Invalid password"
        ), */
}).required()


const LogInPage = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    }); 
    const context = useContext( ContextState )
    
    const onSubmit = data => {
        console.log(data)
        context.setEmail(data.email)
        context.setPassword(data.password)
        context.setIsLoggedIn(true)
    }

    const Auth = "http://localhost:4000/auth/token"
    const URL = "http://localhost:4000/api/v1/users/1"
    const [ token, setToken ] = useState()
    const [ user, setUser ] = useState("")

      useEffect(() => {
          axios({
              url: Auth,
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: {
                username: context.email,
                password: context.password,
              },
          }).then(response => { 
              setUser(response.data)
              console.log(user);
          })
      }, [ ])

      useEffect(() => {
        axios({
            url: URL,
            method: "GET",
            headers: {
              Authorization: `Bearer ${user}`
            },
        }).then(response => { 
            setToken(response.data)
            console.log(token);
        })
    }, [ ])
      

    return ( 
        <main>
            <Header />
            <TrainLikeAPro />

            <section className="mx-[20px] mt-[2rem]">
                <h1 className="text-20 font-bold">Log in with your credentials</h1>

                <form className="flex flex-col items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p> {errors.email?.message} </p>
                    <input 
                    type="text" 
                    placeholder="Enter your email..." 
                    className="outline-none bg-OffWhite mt-[10px] py-[1rem] font-semibold rounded-full w-full border-LightGray border-2 pl-[15px]"
                        {...register("email")}
                    />

                    <p> {errors.password?.message} </p>
                    <input 
                    type="password" 
                    placeholder="Enter your password..." 
                    className="outline-none bg-OffWhite mt-[10px] py-[1rem] font-semibold rounded-full w-full border-LightGray border-2 pl-[15px]"
                        {...register("password")}
                    />
                    
                    <input 
                        type="submit" 
                        value="LOG IN" 
                        className="bg-Yellow mt-[10px] py-[1rem] font-semibold rounded-full w-full"/>
                </form>
            </section>
        </main>
     );
}
 
export default LogInPage;