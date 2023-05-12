import ActiveStatus from "@/components/ActiveStatus";
import AuthContext from "@/context/AuthContext";
import ThemeProvider from "@/context/ThemeProvider";
import ToastContainerBar from "@/context/ToastContainerBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone",
  icons:
    "https://dl.dropboxusercontent.com/s/lx1m3kzfl8hell3/Facebook-Messenger-logo-2020.webp",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <AuthContext session={session}>
          <ThemeProvider>
            <ToastContainerBar />
            <ActiveStatus />
            {children}
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
