import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import JobPostingData from "../sidebar/JobPostingData";
import PostJob from "../Pages/PostJob";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/", element:<Home></Home> },
        { path: "/post-job", 
        element:<PostJob/>
        }
      ],
    },
  ]);

  export default router;