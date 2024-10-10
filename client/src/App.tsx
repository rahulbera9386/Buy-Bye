
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
import NotFound from "./pages/not-found"
import UnAuth from "./pages/unauth-page"
import CheckAuth from "./components/Shared/common/check-auth"
import { useSelector } from "react-redux"





const App = () => {


  interface User {
    userName: string;
    email: string;
    role: string;
    id: string;

  }
  interface RootState {
    auth: {
      user: User;
      isAuthenticated: boolean;
    }
  }
  const { user, isAuthenticated } = useSelector((store:RootState) => store.auth);
  console.log(isAuthenticated)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CheckAuth isAuthenticated={isAuthenticated} user={user} />,
    },
    {
      path: "/auth",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: "login",
          element: <AuthLogin />
        },
        {
          path: "register",
          element: <AuthRegister />
        }
      ]
    },
    {
      path: "/admin",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      ),
      children: [
        {
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
        }
      ]
    },
    {
      path: "/shop",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: "home",
          element: <ShoppingHome />
        },
        {
          path: "listing",
          element: <ShoppingListing />
        },
        {
          path: "checkout",
          element: <ShoppingCheckout />
        },
        {
          path: "account",
          element: <ShoppingAccount />
        }
      ]
    },
    {
      path: "/unauth-page",
      element: <UnAuth />
    }
    ,
    {
      path: "*",
      element: <NotFound />
    }
  ]);
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
