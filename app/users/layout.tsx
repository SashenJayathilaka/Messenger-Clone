import getUser from "@/actions/getUsers";
import ClientOnly from "@/components/ClientOnly";
import UserList from "@/components/UserList";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUser();

  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ClientOnly>
          <UserList items={users} />
        </ClientOnly>
        {children}
      </div>
    </Sidebar>
  );
}
