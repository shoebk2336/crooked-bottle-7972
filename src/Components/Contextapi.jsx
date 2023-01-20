import { createContext,useState } from "react";
import Alertwrong from "./pages/Alertwrong";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { Navigate } from "react-router-dom";





export const Context=createContext()




const ContextProvider=({children})=>{
    const [Page,setPage]=useState(1)
   // const [qty,setQty]=useState(0)
   // console.log(qty)

const Next=()=>{
    setPage(Page+1)
}
const Prev=()=>{
    setPage(Page>1?Page-1:1)
}



const[Auth,setAuth]=useState(false)



const Signintosystem=(signindata,signincred)=>{

(signindata.map((el)=>{
    if(el.Email==signincred.Email&&el.Password===signincred.Password){
       return setAuth(true)
    } 
}
))






    //console.log ('contextdata',signindata,signincred)
}


        //bagData


        const Bagdata=(data)=>{
            console.log('bag',data)
        }
        
       










return(
<Context.Provider value={{Page,Next,Prev,Signintosystem,Auth,Bagdata}}>
{children}</Context.Provider>


)


}
export default ContextProvider