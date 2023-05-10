import prisma from "@/libs/prismadb";

const getMessage = async (conversationId: string) => {
  try {
    const message = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return message;
  } catch (error: any) {
    return [];
  }
};

export default getMessage;
