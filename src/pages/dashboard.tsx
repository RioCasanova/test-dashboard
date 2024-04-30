// pages/dashboard.tsx

import styles from "@/styles/Dashboard.module.css";
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
    <div className="">
      {/* <Header imgLink="/dashboard" showLogout={true} /> */}
      <main className={`${styles.mainPadding}`}>
        <Sidebar>
          <div className="">
            {" "}
            <div className="">
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
                icon={<LogOut size={24} color="#FF0000" />}
                onClick={handleLogout}
                text="Logout"
              />
            </div>
          </div>
        </Sidebar>
        <div className="w-full max-w-[659px]">
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
