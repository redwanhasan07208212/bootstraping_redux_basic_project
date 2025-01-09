import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/User/UserSlice";
import { useAppDispatch } from "@/redux/hook";
import { User } from "@/types";
import { Trash2 } from "lucide-react";
interface Iprops {
  user: User;
}
export default function UserCard({ user }: Iprops) {
  const disPatch = useAppDispatch();
  return (
    <div className="border px-6 py-10 rounded-md">
      <div className="flex justify-between items-center">
        <h1>{user.name}</h1>
        <Button
          className="p-0 text-red-500"
          onClick={() => disPatch(deleteUser(user.id))}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}
