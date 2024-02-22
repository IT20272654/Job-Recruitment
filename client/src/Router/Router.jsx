import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AdminAdd from "../Pages/AdminAdd";
import UserHome from "../Pages/UserHome";
import About from "../Pages/About";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getStorage } from "firebase/storage";

import firebaseConfig from "../config";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);








const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/", element:<Home></Home> },
        { path: "/adduser", element:<AdminAdd></AdminAdd> },
        { path: "/userhome", element:<UserHome></UserHome> },
        { path: "/about", element:<About></About> }
      ]
    },
  ]);

  export default router;