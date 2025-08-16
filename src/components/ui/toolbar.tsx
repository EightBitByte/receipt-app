import { UserRound } from "lucide-react";
import { Button } from "./button";

export default function Toolbar() {
  return (
    <div className="flex flex-row items-center justify-between px-4 pt-4">
      <h1>Receipt App</h1>
      <div className="md:flex flex-row gap-4 hidden">
        <h2>Login</h2>
        <h2>Sign Up</h2>
      </div>
      <Button variant="outline" size="icon" className="md:hidden">
        <UserRound />
      </Button>
    </div>
  )
}