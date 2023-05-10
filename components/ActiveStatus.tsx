"use client";

import useActiveChannel from "@/hooks/useActiveChannel";

type Props = {};

function ActiveStatus({}: Props) {
  useActiveChannel();

  return null;
}

export default ActiveStatus;
