import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center grow">
      <div className="md:flex md:flex-col md:items-center hidden">
        <h1 className="text-5xl mb-2">
          Split bills and share receipts
        </h1>
        <h2 className="text-5xl italic">
          in one click.
        </h2>
      </div>
      <div className="md:hidden">
        <h1 className="text-4xl">Split bills</h1>
        <h1 className="text-4xl">and share receipts</h1>
        <h1 className="text-right text-4xl italic">in one click.</h1>
      </div>
      <h3 
        className="text-subdued text-wrap text-center px-6 my-10 md:w-2xl md:px-0"
      >
        With Receipt App, never have confusion with who's paying for what. Simply snap a photo, itemize the receipt, select the split, and share it with your friends.
      </h3>
      <div className="flex flex-row items-center gap-3">
        <Button variant="front">
          Upload Photo
        </Button>
        <div className="flex flex-row items-center gap-2">
          <p className="text-subdued">
            or
          </p>
          <Link 
            className="text-subdued underline" 
            href="/"
          >
            start manually
          </Link>
        </div>
      </div>
    </div>
  );
}