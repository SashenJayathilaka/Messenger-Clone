import getConversations from "@/actions/getConversations";
import getUser from "@/actions/getUsers";
import ClientOnly from "@/components/ClientOnly";
import ConversationList from "@/components/ConversationList";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUser();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ClientOnly>
          <ConversationList users={users} initialItems={conversations} />
        </ClientOnly>
        {children}
      </div>
    </Sidebar>
  );
}
