import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
//   const IMAGE =
//     'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductCard(
{
image,
name,
price,
brand,
offer,
id,


}
  ) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
        //   border='1px solid black'
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          h='500px'
          >
          
          <Box
        //   border='1px solid none'
         
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'400px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
            //   backgroundImage: `url(${IMAGE})`,
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
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={0} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {brand}
            </Text>
            <Heading fontSize={'20px'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              ₹{offer}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }