import React from 'react'
import axios from 'axios'
import './Pages.css'
import { SimpleGrid,Text,Image,Box } from '@chakra-ui/react'

import {useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import { Context } from '../Contextapi'
import { useContext } from 'react'
import Pagination from './Pagination'
import {Link} from 'react-router-dom'



const Kids=()=>{
  const {Page,Next,Prev}=useContext(Context)
const [Data,setData]=useState([])

console.log(Data)

const Fetch=(Page)=>{
    axios.get(`http://localhost:8080/Kids_Clothing?_limit=12&_page=${Page}`)
  .then(function (response) {
    
    setData(response.data);
  })
  .catch(function (error) {
    
    console.log(error);
  })

}

useEffect(()=>{
Fetch(Page)

},[Page])



    return(
      <div>
        <h1>Kids</h1>
        <hr/>

        
        <SimpleGrid  columns={[1,2,3,4]} spacing={6}>

{Data?.map((el)=>(
  <Link to={`/kids/${el.id}`}>
  <Box  key={el.id}  >
  <ProductCard
  image={el.Image_url}
  name={el.name}
  price={el.price}
  brand={el.brand}
  offer={el.offer_price}
  id={el.id}
  
  />
  
  
  </Box>
  </Link>

))}



  
 
</SimpleGrid >

<div style={{display:"flex",marginTop:"-250px",justifyContent:"center"}}>
<div>

<Pagination data='PREV' btn={Prev}/>
</div>

<Pagination data={Page} />

<div>

<Pagination data='NEXT' btn={Next}/>
</div>


</div>




       
        
        
        
        
        
        </div>)
}
export default Kids