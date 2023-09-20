import React from "react";
import Link from "next/link";

const Modal = ({ isOpen, weight, quantity }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 max-w-[400px] min-w-[375px] ml-auto mr-auto">
      <div
        className="bg-white py-4 px-5 rounded-t-3xl"
        style={{
          boxShadow:
            "-2px 12px 10px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <p className="text-xs font-semibold text-[#515151] mb-2">Estimation</p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs">
              Total Weight{" "}
              <span className="font-semibold text-sm ml-1">
                {quantity * 0.5}kg
              </span>
            </p>
            <p className="text-xs">
              Total Item{" "}
              <span className="font-semibold text-sm ml-1">{quantity}kg</span>
            </p>
          </div>
          <Link href="/register">
            <div className="flex gap-2 bg-[#6595D7] rounded-3xl py-2.5 px-3">
              <button className="text-white font-semibold">DROP WASTE</button>
              <img
                src="/arrow-right.svg"
                alt="arrow-right"
                className="bg-[#D7EAFD] rounded-full py-0.5 px-1.5"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
