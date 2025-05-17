import React from "react";
import Dropdown from "./dropdown";
import ActiveLink from "./activelink";

const Sidebar = () => {
  return (
    <aside className="bg-zinc-950 w-64 text-white h-screen px-4 py-6 flex flex-col items-center">
      <nav className="flex flex-col">
        <h2 className="text-lg">
          <a href="/">Getting Started</a>
        </h2>
        <div className="flex flex-col space-y-2">
          <ActiveLink href="/installation">Installation</ActiveLink>

          <Dropdown
            label="Buttons"
            items={[{ label: "Base Button", href: "/component/button/base" }]}
          />
          <Dropdown
            label="Cards"
            items={[
              { label: "Carousal3d", href: "/component/card/carousal3d" },
              { label: "Untouchable", href: "/component/card/untouchable" },
            ]}
          />
          <Dropdown
            label="Others"
            items={[
              { label: "Tooltip", href: "/component/tooltip" },
              { label: "Typewriter", href: "/component/typewriter" },
              { label: "sidebar", href: "/component/sidebar" },
            ]}
          />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
