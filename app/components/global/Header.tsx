import { Link } from "@remix-run/react";
import React from "react";
import logo from "~/assets/img/logo_white.png";

import { IconAccount, IconMenu, IconMoon, MenuDrawer } from "~/components";
import { useDrawer } from "~/hooks";
interface HeaderProps {
  menu: Menu;
}

export const Header: React.FC<HeaderProps> = ({ menu }) => {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  return (
    <>
      <header
        role="banner"
        className={`bg-dark text-light h-header sticky z-40 top-0 w-full transition shadow-lg`}
      >
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
        <div className="container h-full flex justify-between items-center">
          <button
            className="mobile-hamburger lg:hidden"
            onClick={isMenuOpen ? closeMenu : openMenu}
          >
            <IconMenu
              viewBox="0 0 100 100"
              className={`hamburger-icon h-8 w-8 ${isMenuOpen ? "close" : ""}`}
            ></IconMenu>
          </button>

          <h1 className="max-w-[150px] lg:hidden">
            <Link to={"/"}>
              <img className="h-10" src={logo} alt="SITE NAME" />
            </Link>
          </h1>

          <div className="hidden lg:flex gap-8">
            <h1 className="max-w-[150px]">
              <Link to={"/"}>
                <img className="h-12" src={logo} alt="logo" />
              </Link>
            </h1>

            <div className="desktop-nav items-center gap-4 hidden text-xl font-bold lg:flex">
              {menu.items.map((item) => {
                return item.href ? (
                  <a
                    className="hover:text-accent"
                    href={item.href}
                    key={item.id}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    className="hover:text-accent"
                    key={item.id}
                    to={item.to}
                    target={item.target}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex gap-6">
            <IconMoon className="h-8 w-8 hidden lg:block" />
            <Link className="rounded-full" to="#">
              <IconAccount className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
