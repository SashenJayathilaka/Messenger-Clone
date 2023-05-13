"use client";

import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons/lib";

type Props = {
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
};

function MobileItem({ href, icon: Icon, active, onClick }: Props) {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900`,
        active && "bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}

export default MobileItem;
