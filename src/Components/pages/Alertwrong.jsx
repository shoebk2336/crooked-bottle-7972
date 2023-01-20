import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
  } from '@chakra-ui/react'


const Alertwrong=()=>{
    //const {show}=useContext(Context)
    return(

        <Box>
        <Alert status='error' >
  <AlertIcon />
  <AlertTitle>Email/Password is Wrong!</AlertTitle>
  <AlertDescription>Please Check Your Credentials.</AlertDescription>
</Alert>
        
        
        </Box>
    )
}
export default Alertwrong