import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";



interface User {
    id: string;
   role:string
    // Add any other properties that the user object contains
  }
interface CheckAuthProps {
    isAuthenticated: boolean;
    user: User; 
    children?:React.ReactNode;
  }
  
  const CheckAuth:React.FC<CheckAuthProps>=({ isAuthenticated, user, children })  => {
    const location = useLocation();
    const navigate = useNavigate();

useEffect(()=>{
    if (location.pathname === "/") {
        if (!isAuthenticated) {
navigate("/auth/login")
        }
        else {
            if (user?.role === "admin") {
                navigate("/admin/dashboard")
            }
            else {
                navigate("/shop/home")
            }
        }
    }
    if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        navigate("/auth/login")
    }
    if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        if (user?.role === "admin") {
            navigate("/admin/dashboard")
        }
        else {
            navigate("/shop/home")
        }
    }
    if (isAuthenticated && (location.pathname.includes("/admin"))) {
        navigate("/unauth-page")
    }
    if (isAuthenticated &&
        user?.role === "admin" &&
        location.pathname.includes("shop")) {
        navigate("/admin/dashboard")
    }
    
},[isAuthenticated,user,location,navigate])

return <>{children}</>; 
}


export default CheckAuth;