import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BsSearch } from 'react-icons/bs';
import ClassesForYou from '../Home/ClassesForYou';
import PopularTrainers from './PopularTrainers';


const SearchComponent = () => {
    const URL = "http://localhost:4000/api/v1/trainers"


    const [ items, setItems ] = useState()
    const [ setSearchTerm ] = useState()
      useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setItems(request.data)
            })
        },[])
        
        /* 
        console.log(item)
 */
    /*     const search = (value) => array.filter(obj => Object.values(obj).some(val => (new RegExp(value, "i")).test(val)))
        
    
        document.querySelector("#form").addEventListener("submit", (e) => {
        e.preventDefault();
        // display purposes
        const listEl = document.querySelector("#results");
        const formText = document.querySelector("#form-text").value;
        searchResults = formText && search(formText);
        listEl.textContent = searchResults?.length ? searchResults.map(el => el.name) : "No results";
    }) */

    return ( 
        <section className="mx-[20px mt-[20px]">
            <div className="px-[20px]">
                <div className="px-[20px] rounded-full bg-OffWhite border-LightGray border-2 focus:ring-0 p-[10px] pl-[15px] flex flex-row items-center">
                    <BsSearch className="text-DarkGray mr-[10px]"/>
                    <input type="text" placeholder="Search classes" className="outline-none bg-OffWhite"
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                            console.log(items);
                        }}
                    />
                    {/* {items.map((val, key) => {
                        return (
                            <p>dasd</p>
                        )
                    })} */}
                </div>
            </div>

        
            {/* <form id="form">
                <input type="text" id="form-text" />
                <button type="submit">Submit</button>
                </form>

                <p id="results"></p> */}

            <ClassesForYou />

            <PopularTrainers />

        </section>
     );
    }
    
    export default SearchComponent;
    
                