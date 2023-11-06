import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex">
        <SideNav className='flex-[1]'/>
        <main className="flex-[4] bg-slate-200 p-4 flex flex-col gap-4">
            <Outlet/>
        </main>
    </div>
  )
}
