"use client";

import { FullMessageType } from "@/type";
import clsx from "clsx";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Avatar from "../Avatar";
import ImageModel from "../model/ImageModel";

type Props = {
  data: FullMessageType;
  isLast?: boolean;
};

function MessageBox({ data, isLast }: Props) {
  const session = useSession();
  const [imageModelOpen, setImageModelOpen] = useState(false);

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx(`flex gap-3 p-4`, isOwn && "justify-end");
  const avatar = clsx(isOwn && "order-2");
  const body = clsx(`flex flex-col gap-2`, isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-sky-500 text-white" : "bg-gray-100 dark:bg-gray-900",
    data.image ? "rounded-md p-0" : "rounded-2xl py-2 px-3"
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={container}
    >
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {data.sender.name}
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-300">
            {format(new Date(data.createdAt), "p")}
          </div>
        </div>
        <div className={message}>
          <ImageModel
            src={data.image}
            isOpen={imageModelOpen}
            onClose={() => setImageModelOpen(false)}
          />
          {data.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              onClick={() => setImageModelOpen(true)}
              src={data.image}
              className="object-cover cursor-pointer hover:scale-110 transition translate"
            />
          ) : (
            <div className="max-w-[350px]">{data.body}</div>
          )}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div className="text-xs font-light text-gray-500 dark:text-gray-400">
            {`Seen by ${seenList}`}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default MessageBox;
