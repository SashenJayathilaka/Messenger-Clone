import ActiveStatus from "@/components/ActiveStatus";
import AuthContext from "@/context/AuthContext";
import ToastContainerBar from "@/context/ToastContainerBar";
import "../styles/globals.css";

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone",
  icons:
    "https://dl.dropboxusercontent.com/s/lx1m3kzfl8hell3/Facebook-Messenger-logo-2020.webp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToastContainerBar />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
