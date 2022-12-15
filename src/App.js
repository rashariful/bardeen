import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";


function App() {
  return (
    <div className="bg-slate-50">
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
