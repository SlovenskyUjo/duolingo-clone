import { auth } from "@clerk/nextjs";

const adminIds = [
  "user_2e5mmfJHhIv9CRwdoq6YvhBRX64",
]

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
}