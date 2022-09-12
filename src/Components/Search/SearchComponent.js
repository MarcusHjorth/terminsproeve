import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom"
/* import { AiFillStar } from 'react-icons/ai'; */

import ClassesForYou from '../Home/ClassesForYou';
import PopularTrainers from './PopularTrainers';

const SearchComponent = () => {
    const URL = "http://localhost:4000/api/v1/trainers"
    const URLClasses = "http://localhost:4000/api/v1/classes"

    const [ items, setItems ] = useState()
    const [ setSearchTerm ] = useState()
    const [ filteredData, setFilteredData ] = useState([])

      useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setItems(request.data)
            })
        },[])

        useEffect(() => {
            axios({
                url: URLClasses,
                method: "GET",
            }).then(request => { 
                setItems(request.data)
              })
          },[])
        
        console.log( items && items);

        const handleFilter = (event) => {
            const search = event.target.value
            const newFilter = items.filter((value) => {
                return value.trainerName.toLowerCase().includes(search.toLowerCase())
            })
            setFilteredData(newFilter)
        }

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
                <div className="px-[20px] rounded-full bg-OffWhite border-LightGray border-2 p-[10px] pl-[15px] flex flex-row items-center">
                    <BsSearch className="text-DarkGray mr-[10px]"/>
                    <input type="text" placeholder="Search classes" className="outline-none bg-OffWhite w-full"
                        onChange={handleFilter}
                    />
                </div>

                {/* <section>
                    {items && filteredData.map(({className, trainer, asset, id, value}, i) => {
                        return <Link key={ i } to={`/Classes/${id}`} trainer={trainer.id}>
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
                </section> */}
                </div>
                <ClassesForYou />

                <section className="mx-[20px] mt-[3rem]">
                    <h1 className="my-[20px] text-24 font-bold">Popular Trainers</h1>

                    {items && filteredData.map(({trainerName, asset, id, value}, i) => {
                        return <Link key={ i } to={`/Classes/${id}`}>
                            <li className="mr-[20px] pointer-events-none list-none">
                                <figure className=" rounded-br-none overflow-hidden flex flex-row items-center my-[10px]">
                                    <img src={asset.url} alt="" className=" object-cover h-[6rem] w-[6rem] rounded-[1.2em] "/>
                                    <p className="font-semibold text-20 ml-[20px]">{trainerName}</p>
                                </figure>
                            </li>
                        </Link>
                    })}

                </section>

        
            {/* <form id="form">
                <input type="text" id="form-text" />
                <button type="submit">Submit</button>
                </form>

                <p id="results"></p> */}

            {/* <ClassesForYou />

            <PopularTrainers /> */}

        </section>
     );
    }
    
    export default SearchComponent;
    
                