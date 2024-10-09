
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./components/Shared/Auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/Shared/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/Shared/shopping-view/layout"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingAccount from "./pages/shopping-view/account"

const router = createBrowserRouter([
 
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{
      path: "login",
      element: <AuthLogin />
    },
    {
      path: "register",
      element: <AuthRegister />
    }]
  },
   {
    path: "/admin",
    element: <AdminLayout />,
    children: [{
      path: "dashboard",
      element: <AdminDashboard />
    },
    {
      path: "products",
      element: <AdminProducts />
    },
    {
      path: "orders",
      element: <AdminOrders />
    },
    {
      path: "features",
      element: <AdminFeatures />
    }]
  },
  {
    path:"/shop",
    element:<ShoppingLayout/>,
    children:[{
      path:"home",
      element:<ShoppingHome/>
    },
    {
      path:"listing",
      element:<ShoppingListing/> 
    },
    {
      path:"checkout",
      element:<ShoppingCheckout/>
    },
    {
      path:"account",
      element:<ShoppingAccount/>
    }
  
  ]
  }
])

const App = () => {
  return (
    <>
    
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
