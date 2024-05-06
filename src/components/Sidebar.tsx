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
      <nav className="h-full flex flex-col bg-[#030C29] dark:bg-gray-800 shadow-lg p-2">
        <div className="p-4 flex justify-between items-center mt-5">
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
            className="p-2 ms-2 rounded-lg text-white dark:bg-gray-700 hover:bg-gray-600"
          >
            {expanded ? (
              <i className="fa-solid fa-chevron-left"></i>
            ) : (
              <i className="fa-solid fa-chevron-right"></i>
            )}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 flex flex-col space-y-4">{children}</ul>
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
        <p className="text-xs text-gray-600 mt-10 mb-3 ms-4">{caption}</p>
      )}
      <li
        className={`relative flex items-center py-3 px-4 font-medium
                    rounded-lg cursor-pointer transition-all duration-300
                    ${
                      active
                        ? "bg-indigo-200 text-indigo-800"
                        : "hover:bg-gray-600 dark:hover:bg-gray-700 text-gray-300"
                    }
                    justify-start group`}
        onClick={onClick}
      >
        <div className="text-lg">{icon}</div>
        <span
          className={`ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap
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
            className={`absolute left-full ml-2 rounded-md text-sm px-2 py-1 opacity-0
            group-hover:opacity-100 z-40 transition-opacity`}
          >
            {text}
          </div>
        )}
      </li>
    </div>
  );
}
