// pages/dashboard.tsx

import { Dashboard } from "@/components/Dashboard";
import PageTitle from "@/components/PageTitle";
import { Sidebar, SidebarItem } from "@/components/Sidebar";

import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const handleLogout = async () => {
  await signOut({ callbackUrl: "/" }); // Redirect to the homepage
};

const DashboardPage: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div>
      {/* <Header imgLink="/dashboard" showLogout={true} /> */}
      <main className="flex  bg-gradient-to-b from-violet-900 to-violet-100">
        <Sidebar>
          <div>
            {" "}
            <div>
              <SidebarItem
                icon={<LayoutDashboard size={24} />}
                text="Dashboard"
                alert
              />
              <SidebarItem icon={<UserCircle size={24} />} text="Profile" />
              <SidebarItem icon={<Receipt size={24} />} text="Invoices" />
              <SidebarItem icon={<Boxes size={24} />} text="Products" />
              <SidebarItem icon={<Package size={24} />} text="Orders" alert />
              <SidebarItem icon={<BarChart3 size={24} />} text="Analytics" />
            </div>
            <div className="">
              <hr className="border-t border-gray-200 dark:border-neutral-700 mb-50" />
              <SidebarItem icon={<LifeBuoy size={24} />} text="Support" />
              <SidebarItem icon={<Settings size={24} />} text="Settings" />
              <SidebarItem
                icon={<LogOut size={24} color="#880808" />}
                onClick={handleLogout}
                text="Logout"
              />
            </div>
          </div>
        </Sidebar>
        <div className="w-full p-6">
          <PageTitle title="Dashboard" message="Welcome back, John Doe!" />
          <Dashboard />
        </div>
        {/* <div className="w-full p-8 flex flex-col">
          
          <div className="dash-analytics flex flex-wrap gap-4">

            <div className="flex-1 min-w-[200px] p-4 bg-gray-100 rounded-lg">
              Container 1
            </div>

            <div className="flex-1 min-w-[200px] p-4 bg-gray-100 rounded-lg">
              Container 2
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-gray-100 rounded-lg">
              Container 3
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-gray-100 rounded-lg">
              Container 4
            </div>
            <div className="flex-1 min-w-[200px] p-4 bg-gray-100 rounded-lg">
              Container 5
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default DashboardPage;
