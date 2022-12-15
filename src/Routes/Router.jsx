import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
    ],
  },
]);

export default router;
