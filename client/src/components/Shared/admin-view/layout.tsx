import { Outlet } from "react-router-dom"
import AdminSidebar from "./sidebar"
import AdminHeader from "./header"
import { useState } from "react";




function AdminLayout() {
  const [openSidebar,setOpensidebar]=useState(false);
  console.log("state:",openSidebar);
  return (
    <div className="flex min-h-screen w-full">
        {/* Admin Sidebar */}
        <AdminSidebar open={openSidebar} setOpen={setOpensidebar}/>
  
        <div className="flex flex-1 flex-col">
            {/* Admin header */}
            <AdminHeader setOpen={setOpensidebar}/>
            
           <main className="flex-1 flex p-4 md:p-6 bg-muted/40 ">
            <Outlet/>
           </main>
        </div>
      
    </div>
  )
}

export default AdminLayout
