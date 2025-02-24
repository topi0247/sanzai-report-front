import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router";

export const HeaderMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>メニュー</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NavLink to="#" end>
                昔の散財
              </NavLink>
            </NavigationMenuLink>
            <Separator />
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NavLink to="#" end>
                散財グラフ
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
