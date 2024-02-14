import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [yesSize, setYesSize] = useState(20);
  const [noSize, setNoSize] = useState(20);
  const [noState, setNoState] = useState(0);
  const noButton = document.getElementById("noButton");

  const phrases = [
    "No",
    "What the heck",
    "Don't Click Me",
    "Please Say Yes",
    "Seriously?!",
    "The other button is so much easier to press",
    "You're still clicking me?",
    "This is Cruel",
    "If That's How you Feel",
    "PLEASE PLEASE PLEASE",
  ];

  return (
    <main
      className="
  
      flex
      flex-col
      items-center
      justify-center
      h-screen
      gap-4
      p-4
      backdrop-filter
      backdrop-blur-lg
      bg-opacity-80
      bg-red-400
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
        Will you be my Valentine?
      </h1>
      <div
        className="
        flex
        justify-center
        gap-4
        fixed
        bottom-0
        w-full
        p-4
       "
      >
        <Button
          className="bg-green-400 bg-opacity-40 hover:bg-green-500 hover:bg-opacity-80"
          id="yesButton"
          style={{ width: `${yesSize}rem`, height: "5rem" }}
          asChild
        >
          <Link href="/WillYouBeMyValentine/LoveYou">Yes</Link>
        </Button>

        <Button
          className="bg-red-400 bg-opacity-60 hover:bg-red-500 hover:bg-opacity-80"
          id="noButton"
          onClick={() => {
            setNoState(noState + 1);
            const state = noState % phrases.length;
            if (yesSize <= 50) {
              setYesSize((size) => size * 1.1);
            }
            if (noSize <= 10) {
              setNoSize((size) => size * 0.8);
            }
            if (noButton) noButton.innerText = phrases[state];
          }}
          style={{ width: `${noSize}rem`, height: "5rem" }}
        >
          No
        </Button>
      </div>
    </main>
  );
}
