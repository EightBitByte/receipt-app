import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Link } from "lucide-react";
import type { UserInfo } from "@/lib/types";
import ReceiptHeader from "@/components/ui/receipt-header";


const AVATAR_DATA: UserInfo[] = [
  {
    name: "Pomni",
    initials: "Po",
    image: "pomni.webp"
  },
  {
    name: "Heavyweapons Guy",
    initials: "HG",
    image: "heavy.webp"
  },
  {
    name: "King Baldwin",
    initials: "KB",
    image: "leper.webp"
  },
  {
    name: "Leon Kennedy",
    initials: "LK",
    image: "leon.webp"
  }
];

export default function Receipt() {
  return (
    <div className="px-24 py-10 grow flex flex-col gap-8">
      <ReceiptHeader 
        title="Ramen Night w/ the Gang"
        date={new Date()}
        users={AVATAR_DATA}
      />
      <div className="w-full grow flex">
        <div className="w-2xl bg-zinc-700 rounded-xl"></div>
      </div>
    </div>
  )
}