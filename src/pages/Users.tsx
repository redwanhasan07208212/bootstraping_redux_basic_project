import AddUserModal from "@/module/user/AddUserModal";
import UserCard from "@/module/user/UserCard";
import { selectUser } from "@/redux/features/User/UserSlice";
import { useAppSeletor } from "@/redux/hook";

export default function Users() {
  const users = useAppSeletor(selectUser);
  return (
    <div className="mx-auto max-w-7xl mt-20">
      <div className="flex justify-end items-center">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {users?.length > 0 ? (
          users.map((user) => <UserCard user={user} key={user.id} />)
        ) : (
          <p>NO Users Avaiable</p>
        )}
      </div>
    </div>
  );
}
