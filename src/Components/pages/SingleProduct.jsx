import { Stack,Box,Text,Button } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import SingleProductImage from "./SingleproductImage"
 import { FiShoppingCart } from "react-icons/fi";
 import { Context } from "../Contextapi"


const SingleProduct=({type})=>{

    const[qty,setqty]=useState(0)
    //const [selectsize,setselectsize]=useState(32)
   // console.log(selectsize)
const [Data,setData]=useState({})
const[Size,setSize]=useState(32)
    
    

   //console.log(Data)
   const {id}=useParams()
   //console.log(id)


const Fetch=()=>{

axios.get(`http://localhost:8080/${type}/${id}`)
.then((response)=>
setData(response.data)
)



}

useEffect(()=>{

Fetch()

},[])




const {Image_url,brand,discount,name,orginal_price,offer_price}=Data

//cartData

const {Cartdata}=useContext(Context)


let Cartobj={
    Image_url,
    brand,
    discount,
    orginal_price,
    offer_price:+(offer_price),
    qty:+(qty),
    Size,
    id,
    name,
   

}
//onsole.log('price',orginal_price)


return <>


<hr/>

<Stack direction={'row'} spacing={300}>
<Box>

<SingleProductImage image={Image_url}/>

</Box>
<Box
//border={'1px solid black'}
pt={10}
w={"350px"}
>

<Text fontSize={15} 
fontWeight={500}
color={"gold"}

>{brand}</Text>
<Text
fontSize={20} 
fontWeight={500}
color={"black"}
>{name}</Text>
<Text fontSize={18}
mt={"5"}
fontWeight={500}
>Price ₹{offer_price}</Text>
<Stack direction={'flex'} gap='16px'  justifyContent={'center'} mt={"15px"}>
<Text
textDecoration={'line-through'}

>MRP {orginal_price} </Text>
<Text>{discount}</Text>

</Stack>


<Box mt={'5'}>
<Text fontWeight={'500'} >Sizes</Text>
<Stack mt={"3"} direction={'flex'} gap='3' justifyContent={'center'}>
<Box onClick={()=>setSize(28)} p={'2'} name='size' border={'2px solid grey'} borderRadius={'25'}>28</Box>
<Box onClick={()=>setSize(30)} p={'2'} name='size' border={'2px solid grey'} borderRadius={'25'}>30</Box>
<Box onClick={()=>setSize(32)} p={'2'} name='size' border={'2px solid grey'} borderRadius={'25'}>32</Box>
<Box onClick={()=>setSize(34)} p={'2'} name='size' border={'2px solid grey'} borderRadius={'25'}>34</Box>




</Stack>

</Box>

<Box p={'5'}>
<Text fontWeight={'500'}>Select Quantity</Text>
<Stack p={'2'} direction={'row'} spacing={"4"} justifyContent={'center'}>
<Box onClick={()=>setqty(qty>0?qty-1:0)} border={'1px solid black'} w={'25px'} h={"25px"} borderRadius={"50px"} textAlign={'center'}  as={'button'}>-</Box>

<Text>{qty}</Text>
<Box onClick={()=>setqty(qty+1)} border={'1px solid black'} w={'25px'} h={"25px"} borderRadius={"50px"} textAlign={'center'} as={'button'}>+</Box>


</Stack>



</Box>

<Box>

<Button onClick={()=>Cartdata(Cartobj)}   gap={'5'} w={'300px'} bg={"gold"} >   ADD TO BAG  <FiShoppingCart/></Button>
</Box>




<Stack direction={'column'}
textAlign={"left"}
p={"10"}
fontSize={'15'}
color={'black'}
mt={"10"}
border={"1px dotted gold"}
fontWeight={"450"}
fontStyle={"italic"}
>
<Text fontSize={"15"} fontWeight={"500"}>Product Details:</Text>
<ul>
<li textAlign={'justify'} >Disclaimer: Product Colour May Slightly Vary
Due to Photographic Lighting Sources or Your
 Monitor Settings.</li>
<li>IVOC Men's Overdyed Cargo Trousers</li>
<li>29</li>
<li>Slim Fit</li>
<li>100% Cotton</li>
<li>Product Code: 461394178001</li>



</ul>



</Stack>


</Box>


</Stack>






</>
}
export default SingleProduct