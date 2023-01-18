import React from 'react'
import axios from 'axios'
import './Pages.css'
import { Grid, GridItem,Text,Image } from '@chakra-ui/react'

import {useState,useEffect} from 'react'
import ProductCard from './ProductCard'



const Women=()=>{
const [Data,setData]=useState([])

console.log(Data)

const Fetch=()=>{
    axios.get(`http://localhost:8080/Women_Clothing`)
  .then(function (response) {
    
    setData(response.data);
  })
  .catch(function (error) {
    
    console.log(error);
  })

}

useEffect(()=>{
Fetch()

},[])



    return(
      <div>
        <h1>Women</h1>
        <hr/>

        
        <Grid  templateColumns='repeat(4, 1fr)' gap={0}>

{Data?.map((el)=>(
  <GridItem  key={el.id}  >
  <ProductCard
  image={el.Image_url}
  name={el.name}
  price={el.price}
  brand={el.brand}
  offer={el.offer_price}
  id={el.id}
  
  />
  
  
  </GridItem>

))}



  
 
</Grid>



       
        
        
        
        
        
        </div>)
}
export default Women