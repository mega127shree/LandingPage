import React from 'react';
import {Link} from "react-router-dom";
import '../Styles/Style.css';
 import {Images} from './Images';
const Findmore = ()=>{
     
    return(
<div className="findMore">
    <div className="howwework">
        <h1>Find out more <br/>about how we work</h1>
         {/* <picture>
                <source 
                media="(max-width:400px)"
                srcSet={Images.howWeWorkMobile}/>
                <source media="(min-width:401px )" srcSet={Images.howWeWork} />
                <img src={Images.howWeWork} alt="how-we-work"/>
               </picture> */}
    </div>
    <div className="button">
               <div><Link to="/">HOW WE WORK</Link></div>
              
     </div>    
      </div>
 
    );
}
export default Findmore;
 

    