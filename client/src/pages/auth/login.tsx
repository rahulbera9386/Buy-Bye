import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { loginUserApi } from "@/config";
import { setUser } from "@/redux/auth-slice";
import { Label } from "@radix-ui/react-label"


import axios from "axios";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner";

interface FormData{
 
  email:string;
  password:string;
}

const AuthLogin = () => {
  const [formData,setFormData]=useState<FormData>({
  
    email:"",
    password:""
  });
  interface User {
    userName: string;
    email: string;
    role: string; 
  }
  interface RootState {
    auth: {
      user:User
    };
  }
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { user } = useSelector((store:RootState) => store.auth);
 // console.log("rdk",user)

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    //console.log(formData);
    try{
      const response=await axios.post(loginUserApi,formData,{
        headers:{
          "content-type":"application/json"
        },
        withCredentials:true
      });
      //console.log(response);
      if(response.data.success)
      {
        toast.success(response.data.message);
        dispatch(setUser(response.data.user));
        if(user.role === "user")
        {
          navigate("/shop/home")
        }
        else{
          navigate("/admin/dashboard")
        }
      }
    }
         catch(err)
         {
          console.log(err);
          if (axios.isAxiosError(err) && err.response) {
            toast.error(err.response.data.message);
          } else {
            toast.error('An unexpected error occurred while trying to register');
          }
         }
    
  }
    return (
      <div className="flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="bg-white p-6  w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login to your Account</h2>
        <h3 className="text-sm font-semibold text-center text-gray-600">
          New to Buy-Bye ?{' '}
          <Link to="/auth/register" className="text-yellow-600 hover:text-yellow-500 transition-colors">
           SignUp
          </Link>
        </h3>

       
       

       
        <div className="space-y-2">
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="rahul@gmail.com"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

       
        <div className="space-y-2">
          <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="****"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Register Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition-colors focus:ring-4 focus:ring-blue-300"
        >
          Login
        </Button>
      </form>
    </div>
    )
  }
  
  export default AuthLogin
  