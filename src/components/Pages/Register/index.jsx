"use client";
import React, { useState } from "react";
import NumberInput from "@/components/UI/NumberInput";
import Image from "next/image";
import Link from "next/link";

const RegisterComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleRequestOtp = () => {
    alert("send data");
  };

  return (
    <>
      <div className="relative">
        <Image
          src="/illustration-cover.svg"
          alt="illustration"
          width={400}
          height={0}
          objectFit="cover"
        />
        <div>
          <div className="flex flex-col gap-1 absolute top-0 left-0 right-0 mt-10 items-center justify-center text-[#2A3E7E] text-sm">
            Greetings from{" "}
            <span>
              <Image
                src="/octopus-logo.svg"
                alt="illustration"
                width={241}
                height={69}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="font-semibold text-[#151515] text-base mb-4">
          Enter your phone number
        </p>
        <div className="">
          <NumberInput
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="08xx xxx"
          />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 max-w-[327px] min-w-[300px] ml-auto mr-auto mb-4">
        {phoneNumber ? (
          <Link href="/verification">
            <div
              className="rounded py-3 w-auto mx-6 text-center bg-[#6595D7] cursor-pointer"
              onClick={() => handleRequestOtp()}
            >
              <button className="text-white">REQUEST OTP</button>
            </div>
          </Link>
        ) : (
          <div className="rounded py-3 w-auto mx-6 text-center bg-[#B0B0B0] cursor-not-allowed">
            <button className="text-white">REQUEST OTP</button>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterComponent;
