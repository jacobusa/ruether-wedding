"use client";

import { FC, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/classNames";
import { signOutAction } from "@/server/actions";
import { Button } from "./ui/Button";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const navigation = [
  { name: "RSVP Form", href: "/rsvp", icon: IoFlowerOutline },
  { name: "Contact", href: "/contact", icon: CiMail },
];

interface NavbarProps {}
export const Navbar: FC<NavbarProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { viewer } = useQuery(api.users.getViewerInfo) ?? {};
  return (
    <>
      <nav className="fixed top-0 z-50">
        <div>
          <Dialog
            open={sidebarOpen}
            onClose={setSidebarOpen}
            className="relative z-50 "
          >
            <DialogBackdrop
              transition
              className="fixed inset-0  transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 flex">
              <DialogPanel
                transition
                className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
              >
                <TransitionChild>
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                    <button
                      type="button"
                      onClick={() => setSidebarOpen(false)}
                      className="-m-2.5 p-2.5"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-black"
                      />
                    </button>
                  </div>
                </TransitionChild>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto z-50 bg-gray-100 border-r border-primary px-6 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <div className="text-gray-400 flex  justify-center gap-2 items-center">
                      <FaLongArrowAltLeft className="text-primary" />
                      <Link href="/" className="text-primary">
                        Back to Home
                      </Link>
                    </div>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  pathname.includes(item.href)
                                    ? "bg-primary text-white"
                                    : "text-gray-800 hover:bg-primary hover:text-white",
                                  "group flex gap-x-3 rounded-sm p-2 text-sm font-semibold leading-6"
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}

                          {viewer?.admin && (
                            <li key={"users"}>
                              <Link
                                href={"/users"}
                                className={classNames(
                                  pathname.includes("'/users")
                                    ? "bg-primary text-white"
                                    : "text-gray-800 hover:bg-primary hover:text-white",
                                  "group flex gap-x-3 rounded-sm p-2 text-sm font-semibold leading-6"
                                )}
                              >
                                <FaUser
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0"
                                />
                                Users
                              </Link>
                            </li>
                          )}
                        </ul>
                      </li>

                      <li className="-mx-6 mt-auto">
                        <form action={signOutAction}>
                          <Button
                            label="Sign Out"
                            className="!bg-primary !text-white"
                            variant="primary"
                          />
                        </form>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
          <div>
            <div className=" z-40 flex h-16 shrink-0 items-center gap-x-6 border-b bg-primary border-white/5 shadow-sm">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className=" text-white h-full w-full px-4 sm:px-6 lg:px-8"
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
