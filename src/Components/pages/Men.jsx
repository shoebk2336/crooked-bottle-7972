import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Pages.css'
import { SimpleGrid ,Box,flex, Button } from '@chakra-ui/react'

import {useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { Context } from '../Contextapi'



const Men=()=>{

const {Page,Next,Prev}=useContext(Context)
console.log(Page)


const [Data,setData]=useState([])

//console.log(Data)

const Fetch=(Page)=>{
    axios.get(`http://localhost:8080/Mens_Clothing?_limit=16&_page=${Page}`)
  .then(function (response) {
    console.log(response)
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
        
        <hr/>

        
        <SimpleGrid  columns={[1,2,3,4]} spacing={6}>

{Data?.map((el)=>(
  <Link to={`/men/${el.id}`} key={el.id}>
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





<div  style={{display:"flex",marginTop:"-250px",justifyContent:"center"}}>
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
export default Men