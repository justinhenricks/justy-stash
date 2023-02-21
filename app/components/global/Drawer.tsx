import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import { IconClose } from "../elements";

/**
 * Drawer component that opens on user click.
 * @param heading - optional string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 * @param mobileFullScreen - boolean. if true - full screen on mobile, if false width set to 75vw and top sits below header. good for reusing the open button from header as a close button.
 */
function Drawer({
  heading,
  open,
  onClose,
  openFrom = "right",
  children,
  mobileFullScreen = false,
}: {
  heading?: string;
  mobileFullScreen?: boolean;
  open: boolean;
  onClose: () => void;
  openFrom: "right" | "left";
  children: React.ReactNode;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = document.body;

    open ? body.classList.add("nav-open") : body.classList.remove("nav-open");

    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      body.removeEventListener("click", handleClickOutside);
    };
  }, [onClose, open]);

  const offScreen = {
    right: "translate-x-full",
    left: "-translate-x-full",
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            ref={drawerRef}
            className="fixed inset-0 bg-dark bg-opacity-25"
          />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`fixed ${
                mobileFullScreen ? "top-0" : "top-header"
              } bottom-0 flex max-w-full ${
                openFrom === "right" ? "right-0" : ""
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom={offScreen[openFrom]}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo={offScreen[openFrom]}
              >
                <Dialog.Panel
                  className={`w-screen ${
                    mobileFullScreen ? "max-w-lg" : "max-w-[75vw]"
                  } lg:max-w-lg text-left align-middle transition-all transform shadow-xl h-screen-dynamic bg-dark text-light`}
                >
                  {heading ? (
                    <header
                      className={`sticky top-0 flex items-center px-6 h-12 sm:px-8 md:px-12 ${
                        heading ? "justify-between" : "justify-end"
                      }`}
                    >
                      {heading !== null && (
                        <Dialog.Title>
                          <span>{heading}</span>
                        </Dialog.Title>
                      )}
                      <button
                        type="button"
                        className="p-4 -m-4 transition text-light hover:text-light/50"
                        onClick={onClose}
                        data-test="close-cart"
                      >
                        <IconClose aria-label="Close panel" />
                      </button>
                    </header>
                  ) : null}

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export { Drawer };
