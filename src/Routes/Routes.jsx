import { Route ,Routes} from "react-router-dom";
import Home from "../Components/pages/Home";
import Men from "../Components/pages/Men";
import Women from "../Components/pages/Women";
import Kids from "../Components/pages/Kids";
import HomeandKitchen from "../Components/pages/HomeandKitchen";
import Indie from "../Components/pages/Indie";



let Route_arr=[
{path:"/" ,element:<Home/>},
{path:"/men" ,element:<Men/>},
{path:"/women" ,element:<Women/>},
{path:"/kids" ,element:<Kids/>},
{path:"/indie" ,element:<Indie/>},
{path:"/home&kitchen" ,element:<HomeandKitchen/>},



]



const Routing=()=>{

    return(
<Routes>

{Route_arr.map((el)=>(

<Route key={el.path} path={el.path} element={el.element}/>


))}






</Routes>


    )
}
export default Routing

