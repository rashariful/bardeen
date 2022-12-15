import { createBrowserRouter } from "react-router-dom";
import AllArticle from "../Components/Pages/Articles/AllArticle";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch(
            "https://newsapi.org/v2/everything?q=Apple&from=2022-12-15&sortBy=popularity&apiKey=87abcc4dd9984d1e8815eaf80b82b2ce"
          );
        },
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch(
            "https://newsapi.org/v2/everything?q=Apple&from=2022-12-15&sortBy=popularity&apiKey=87abcc4dd9984d1e8815eaf80b82b2ce"
          );
        },
      },
      {
        path: "/articles",
        element: <AllArticle></AllArticle>,
        loader: async () => {
          return fetch(
            "https://newsapi.org/v2/everything?q=Apple&from=2022-12-15&sortBy=popularity&apiKey=87abcc4dd9984d1e8815eaf80b82b2ce"
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
