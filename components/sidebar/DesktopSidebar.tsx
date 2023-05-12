"use client";

import useRoutes from "@/hooks/useRoutes";
import { User } from "@prisma/client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Avatar from "../Avatar";
import SettingsModal from "../model/SettingsModal";
import DesktopItem from "./DesktopItem";

type Props = {
  currentUser: User;
};

function DesktopSidebar({ currentUser }: Props) {
  const routes = useRoutes();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white dark:lg:bg-black lg:border-r-[1px] dark:lg:border-r-gray-600 lg:pb-4 lg:flex lg:flex-col justify-between">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
            <div>
              {resolvedTheme === "dark" ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onClick={() => setTheme("light")}
                  className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <MdLightMode size={30} className="h-6 w-6 shrink-0" />
                </motion.button>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  onClick={() => setTheme("dark")}
                  className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <MdDarkMode size={30} className="h-6 w-6 shrink-0" />
                </motion.button>
              )}
            </div>
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default DesktopSidebar;
