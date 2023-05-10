import getConversationById from "@/actions/getConversationById";
import getMessage from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Body from "@/components/conversations/Body";
import Form from "@/components/conversations/Form";
import Header from "@/components/conversations/Header";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversations = await getConversationById(params.conversationId);
  const messages = await getMessage(params.conversationId);

  if (!conversations) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversations} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
