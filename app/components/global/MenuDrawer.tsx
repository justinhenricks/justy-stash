import { Link } from "@remix-run/react";
import { startTransition } from "react";

import { Drawer } from "./Drawer";

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
  closeButtonRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: Menu;
  closeButtonRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <Drawer
      closeButtonRef={closeButtonRef}
      open={isOpen}
      onClose={onClose}
      openFrom="left"
      heading="Links"
    >
      <MenuMobileNav menu={menu} onClose={onClose} />
    </Drawer>
  );
}

function MenuMobileNav({ menu, onClose }: { menu: Menu; onClose: () => void }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <nav className="flex w-full flex-col items-center justify-center gap-5 p-6 text-4xl font-bold sm:gap-6 sm:px-12 sm:py-8">
        {/* Top level menu items */}
        {(menu?.items || []).map((item) =>
          item.href ? (
            <a href={item.href} key={item.id}>
              {item.title}
            </a>
          ) : (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              onClick={() => startTransition(onClose)}
            >
              {item.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
