import AddUserModal from "@/module/user/AddUserModal";
import UserCard from "@/module/user/UserCard";

export default function Users() {
  return (
    <div className="mx-auto max-w-7xl mt-20">
      <div className="flex justify-end items-center">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>
      <div className="space-y-5 mt-5 w-1/3">
        <UserCard />
      </div>
    </div>
  );
}
