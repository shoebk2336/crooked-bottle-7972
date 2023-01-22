import { HStack, Stack, VStack,Image,Box,Text, Heading, Button, Input } from "@chakra-ui/react"
import { useContext,useReducer,useState } from "react"
import { Navigate } from "react-router-dom"
import { Context } from "../Contextapi"










const Cart=()=>{
    



    
    

    const {Cart,Auth}=useContext(Context)
    console.log('cart',Cart)
    

    
let total=0
Cart.map((el)=>(
    total= (total+(Number(el.offer_price)))
    
))
console.log(total,'toal')

const[aaa,setaaa]=useState(total)
console.log(Math.floor(aaa))

const[coupon,setcoupon]=useState('')
const handlechange=(e)=>{
    setcoupon((e.target.value))

}

const Coupon=()=>{
    if(coupon=="Masai10"){
        alert("Coupon Applied Successfully")
        total=total*0.9
        setaaa(total)
    }


}
const Checkout=()=>{
// {Auth?alert("Congratulation Your Order Placed Successfully"):alert('Please Login To Proceed')}
// alert("Order Placed Successfully")
if(Auth==true){
    alert("Congratulation Your Order Placed Successfully")
    return<Navigate to='/'/>
}
else if(Auth==false){
    alert('Please Login To Proceed')
    return<Navigate to='/login'/>
}

}

if(Cart.length==0){
    return<Heading>Please Add Some Products</Heading>
}


    return(
        <div>
        
    <hr/>
    <HStack border={'0px solid black'} spacing={'5%'}>
    <VStack border={'0px solid green'}
    alignItems={"flex-start"}
    w={"60%"}
    >
   {Cart?.map((el)=>(
<HStack key={el.id} border={'0px dotted black'}
display={"flex"}
justifyContent={'space-between'}
p={"10"}
w={"100%"}

>
//image
<Box 
border={'0px solid red'}
w={"50%"}
>
<Image w={'full'} src={el.Image_url}/>
</Box>
//brand
<VStack border={'0px dotted black'}
alignSelf={"flex-start"}
mt={"10"}
>
<Text fontWeight={'600'} fontStyle={"italic"}>{el.brand}</Text>
<Text fontWeight={'500'} as='h1'>{el.name}</Text>
<HStack>
<Text fontWeight={'500'} gap={'10'}>size:{el.Size}</Text>
<Text fontWeight={'500'} display={'flex'} gap={"2"}>
Qty: <Box border={'0px solid gold'} w={'5'}
>{el.qty}</Box>
</Text>

</HStack>

</VStack >
//Price
<VStack border={'0px dotted green'}
alignSelf={"flex-start"}
alignContent={"end"}
textAlign={"left"}
mt={"10"}
>
<Text fontWeight={'500'}
fontFamily={"heading"}
textAlign={"left"}
p={"1"}
w={"100px"}
border={'px solid blue'}
bg={'blue.400'}
textAlign={"center"}

>Rs {el.offer_price} only</Text>
<HStack>
<Text
fontWeight={'400'}
textDecor={"line-through"}


>₹{el.orginal_price}</Text><Text> {el.discount}</Text>

</HStack>



</VStack>

</HStack>

   ))}
    
    
    
    </VStack>
//price and checkout


<VStack w={'30%'} alignSelf={"flex-start"}>
<VStack border={'2px dotted gold'}
alignSelf={"flex-start"}
w={'100%'}
bg={"gray.100"}
>
<Heading fontFamily={'serif'} fontSize={"30"} p={"5"}>Order Details</Heading>
<br/>
<HStack display={'flex'} spacing={"150"}  >
<VStack alignItems={'flex-start'}>
<Text fontWeight={"semibold"} fontFamily={"serif"}>Cart Total</Text>
<Text fontWeight={"semibold"} fontFamily={"serif"}>Cart Discount</Text>
<Text textDecor={'underline'} fontWeight={"semibold"} fontFamily={"serif"}>Convenience Fee</Text>
<Text fontWeight={"semibold"} fontFamily={"serif"}>Delivery Fee</Text>
<br/>
<Text fontWeight={"semibold"} fontFamily={"serif"}>Order Total</Text>

</VStack>
//value
<VStack alignItems={'flex-start'} alignContent={"flex-end"}>
<Text fontWeight={"medium"} fontFamily={"serif"}>₹{total}</Text>
<Text color={'gray.500'} fontWeight={"medium"} fontFamily={"serif"}>-₹{total*0.75}</Text>
<br/>
<HStack>
<Text color={'gray.500'} fontWeight={"400"} fontFamily={"serif"}>Free</Text>
<Text textDecor={'line-through'} color={"black"}> ₹99</Text>
</HStack>
<br/>
<Text fontWeight={"medium"} fontFamily={"serif"} >₹{aaa}</Text>

</VStack>


</HStack>
<br/>

<Box p={'10'}>
<Button onClick={Checkout} w={'350px'} h={"40px"} bg={"gold"}>PROCEED TO SHIPPING</Button>
</Box>


</VStack>

//coupon
<VStack p={'5'} border={"1px dotted black"}>
<Heading alignSelf={"flex-start"} fontFamily={'serif'} fontSize={"20"}>Apply Coupon</Heading>
<HStack >


<Input onChange={handlechange} w={'150%'} placeholder="Enter coupon code"/>
<Button onClick={Coupon} bg={'gold'} w={'80%'}>APPLY</Button>


</HStack>
</VStack>

</VStack>






    </HStack>



       </div>
    )
       
}
// <VStack border={'2px dotted gold'}
// alignSelf={"flex-start"}
// w={'30%'}
// bg={"gray.100"}
// >
// <Heading fontFamily={'serif'} fontSize={"30"} p={"5"}>Order Details</Heading>
// <br/>
// <HStack display={'flex'} spacing={"150"}  >
// <VStack alignItems={'flex-start'}>
// <Text fontWeight={"semibold"} fontFamily={"serif"}>Cart Total</Text>
// <Text fontWeight={"semibold"} fontFamily={"serif"}>Cart Discount</Text>
// <Text textDecor={'underline'} fontWeight={"semibold"} fontFamily={"serif"}>Convenience Fee</Text>
// <Text fontWeight={"semibold"} fontFamily={"serif"}>Delivery Fee</Text>
// <br/>
// <Text fontWeight={"semibold"} fontFamily={"serif"}>Order Total</Text>

// </VStack>
// //value
// <VStack alignItems={'flex-start'} alignContent={"flex-end"}>
// <Text fontWeight={"medium"} fontFamily={"serif"}>₹{total}</Text>
// <Text color={'gray.500'} fontWeight={"medium"} fontFamily={"serif"}>-₹{total*0.75}</Text>
// <br/>
// <HStack>
// <Text color={'gray.500'} fontWeight={"400"} fontFamily={"serif"}>Free</Text>
// <Text textDecor={'line-through'} color={"black"}> ₹99</Text>
// </HStack>
// <br/>
// <Text fontWeight={"medium"} fontFamily={"serif"} >₹{total}</Text>

// </VStack>


// </HStack>
// <br/>

// <Box p={'10'}>
// <Button w={'350px'} h={"40px"} bg={"gold"}>PROCEED TO SHIPPING</Button>
// </Box>


// </VStack>
export default Cart

