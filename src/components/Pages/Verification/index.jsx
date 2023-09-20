"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VerificationCodeInput from "./VerificationCodeInput";

const VerificationComponent = () => {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState(null);

  console.log(verificationCode);

  const handleGoBack = () => {
    router.back();
  };

  const handleResendCode = () => {
    alert("Resending code");
  };

  const receiveDataFromVerificationInput = (data) => {
    setVerificationCode(data);
  };

  return (
    <>
      <div className="relative">
        <Image
          src="/assets/illustration-header.png"
          alt="illustration"
          width={400}
          height={0}
          priority
          objectFit="cover"
        />
        <div className="flex gap-4 my-3 pl-6 absolute top-0 left-0 right-0 mt-12">
          <Image
            src="/arrow-left.svg"
            alt="back"
            width={27}
            height={27}
            priority
            onClick={handleGoBack}
            className="cursor-pointer"
          />
          <p className="text-xl text-[#44B598] font-bold">
            VERIFY PHONE NUMBER
          </p>
        </div>
      </div>

      <div className="px-6 mb-6">
        <div>
          <p className="text-base font-semibold text-[#151515] mb-2">
            Enter verification code
          </p>
          <p className="text-xs font-normal text-[#151515]">
            We sent a verification code to{" "}
            <span className="font-bold">0812 - 2345 - 6789</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <VerificationCodeInput
          verificationCode={receiveDataFromVerificationInput}
        />
      </div>

      <div className="px-6 mt-6 text-center">
        <div>
          <p className="text-xs text-[#151515] mb-2">
            Did you receive any code? (01:58)
          </p>
          <p
            className="text-sm font-bold text-[#6595D7] cursor-pointer"
            onClick={() => handleResendCode()}
          >
            RESEND NEW CODE
          </p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 max-w-[327px] min-w-[300px] ml-auto mr-auto mb-4">
        {verificationCode?.[3] ? (
          <Link href="/summary">
            <div className="rounded py-3 w-auto mx-6 text-center bg-[#6595D7] cursor-pointer">
              <button className="text-white">CONTINUE</button>
            </div>
          </Link>
        ) : (
          <div className="rounded py-3 w-auto mx-6 text-center bg-[#B0B0B0] cursor-not-allowed">
            <button className="text-white">CONTINUE</button>
          </div>
        )}
      </div>
    </>
  );
};

export default VerificationComponent;
