import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Home page that says "Happy Valentine's Day" A spcial day for you
// CLICK ME!!!
export default function Home() {
  return (
    <main
      className="
        flex
        flex-col
        items-center
        justify-center
        h-screen
        bg-rose-300
        gap-4
        p-4
        backdrop-filter
        backdrop-blur-lg
      "
    >
      <h1
        className="
        text-6xl
        text-center
        text-white
        font-bold
       "
      >
        HEY!
      </h1>
      <h2
        className="
        text-4xl
        text-center
        text-white
        font-bold
      "
      >
        Can I ask you a question?
      </h2>
      <Button
        className="
        bg-red-500
        text-white
        
        
        hover:bg-red-600
        opacity-70
      "
        asChild
      >
        <Link href="/WillYouBeMyValentine">CLICK ME!!!</Link>
      </Button>
    </main>
  );
}
