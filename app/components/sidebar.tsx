import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Dropdown from "./dropdown";
import ActiveLink from "./activelink";

export function AppSidebar() {
  return (
    <Sidebar className="mt-10">
      <SidebarContent className="bg-zinc-900 w-full absolute text-white h-screen  py-6 flex flex-col items-center ">
        <SidebarGroup />
        <nav className="flex flex-col ">
          <h2 className="text-lg">
            <a href="/">Getting Started</a>
          </h2>
          <SidebarGroup />
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
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}
