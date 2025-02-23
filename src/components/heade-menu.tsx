import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router";

export const HeaderMenu = () => {
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