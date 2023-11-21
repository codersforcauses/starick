import prisma from "./setup";

export const cleanup = async () => {
  await prisma.message.deleteMany();
  await prisma.user.deleteMany();
};

export const teardown = async () => {
  await cleanup();
  await prisma.$disconnect();
};
