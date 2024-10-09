
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Shared/Home/Home"
import AuthLayout from "./components/Shared/Auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[{
      path:"login",
      element:<AuthLogin/>
    },
  {
    path:"register",
    element:<AuthRegister/>
  }]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
