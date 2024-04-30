import Image from "next/image";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { ReactNode, useState, createContext, useContext } from "react";

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

interface Sidebar {
  children: ReactNode;
}

export function Sidebar({ children }: Sidebar) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen sidebar ${expanded ? "w-64" : "w-16"}`}>
      <nav className="h-full flex flex-col bg-white dark:bg-neutral-600 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="/logoipsum-297.svg"
            alt="Company Logo"
            width={expanded ? 128 : 48} // Adjust minimal width when not expanded
            height={32}
            className="overflow-hidden transition-all"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-800"
          >
            {expanded ? (
              <ChevronFirst color="#36454F" />
            ) : (
              <ChevronLast color="#36454F" />
            )}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <Image
            src="/avatar-svgrepo-com.svg"
            alt="Profile Picture"
            className="rounded-md"
            width={40}
            height={10}
          />
          <div
            className={`flex items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-gray-600">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={24} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  icon,
  text,
  active = false,
  alert,
  onClick,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium 
                    rounded-md cursor-pointer transition-colors group
                    ${
                      active
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                        : "hover:bg-indigo-50 text-gray-600"
                    }
                    `}
      onClick={onClick}
    >
      <div className={`flex-shrink-0`}>{icon}</div>
      <span
        className={`ml-3 transition-all duration-300 overflow-hidden ${
          expanded ? "inline max-w-xs" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 
          bg-indigo-100 text-indigo-800 text-sm invisible opacity-0
          transition-opacity group-hover:opacity-100 group-hover:visible
           `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
