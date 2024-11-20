import { createBrowserRouter } from "react-router-dom"
 
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import ProductDetail from "../pages/ProductDetail"
import Dashboard from "../pages/Dashboard"
import Cards from "../components/Cards"
import CardDetails from "../components/CardDetails"
import Cart from "../components/Cart"
import Whishlist from "../components/Utilities/Whishlist"
import Error from "../components/Error"
 


const routes =createBrowserRouter([
    {
      path:'/',
      element:<MainLayout />, 
     errorElement:<Error/>,
      children:[
        {
          path: '/',
          element:<Home />,
          loader:()=>fetch('../category.json'),
          errorElement:<Error/>,
          children:
          [
            {
              path:'/',
              element:<Cards />,
              loader:()=>fetch('../gadget.json'),
              errorElement:<Error/>,
           },
            {
              path:'/Cards/:category',
             element:<Cards />,
             loader:()=>fetch('../gadget.json'),
             errorElement:<Error/>,
          },
       
            
          ]
        },

        {
          path:'/carddetails/:id',
         element:<CardDetails/>,
         errorElement:<Error/>,
          loader:()=>fetch('../gadget.json'),
          
          
         },

         {
          path: '/Statistics',
          element:<Statistics />,
          errorElement:<Error/>,
         },
         {
          path:'/ProductDetail',
          element:<ProductDetail />,
          errorElement:<Error/>,
         },
         {
          path:'Dashboard',
          element:<Dashboard />,
          errorElement:<Error/>,
          children:
          [
            {
              path:'Cart',
              element:<Cart/>,
              errorElement:<Error/>,
            }, 
            {
              path:'Dashboard',
              element:<Cart/>,
              errorElement:<Error/>,

            }, 
            {
              path:'Whishlist',
              element:<Whishlist/>,
              errorElement:<Error/>,

            }, 
          ]
        
         },
      ]
       
      
    },
  
  
  ])
  export default routes