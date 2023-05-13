"use client";

import { User } from "@prisma/client";
import Image from "next/image";

type Props = {
  name?: string | null;
};

function AvatarGroup({ name }: Props) {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <img src={`https://ui-avatars.com/api/?name=${name}`} alt="Avatar" />
      </div>
    </div>
  );
}

export default AvatarGroup;
