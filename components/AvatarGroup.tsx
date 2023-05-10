"use client";

import { User } from "@prisma/client";
import Image from "next/image";

type Props = {
  users?: User[];
};

function AvatarGroup({ users = [] }: Props) {
  const sliceUsers = users.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative h-11 w-11">
      {sliceUsers.map((user, index) => (
        <div
          key={index}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${
            positionMap[index as keyof typeof positionMap]
          }`}
        >
          <Image
            fill
            src={user?.image || "/assets/placeholder.jpg"}
            alt="Avatar"
          />
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;
