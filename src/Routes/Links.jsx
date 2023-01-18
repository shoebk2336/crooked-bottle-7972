import {Link} from 'react-router-dom'
import React from 'react'
import All from '../Components/All.module.css'





let arr=[

    {to:"/",element:"Home"},
    {to:"/men",element:"MEN"},
    {to:"/women",element:"WOMEN"},
    {to:"/kids",element:"KIDS"},
    {to:"/indie",element:"INDIE"},
    {to:"/home&kitchen",element:"HOME AND KITCHEN"}
]




const Links=()=>{
    return(
        <div className={All.Links_div}>
        {arr.map((el)=>(
            <Link className={All.Links} key={el.to} to={el.to}>{el.element}</Link>
        ))}
        
        </div>
        )
   
    
    
    
}
export default(Links)