import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { useEffect, useState } from "react"
import axios from "axios"
import { Context } from "../Contextapi"
import { useContext } from "react"
import Alertwrong from './Alertwrong'
import { Navigate } from "react-router-dom"

const Login=()=>{
    const{Auth,Signintosystem}=useContext(Context)

    const[log,setlog]=useState(true)

//singupdata
const [SignUpdata,SetSignUpdata]=useState([])
//console.log(SignUpdata)

// console.log(SignIndata.map((el)=>(
//     el.Email=='shoebkhan@masai.com'
// )))

const handlechange=(e)=>{
   SetSignUpdata({...SignUpdata,[e.target.name]:e.target.value})
}

const Submit=()=>{

    axios.post('http://localhost:8080/Singup', SignUpdata
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      SetSignUpdata([])
      setlog(true)





}



//signupend


//signdata
const[SignIndata,SetsignIndata]=useState([])
console.log(SignIndata)

useEffect(()=>{

    axios.get('http://localhost:8080/Singup')
    .then(function (response) {
      // handle success
      SetsignIndata(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



},[handlechange])






const [SigninCred,setSignincred]=useState({})
//console.log(SigninCred)
const SignHandle=(e)=>{

    setSignincred({...SigninCred,[e.target.name]:e.target.value})

}

//checkwheather the json data match with login credentioal stored in Signincred






//signinend






//const [Auth,setAuth]=useState(false)
//console.log(Auth)

//console.log('email',emailAuth,'pass',passAuth)

// const Signintosystem=()=>{
//     // e.preventDefault()

    




if(Auth){
    alert('Login succefull')
    return <Navigate to='/'/>
}


    const displaysingup=()=>{
       setlog(false)
    }
    const displaySignin=()=>{
        setlog(true)
    }



 if(log){
    return (
        <>
        <SignIn onClick={displaysingup}
    onsubmit={()=>Signintosystem(SignIndata,SigninCred)}
    Signhandle={SignHandle}
    
    
    />
   
    
    

    
        
        </>
    )
 }
    
return <SignUp 
onClick={displaySignin}
onChange={handlechange}
onsubmit={Submit}

/>

}
export default Login