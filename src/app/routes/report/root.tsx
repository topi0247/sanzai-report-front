import { ModeToggle } from "@/components/mode-toggle";
import { NavLink, Outlet } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { HeaderMenu } from "@/components/header-menu";

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
      <footer className="mt-8 flex justify-end gap-2">
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
