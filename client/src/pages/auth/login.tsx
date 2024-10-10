import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import { Link } from "react-router-dom"

interface FormData{
 
  email:string;
  password:string;
}
const AuthLogin = () => {
  const [formData,setFormData]=useState<FormData>({
  
    email:"",
    password:""
  });

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(formData);
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
  