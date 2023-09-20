"use client";
import React from "react";
import Image from "next/image";
import { useProductsContext } from "@/context/ProductsContext";

const SummaryComponent = () => {
  const handleRefresh = () => {
    alert("Refreshing...");
  };

  const { productsState } = useProductsContext();

  console.log(productsState);

  return (
    <>
      <div className="p-6">
        <p className="text-center text-xl font-bold text-[#44B598] mb-6">
          WASTE SUMMARY
        </p>

        {productsState
          ?.filter((item) => item.quantity > 0)
          ?.map((item, index) => (
            <div key={index} className="flex gap-3 my-4">
              <div className="flex gap-3">
                <div className="flex flex-col py-4 rounded-xl shadow-md w-20">
                  <div className="self-center">
                    <Image
                      src="/assets/kopi.png"
                      alt="product"
                      width={35}
                      height={45}
                      priority
                    />
                  </div>
                  <div className="self-center">
                    <Image
                      src="/ellipse.svg"
                      alt="shadow"
                      width={41}
                      height={3}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="self-center">
                <p className="text-sm font-medium text-[#151515] mb-3">
                  {item.name}
                </p>
                <div className="bg-[#6595D7] px-3 py-0.5 w-fit rounded-2xl">
                  <p className="text-white text-xs font-bold">
                    {item.quantity}pcs
                  </p>
                </div>
              </div>
            </div>
          ))}

        <div className="bg-[#FAFAFA] py-9 px-6 rounded-3xl mb-10 mt-8 text-center">
          <p className="text-base text-[#151515] font-semibold">
            Please go to the cashier or to the staff nearby to verify the waste
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex gap-2 w-56 items-start">
            <Image
              src="/information.svg"
              alt="shadow"
              width={18}
              height={18}
              priority
            />
            <p className="text-xs">
              If this page remains unchanged, please
              <span
                className="font-semibold cursor-pointer"
                onClick={() => handleRefresh()}
              >
                {" "}
                refresh it.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryComponent;
