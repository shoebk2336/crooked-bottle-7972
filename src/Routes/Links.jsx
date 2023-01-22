import {Link} from 'react-router-dom'
import React from 'react'
import All from '../Components/All.module.css'
import { SimpleGrid,Text,Image,Box } from '@chakra-ui/react'
import {  BsFillCartCheckFill } from "react-icons/bs";





let arr=[

    // {to:"/",element:"Home"},
    // {to:"/men",element:"MEN"},
    // {to:"/women",element:"WOMEN"},
    // {to:"/kids",element:"KIDS"},
    // {to:"/indie",element:"INDIE"},
    // {to:"/home&kitchen",element:"HOME AND KITCHEN"},


    {to:"/cart",element:<Box border={'1px solid pink'} p={"2"} bg={"pink.500"} color={"white"} fontWeight={"500"} borderRadius={'7'}><Text><BsFillCartCheckFill/></Text></Box>},


   // {to:"/login",element:"Login"}


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