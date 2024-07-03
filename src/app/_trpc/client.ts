import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/tRPCServer";

export const tRPC = createTRPCReact<AppRouter>({});
