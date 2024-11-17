import { createBrowserRouter } from "react-router-dom"
 
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import ProductDetail from "../pages/ProductDetail"
import Dashboard from "../pages/Dashboard"
import Cards from "../components/Cards"


const routes =createBrowserRouter([
    {
      path:'/',
      element:<MainLayout />, 
     
      children:[
        {
          path: '/',
          element:<Home />,
          loader:()=>fetch('../category.json'),
          children:
          [
            {path:'/Cards/:category',
             element:<Cards />,
             loader:()=>fetch('../gadget.json'),
          },
            
          ]
        },
         {
          path: '/Statistics',
          element:<Statistics />,
         },
         {
          path:'/ProductDetail',
          element:<ProductDetail />,
         },
         {
          path:'/Dashboard',
          element:<Dashboard />,
         },
      ]
       
      
    },
  
  
  ])
  export default routes