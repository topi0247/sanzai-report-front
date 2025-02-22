import { ModeToggle } from "@/components/mode-toggle";
import { NavLink, Outlet } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { FaXTwitter } from "react-icons/fa6";

const HeaderMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>メニュー</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <NavLink to="#" end>
                hoge
              </NavLink>
            </NavigationMenuLink>
            <Separator />
            <NavigationMenuLink>
              <NavLink to="#" end>
                hoge
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const Report = () => {
  return (
    <div className="flex min-h-screen w-full flex-col px-4 pt-4">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <h1 className="text-2l font-bold">
          <NavLink to="/" end>
            散財れぽ！
          </NavLink>
        </h1>
        <div className="flex items-center gap-2">
          <HeaderMenu />
          <ModeToggle />
        </div>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="flex justify-end gap-2">
        <span className="inline-block">©2025 とぴ</span>
        <a
          href="https://x.com/topi_log"
          target="_blank"
          className="flex items-center justify-center"
        >
          <FaXTwitter />
        </a>
      </footer>
    </div>
  );
};
