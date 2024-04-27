import React from "react";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative max-w-screen-2xl min-h-[720px] px-40 mx-auto max-md:px-4">
      {children}
    </div>
  );
}
