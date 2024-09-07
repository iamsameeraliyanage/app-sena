"use client";

import Navbar from "@/components/NavBar/NavBar";
import MainAppLayout from "@/layouts/MainAppLayout";
import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
        <h3
          className="text-4xl mt-12 pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          Book a meeting
        </h3>

        <InlineWidget url="https://calendly.com/iamsameeraliyanage1/30min" />
      </div>
    </MainAppLayout>
  );
};

export default Book;
