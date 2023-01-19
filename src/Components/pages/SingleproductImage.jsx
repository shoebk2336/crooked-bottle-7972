import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  


  export default function SingleProductImage({image}) {

    
    return (
      <Center py={12}>
        <Box
        //border={'1px solid red'}
          role={'group'}
          p={6}
          maxW={'480px'}
          w={'full'}
          
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          h='600px'>
          <Box
          //border={'1px solid black'}
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'600px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={'full'}
              width={'full'}
             
              src={image}
            />
          </Box>
        
        </Box>
      </Center>
    );
  }