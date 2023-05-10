"use client";

import useActiveList from "@/hooks/useActiveList";
import { User } from "@prisma/client";
import Image from "next/image";

type Props = {
  user?: User;
};

function Avatar({ user }: Props) {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          fill
          src={user?.image || "/assets/placeholder.jpg"}
          alt="Avatar"
        />
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
      )}
    </div>
  );
}

export default Avatar;
