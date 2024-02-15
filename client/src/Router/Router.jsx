import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import JobPostingData from "../sidebar/JobPostingData";
import PostJob from "../Pages/PostJob";
import JobDetails from "../Pages/JobDetails";
import About from "../Pages/About";
import Search from "../Pages/Search";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/",
         element:<Home></Home>
        },
        { path: "/post-job", 
        element:<PostJob/>
        },
        { path: "/job/:id", 
        element:<JobDetails/>
        },
        { path: "/Search", 
        element:<Search/>
        }
      ],
    },
  ]);

  export default router;




