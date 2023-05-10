import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { pusherServer } from "@/libs/pusher";
import { NextResponse } from "next/server";

interface IParams {
  conversationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { conversationId } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const exitingConversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    if (!exitingConversation) {
      return new NextResponse("Invalid Id", { status: 400 });
    }

    const deleteConversation = await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id],
        },
      },
    });

    exitingConversation.users.forEach((user) => {
      if (user.email) {
        pusherServer.trigger(
          user.email,
          "conversation:remove",
          exitingConversation
        );
      }
    });

    return NextResponse.json(deleteConversation);
  } catch (error: any) {
    console.log("🚀 ~ file: route.ts:10 ~ DELETE ~ error:", error.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
