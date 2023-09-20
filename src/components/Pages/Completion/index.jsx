"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CompletionComponent = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <div className="p-6">
        <div className="flex flex-col gap-9 justify-center items-center mb-7">
          <Image
            src="/octopus-logo.svg"
            alt="illustration"
            width={157}
            height={45}
            priority
            objectFit="cover"
          />
          <Image
            src={`${
              completed
                ? "/illustration-success.svg"
                : "/illustration-failed.svg"
            }`}
            alt="illustration"
            width={229}
            height={168}
            priority
            objectFit="cover"
          />
        </div>

        <div className="w-72 ml-auto mr-auto">
          <p
            className={`text-xl font-bold text-center mb-2 ${
              completed ? "text-[#44B598]" : "text-[#D92F21]"
            }`}
          >
            {completed ? "Congratulations!" : "Failed to verify"}
          </p>
          <p className="text-sm text-[#151515] text-center">
            {completed
              ? "You’ve recycled 1 pcs of Kopi Konnichiwa Plastic."
              : "The waste is not verified by the store. Return to the cashier or nearby staff for confirmation."}
          </p>
        </div>

        <div className="fixed inset-x-0 bottom-0 max-w-[400px] min-w-[375px] ml-auto mr-auto py-8 px-6 bg-[#EAFDFC] rounded-3xl flex gap-8">
          <p className="text-[#151515] text-xs font-semibold">
            Keep an eye on your recycling progress and earn the promo by
            downloading <span className="text-[#2A3E7E]">Octopus.</span>
          </p>
          <button className="w-full text-sm font-semibold bg-[#151515] py-2 px-4 text-white h-10 rounded-3xl mt-1 cursor-pointer">
            <Link href="https://www.download.octopus.co.id/?utm_source=online&utm_medium=landing_page&utm_campaign=bisnishub&utm_id=bisnishub_2">
              GET THE APP
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CompletionComponent;
