import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";

import Header from '../Templates/Header';
import PopularClasses from '../Components/PopularClasses';
import ClassesForYou from '../Components/ClassesForYou';

const HomePage = () => {
    const URL = "http://localhost:4000/api/v1/classes/1"


    const [ assets, setAssets ] = useState()
  
      /* useEffect(() => {
          axios({
              url: URL,
              method: "GET",
          }).then(request => { 
              setAssets(request.data)
          })
      }, [ ])
  
      console.log(assets); */
  
  

    return ( 
        <main className="mx-[20px] mt-[20px]">
            <Header />

        {/* ----------- Popular classes ----------- */}
            <PopularClasses />


        {/* ----------- Classes for you ----------- */}
           <ClassesForYou />

            
        </main>
     );
}
 
export default HomePage;