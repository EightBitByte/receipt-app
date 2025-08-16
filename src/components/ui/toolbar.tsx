import { UserRound } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="flex flex-row justify-between px-4 pt-4">
      <h1>Receipt App</h1>
      <div className="md:flex flex-row gap-4 hidden">
        <h2>Login</h2>
        <h2>Sign Up</h2>
      </div>
      <UserRound className="md:hidden"/>
    </div>
  )
}