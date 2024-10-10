import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { registerUserApi } from "@/config";
import { Label } from "@radix-ui/react-label"
import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner";


interface FormData{
  userName:string;
  email:string;
  password:string;
}
const AuthRegister = () => {
  const [formData,setFormData]=useState<FormData>({
    userName:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
   // console.log(formData);
   
   try{
const response=await axios.post(registerUserApi,formData,{
  headers:{
    "content-type":"application/json"
  },
  withCredentials:true
});
//console.log(response);
if(response.data.success)
{
  toast.success(response.data.message);
  navigate("/auth/login");
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
        <h2 className="text-3xl font-bold text-center text-gray-800">Create An Account</h2>
        <h3 className="text-sm font-semibold text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-yellow-600 hover:text-yellow-500 transition-colors">
            Login
          </Link>
        </h3>

 
        <div className="space-y-2">
          <Label htmlFor="userName" className="block text-sm font-medium text-gray-700">
            Username
          </Label>
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder="rahul928"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>


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
          Register
        </Button>
      </form>
    </div>
    )
  }
  
  export default AuthRegister
  