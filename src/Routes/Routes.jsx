import { Route ,Routes} from "react-router-dom";
import Home from "../Components/pages/Home";
import Men from "../Components/pages/Men";
import Women from "../Components/pages/Women";
import Kids from "../Components/pages/Kids";
import HomeandKitchen from "../Components/pages/HomeandKitchen";
import Indie from "../Components/pages/Indie";
import SingleProduct from '../Components/pages/SingleProduct'



let Route_arr=[
{path:"/" ,element:<Home/>},
{path:"/men" ,element:<Men/>},
{path:"/men/:id" ,element:<SingleProduct type="Mens_Clothing"/>},
{path:"/women" ,element:<Women/>},
{path:"/women/:id" ,element:<SingleProduct type="Women_Clothing"/>},
{path:"/kids" ,element:<Kids/>},
{path:"/kids/:id" ,element:<SingleProduct type="Kids_Clothing"/>},
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

