import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router";
import Logo from "../assets/Logo.png";
export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div className=" w-28 h-28 bg-white">
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-5">
        <Link to="tasks">Tasks</Link>
        <Link to="users">Users</Link>
        <Link to="login">Login</Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
