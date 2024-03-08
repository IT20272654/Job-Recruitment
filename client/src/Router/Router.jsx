import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../components/Login.jsx";
import Signup from "../components/Signup.jsx";
import About from "../Pages/About.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

/*import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";*/



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/", element:<Home></Home> },
       
      ]
    },

    {
      path:"login",
      element:<Login/>
    },
    {
      path: "/sign-up",
      element: <Signup/>
    },
    { path: "/About", 
    element:<PrivateRoute><About/></PrivateRoute >
    }


   
  ]);

  export default router;