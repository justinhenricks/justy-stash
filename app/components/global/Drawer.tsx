import { useEffect, useRef, useState } from "react";

import { Dialog } from "@headlessui/react";

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
function Drawer({
  heading,
  open,
  onClose,
  openFrom = "right",
  closeButtonRef,
  children,
}: {
  heading?: string;
  open: boolean;
  onClose: () => void;
  openFrom: "right" | "left";
  children: React.ReactNode;
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = document.body;

    open ? body.classList.add("nav-open") : body.classList.remove("nav-open");

    const handleClickOutside = (event: MouseEvent) => {
      let shouldClose = false;

      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        shouldClose = true;
      }

      //optionally pass a close button ref to exclude clicks on it from firing
      //the close event because the close button handles its own close.
      if (
        closeButtonRef?.current &&
        closeButtonRef?.current.contains(event.target as Node)
      ) {
        shouldClose = false;
      }

      if (shouldClose) onClose();
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      body.removeEventListener("click", handleClickOutside);
    };
  }, [closeButtonRef, onClose, open]);

  const offScreen = {
    right: "translate-x-full",
    left: "-translate-x-full",
  };

  const classes = `bg-dark text-light flex flex-col justify-center items-center fixed
  ${open ? `translate-x-0` : offScreen[openFrom]}
   transition-all h-full inset-0 w-3/4 shadow-2xl z-99 opacity-95`;

  return (
    <div ref={drawerRef} className={classes}>
      {children}
    </div>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export { Drawer };

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
