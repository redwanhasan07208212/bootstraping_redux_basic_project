import { User } from "@/types";
import { Trash2 } from "lucide-react";
interface Iprops {
  user: User;
}
export default function UserCard({ user }: Iprops) {
  return (
    <div className="border px-6 py-10 rounded-md">
      <div className="flex justify-between items-center">
        <h1>{user.name}</h1>
        <Trash2 className="text-red-400" />
      </div>
    </div>
  );
}
