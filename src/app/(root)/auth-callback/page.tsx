import {useRouter, useSearchParams} from "next/navigation";
import {tRPC} from "@/app/_trpc/client";


const Page = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const origin = searchParams.get("origin");
	
	const {data} = tRPC.test.useQuery();
};

export default Page;