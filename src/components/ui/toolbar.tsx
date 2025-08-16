import { UserRound } from "lucide-react";
import { Button } from "./button";

export default function Toolbar() {
  return (
    <div className="flex flex-row items-center justify-between px-4 pt-4">
      <h1>Receipt App</h1>
      <div className="md:flex flex-row hidden">
        <Button variant="link">Login</Button>
        <Button variant="link">Sign Up</Button>
      </div>
      <Button variant="outline" size="icon" className="md:hidden">
        <UserRound />
      </Button>
    </div>
  )
}