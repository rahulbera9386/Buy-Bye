
import { BadgeCheck, LayoutDashboard, ShieldCheck, ShoppingBasket} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

const SideBarContent=()=>{
  const [activeTab,setActiveTab]=useState("dashboard");
const navigate=useNavigate();
  return(
    <div> {
    adminSidebarMenuItems.map((item)=>(
      <div key={item.id} className={`flex items-center  hover:bg-gray-100 hover:text-gray-800 hover:shadow hover:rounded cursor-pointer ${activeTab===item.id?"bg-gray-100  text-gray-800 shadow-md":"text-gray-500"}
      `} onClick={()=>{navigate(item.path); setActiveTab(item.id);}}>
<div className="flex gap-3 items-center py-4 px-8">
      {item.icon}
      <span className={`font-bold`}>{item.label}</span>
    </div>
      </div>
    ))
  }
  </div>)
}


const AdminSidebar=() => {

  return (
    <aside className="w-64 p-6 border-r flex-col hidden lg:flex">


      <div className="flex items-center cursor-pointer gap-2">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-8 h-8 font-bold" />
          <span className="text-2xl font-bold whitespace-nowrap">Admin Panel</span>
        </div>
      </div>
      <div className="sidebar-menu mt-11 space-y-2">
       
       <SideBarContent/>
      </div>



    </aside>
  )
}



export default AdminSidebar;
