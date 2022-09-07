import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ContextState } from "../Context/Context";

import TrainLikeAPro from "../Components/LogIn/TrainLikaAPro";
import Header from "../Templates/Header";

const schema = yup.object({
    email: yup.string().email("Enter a valid email address").required("Enter a valid email address").
        max(64, "Enter a valid email address").
        matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Enter a valid email address"
        ),
    password: yup.string().required("Enter a valid password").
        min(6, "Invalid password" ).
        max(32, "Invalid password" ).
        matches("^(?=.*[aA-zZÅ-ÿ])(?=.*[0-9])",
            "Invalid password"
        ),
}).required()


const LogInPage = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
        
    const context = useContext( ContextState )
    
    const onSubmit = data => {
        
        console.log(data)
        
       /*  context.setEmail(data.email)
        context.setPassword(data.password) */
    }


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