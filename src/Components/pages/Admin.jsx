
import { useState ,useContext} from 'react';
import axios from 'axios';
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    HStack,
    Select,
  } from '@chakra-ui/react';




import { Context } from '../Contextapi';
import { Navigate } from 'react-router-dom';




  
  export default function Admin() {
    const {Auth}=useContext(Context)

//admindata obj

    const [adminvalue,setadminvalue]=useState({})
    console.log(adminvalue)

    const handleChange=(e)=>{
    setadminvalue({...adminvalue,[e.target.name]:e.target.value})
    
    }
    //storein array of object
    //const[Store,setStore]=useState([])
let type=''
    const handleUpdate=()=>{
         if(adminvalue.category=="mencloth"){
             type="Mens_Clothing"
        }
       else if(adminvalue.category=="womencloth"){
            type="Women_Clothing"
        }
        else if(adminvalue.category=="kidcloth"){
            type="Kids_Clothing"
        }

        axios.post(`http://localhost:8080/${type}`, {
            Image_url:adminvalue.Image_url,
            brand:adminvalue.brand,
            name:adminvalue.name,
            discount:"(25% off)",
            orginal_price:adminvalue.orginal_price,
            offer_price:adminvalue.offer_price
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    }

    if(Auth==false){
        alert("Please Login ")
        return <Navigate to='/login'/>

    }
    


    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Update the Products</Heading>
            <HStack>
            <FormControl id="brand">
              <FormLabel>Brand</FormLabel>
              <Input name='brand' onChange={handleChange} type="text" />
            </FormControl>
            <FormControl id="name">
              <FormLabel>Product Name</FormLabel>
              <Input name='name' onChange={handleChange} type="text" />
            </FormControl>
            
            </HStack>
            <HStack>
            <FormControl id="price">
              <FormLabel>Original Price</FormLabel>
              <Input name='orginal_price' onChange={handleChange} type="number" />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Offer Price</FormLabel>
              <Input name='offer_price' onChange={handleChange} type="number" />
            </FormControl>
           
            
            </HStack>
<HStack>
            <FormControl id="category">
            <FormLabel>Category</FormLabel>
            <Select name='category' onChange={handleChange}>
            <option value={'NA'}>Select Category</option>
            <option value={'mencloth'}>Men Clothing</option>
            <option value={'womencloth'}>Women Clothing</option>
            <option value={'kidcloth'}>Kids Clothing</option>
            </Select>
          </FormControl>
            <FormControl id="url">
              <FormLabel>Image Link</FormLabel>
              <Input name='Image_url' onChange={handleChange} type="text" />
            </FormControl>
            </HStack>
            
              <Button onClick={handleUpdate} colorScheme={'blue'} variant={'solid'}>
                Update
              </Button>
            </Stack>
          
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }


    


    