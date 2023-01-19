import { createContext,useState } from "react";




export const Context=createContext()




const ContextProvider=({children})=>{
    const [Page,setPage]=useState(1)
    const [qty,setQty]=useState(0)
    console.log(qty)

const Next=()=>{
    setPage(Page+1)
}
const Prev=()=>{
    setPage(Page>1?Page-1:1)
}

// const Add=()=>{
//     setQty(qty+1)
// }
// const Red=()=>{
//     setQty(qty>0?qty-1:0)
// }






return(
<Context.Provider value={{Page,Next,Prev}}>{children}</Context.Provider>


)


}
export default ContextProvider