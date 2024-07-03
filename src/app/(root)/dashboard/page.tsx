import { currentUser } from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const Dashboard = async () => {
  const user = await currentUser();
  if(!user || !user.id) {
    redirect("/auth-callback?origin=dashboard");
  }
  return (
    <div>
      {user?.firstName} {user?.lastName}
      {user?.emailAddresses[0].emailAddress}
      {user?.id}
    </div>
  );
};

export default Dashboard;
