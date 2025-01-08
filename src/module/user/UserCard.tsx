import { Trash2 } from "lucide-react";

export default function UserCard() {
  return (
    <div className="border px-6 py-10 rounded-md">
      <div className="flex justify-between items-center">
        <h1>Redwan</h1>
        <Trash2 className="text-red-400" />
      </div>
    </div>
  );
}
