import { Button } from "@/components/ui/button"
import { LogOut, Menu } from "lucide-react"

type AdminHeaderProps={
  setOpen:(open: boolean)=>void;
}

const AdminHeader= ({setOpen}:AdminHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-6  border-b">
<Button className="lg:hidden sm:block" onClick={()=>setOpen(true)}>
<Menu/>
<span className="sr-only">Tooggle Menu</span>
</Button>
<div className="flex justify-end flex-1">
  <Button className="flex items-center rounded px-4 py-2 gap-2 shadow">
    <LogOut className=""/>
    Logout
  </Button>
</div>
    </header>
  )
}

export default AdminHeader
