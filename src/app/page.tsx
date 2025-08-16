

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center grow">
      <div className="md:flex md:flex-col md:items-center hidden">
        <h1 className="text-5xl mb-2">
          Split bills and share receipts
        </h1>
        <h2 className="text-5xl italic mb-6">
          in one click.
        </h2>
      </div>
      <div className="md:hidden mb-6">
        <h1 className="text-4xl">Split bills</h1>
        <h1 className="text-4xl">and share receipts</h1>
        <h1 className="text-right text-4xl italic">in one click.</h1>
      </div>
      <h3 
        className="text-zinc-400 text-wrap text-center px-6 md:w-2xl md:px-0"
      >
        With Receipt App, never have confusion with who's paying for what. Simply snap a photo, itemize the receipt, select the split, and share it with your friends.
      </h3>
    </div>
  );
}