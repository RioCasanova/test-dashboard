import Image from "next/image";
import { ReactNode, useState, createContext, useContext } from "react";

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({ expanded: false });

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`transition-all duration-300 ${expanded ? "w-64" : "w-16"}`}
    >
      <nav className="h-full flex flex-col bg-black dark:bg-gray-800 shadow-lg">
        <div className="p-4 flex justify-between items-center">
          {expanded && (
            <Image
              src="/datalynx.png"
              alt="Company Logo"
              width={180}
              height={40}
              className="overflow-hidden transition-all"
            />
          )}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rounded-lg bg-gray-900 text-white dark:bg-gray-700 hover:bg-gray-600"
          >
            {expanded ? (
              <i className="fa-solid fa-chevron-left"></i>
            ) : (
              <i className="fa-solid fa-chevron-right"></i>
            )}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 flex flex-col items-center justify-center space-y-4">
            {children}
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  caption?: string;
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

interface SidebarItemProps {
  caption?: string;
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  caption,
  icon,
  text,
  active = false,
  alert,
  onClick,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  return (
    <div className="w-full">
      {caption && expanded && (
        <p className="text-xs text-gray-400 mt-10 ms-4">{caption}</p>
      )}
      <li
        className={`relative flex items-center py-3 px-4 font-medium
                    rounded-lg cursor-pointer transition-all duration-200
                    ${
                      active
                        ? "bg-indigo-200 text-indigo-800"
                        : "hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-600"
                    }
                    justify-start group`}
        onClick={onClick}
      >
        <div className="text-lg">{icon}</div>
        <span
          className={`ml-3 transition-all duration-200 overflow-hidden whitespace-nowrap
                      ${expanded ? "inline-block" : "hidden"}`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400`}
          ></div>
        )}
        {!expanded && (
          <div
            className={`absolute left-full ml-2 rounded-md bg-indigo-100 text-indigo-800 text-sm px-2 py-1 opacity-0
            group-hover:opacity-100 z-40 transition-opacity`}
          >
            {text}
          </div>
        )}
      </li>
    </div>
  );
}
