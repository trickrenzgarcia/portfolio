import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function pageCounter(): Promise<number | undefined> {
  const currentPageCounter = await prisma.pageCounter.findFirst({
    where: {
      id: 1,
    },
  });

  if (currentPageCounter) {
    const updatedCount = currentPageCounter.count + 1;

    await prisma.pageCounter.update({
      where: {
        id: 1,
      },
      data: {
        count: updatedCount,
      },
    });
  }

  const pageCount = await prisma.pageCounter.findFirst({
    where: {
      id: 1,
    },
    select: {
      count: true,
    },
  });

  return pageCount?.count;
}
