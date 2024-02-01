import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../components/Login";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/", element:<Home></Home> },
        //{ path: "/about", element:<About></About> }
      ]
      
    },
       //thisura
    {
      path:"/login",element: <Login/>
    }
   //end
  ]);
      
      
      

  export default router;