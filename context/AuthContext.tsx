"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

function AuthContext({ children, session }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthContext;
