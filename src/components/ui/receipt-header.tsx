import type { UserInfo } from "@/lib/types"
import { Button } from "./button"
import { Link } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { formatDateTime } from "@/lib/utils";

interface ReceiptHeaderProps {
  title: string,
  date: Date,
  users: UserInfo[],
};

export default function ReceiptHeader({
  title, 
  date, 
  users
} : ReceiptHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold">
          Ramen Night w/ the Gang
        </h1>
        <Button variant="subdued">
          Invite
          <Link/>
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="text-subdued">
          {formatDateTime(date)}
        </h2>
        <div 
          className="flex -space-x-2 *:data-[slot=avatar]:ring-background 
                     *:data-[slot=avatar]:ring-2"
        >
          {users.map((userInfo) => 
            <Avatar key={userInfo.name}>
              <AvatarImage src={`/${userInfo.image}`}/>
              <AvatarFallback>{userInfo.initials}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </div>
  );
}