"use client";

import * as React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Parallax } from "react-scroll-parallax";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useIsVisible } from "./isVisible";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const [progress, setProgress] = React.useState(0);
  //update progress based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="min-h-[350vh] 
     text-4xl font-bold bg-red-400 text-white
     grid grid-cols-5 flex m-0 p-0 grid-rows-10
    "
    >
      <h1 className="mt-[40vh] justify-self-center col-start-2 col-end-5">
        Happy Valentine&apos;s Day
      </h1>
      <h1 className="justify-self-center col-start-2 col-end-5">
        My Little Mochi!
      </h1>

      <Parallax
        speed={16}
        className=" absolute mt-[180vh] ml-[10vw] col-start-1"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_heart_pink_1.png"
          width={200}
          height={200}
          alt="balloon pink"
        />
      </Parallax>
      <Parallax speed={8} className=" absolute mt-[200vh] ml-[5vw] col-start-1">
        <Image
          className="relative top-full"
          src="/images/balloon_heart_pink_3.png"
          width={200}
          height={200}
          alt="balloon pink"
        />
      </Parallax>
      <Parallax
        speed={12}
        className=" absolute mt-[130vh]  ml-[20vw] col-start-1"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_heart_pink_2.png"
          width={200}
          height={200}
          alt="balloon pink"
        />
      </Parallax>
      <Parallax className=" absolute mt-[160vh] col-start-1" speed={-4}>
        <Image
          className="relative top-full "
          src="/images/balloon_heart_red_1.png"
          width={200}
          height={200}
          alt="balloon red"
        />
      </Parallax>
      <Parallax
        speed={20}
        className="absolute mt-[280vh] ml-[10vw] col-start-1"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_dual_heart_red.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        className=" absolute mt-[210vh]  ml-[17vw] col-start-1"
        speed={-8}
      >
        <Image
          className="relative top-full "
          src="/images/balloon_dual_heart_red.png"
          width={200}
          height={200}
          alt="balloon red"
        />
      </Parallax>
      <Parallax
        speed={10}
        className="absolute mt-[155vh] ml-[20vw]  col-start-1"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_dual_heart_pink.png"
          width={200}
          height={200}
          alt="dual balloon pink"
        />
      </Parallax>
      <Parallax speed={20} className="absolute mt-[120vh] col-start-1">
        <Image
          className="relative top-full"
          src="/images/balloon_dual_heart_red.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={20}
        className="absolute mt-[270vh]  ml-[20vw] col-start-1"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_heart_red_2.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={-10}
        className="absolute mt-[250vh] ml-[15vw] col-start-1"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_heart_pink_2.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax speed={15} className="absolute mt-[230vh] ml-[5vw] col-start-1">
        <Image
          className="relative top-full "
          src="/images/balloon_heart_red_1.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax speed={-4} className="absolute mt-[250vh] col-start-1">
        <Image
          className="relative top-full"
          src="/images/balloon_dual_heart_pink.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={16}
        className=" absolute mt-[180vh] mr-[10vw] right-0 col-start-4 col-end-6"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_heart_pink_1.png"
          width={200}
          height={200}
          alt="balloon pink"
        />
      </Parallax>
      <Parallax
        speed={8}
        className=" absolute mt-[200vh] mr-[5vw] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_heart_pink_3.png"
          width={200}
          height={200}
          alt="balloon pink"
        />
      </Parallax>
      <Parallax
        speed={12}
        className=" absolute mt-[130vh]  mr-[20vw] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_heart_pink_2.png"
          width={200}
          height={200}
          alt="balloon pink"
        />
      </Parallax>
      <Parallax
        className=" absolute mt-[160vh] col-start-4 col-end-6 right-0"
        speed={-4}
      >
        <Image
          className="relative top-full "
          src="/images/balloon_heart_red_1.png"
          width={200}
          height={200}
          alt="balloon red"
        />
      </Parallax>
      <Parallax
        speed={20}
        className="absolute mt-[280vh] mr-[10vw] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_dual_heart_red.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        className=" absolute mt-[210vh]  mr-[17vw] col-start-4 col-end-6 right-0"
        speed={-8}
      >
        <Image
          className="relative top-full "
          src="/images/balloon_dual_heart_red.png"
          width={200}
          height={200}
          alt="balloon red"
        />
      </Parallax>
      <Parallax
        speed={10}
        className="absolute mt-[155vh] mr-[20vw]  col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_dual_heart_pink.png"
          width={200}
          height={200}
          alt="dual balloon pink"
        />
      </Parallax>
      <Parallax
        speed={20}
        className="absolute mt-[120vh] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_dual_heart_red.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={20}
        className="absolute mt-[270vh]  mr-[20vw] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_heart_red_2.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={-10}
        className="absolute mt-[250vh] mr-[15vw] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_heart_pink_2.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={15}
        className="absolute mt-[230vh] mr-[5vw] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full "
          src="/images/balloon_heart_red_1.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <Parallax
        speed={-4}
        className="absolute mt-[250vh] col-start-4 col-end-6 right-0"
      >
        <Image
          className="relative top-full"
          src="/images/balloon_dual_heart_pink.png"
          width={200}
          height={200}
          alt="dual balloon red"
        />
      </Parallax>
      <div
        ref={ref1 as unknown as React.LegacyRef<HTMLDivElement>}
        className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"} col-span-3 col-start-2 row-start-4 row-span-1 z-0`}
      >
        <div className="hover:scale-110 hover:bg-red-300 hover:bg-opacity-30 transition-all rounded-lg flex items-center h-[18rem] ">
          <div className="overflow-hidden rounded-lg ml-[0.5rem]">
            <Image
              className="rounded-[20px] object-cover"
              src="/images/mmrubs.gif"
              width={300}
              height={300}
              alt="mmRub"
            />
          </div>
          <div className="h-[18rem]">
            <h1 className="text-2xl font-bold">I Love You</h1>
          </div>
        </div>
      </div>

      <div
        ref={ref2 as unknown as React.LegacyRef<HTMLDivElement>}
        className={`transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"} col-span-3 col-start-2 row-start-5 row-span-1  z-0`}
      >
        <div className="hover:scale-110 hover:bg-red-300 hover:bg-opacity-30 transition-all rounded-lg flex items-center h-[18rem]">
          <div className="overflow-hidden rounded-lg ml-[0.5rem]">
            <Image
              className="rounded-[20px] object-cover"
              src="/images/mmhug.gif"
              width={300}
              height={300}
              alt="mmRub"
            />
          </div>
          <div className="h-[18rem]">
            <h1 className="text-2xl font-bold">I Love You</h1>
          </div>
        </div>
      </div>

      <div
        ref={ref3 as unknown as React.LegacyRef<HTMLDivElement>}
        className={`transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"} col-span-3 col-start-2 row-start-6 row-span-1 z-0`}
      >
        <div className="hover:scale-110 hover:bg-red-300 hover:bg-opacity-30 transition-all rounded-lg flex items-center h-[18rem] z-0">
          <div className="overflow-hidden rounded-lg ml-[0.5rem]">
            <Image
              className="rounded-[20px] object-cover"
              src="/images/mmkisses.gif"
              width={300}
              height={300}
              alt="mmRub"
            />
          </div>
          <div className="h-[18rem]">
            <h1 className="text-2xl font-bold">I Love You</h1>
          </div>
        </div>
      </div>
      <div
        ref={ref4 as unknown as React.LegacyRef<HTMLDivElement>}
        className={`transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"} col-span-3 col-start-2 row-start-7 row-span-1 z-0`}
      >
        <div className="hover:scale-110 hover:bg-red-300 hover:bg-opacity-30 transition-all rounded-lg flex items-center h-[18rem] z-0">
          <div className="overflow-hidden rounded-lg ml-[0.5rem]">
            <Image
              className="rounded-[20px] object-cover"
              src="/images/mmbite.gif"
              width={300}
              height={300}
              alt="mmRub"
            />
          </div>
          <div className="h-[18rem]">
            <h1 className="text-2xl font-bold">I Love You</h1>
          </div>
        </div>
      </div>
      <Progress
        value={progress}
        className="w-[30vw] min-w-[20rem] fixed bottom-16 bg-white bg-opacity-50 justify-self-center"
      />
      <Pagination className="fixed bottom-0 right-0 p-4 ">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="/">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/WillYouBeMyValentine">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/WillYouBeMyValentine/LoveYou">
              3
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}