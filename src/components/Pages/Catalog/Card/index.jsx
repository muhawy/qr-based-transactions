"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Card = ({ productsData, quantityWeightPointData }) => {
  // Create state variables to store quantity and weight for each product
  const [productStates, setProductStates] = useState([]);

  console.log(productStates);

  useEffect(() => {
    quantityWeightPointData(productStates);
  }, [productStates]);

  useEffect(() => {
    // Initialize the productStates array with default values
    const initialState = productsData?.map((item) => ({
      name: item.name,
      quantity: 0,
      weight: 0,
      point: 0,
    }));
    setProductStates(initialState);
  }, [productsData]);

  const updateQuantityWeightPoint = (
    index,
    name,
    quantityChange,
    weightChange,
    pointChange
  ) => {
    // Create a copy of the productStates array
    const updatedProductStates = [...productStates];
    // Update quantity, weight and point for the specified product
    updatedProductStates[index] = {
      name,
      quantity: Math.max(productStates[index].quantity + quantityChange, 0),
      weight: Math.max(productStates[index].weight + weightChange, 0),
      point: Math.max(productStates[index].point + pointChange, 0),
    };
    // Update the state with the new array
    setProductStates(updatedProductStates);
  };

  const cardElements = productsData?.map((product, index) => (
    <div key={index} className="flex flex-col py-4 rounded-xl shadow-md">
      <div className="self-center">
        <Image
          src={product.image}
          alt={product.name}
          width={68}
          height={89}
          priority
        />
      </div>
      <div className="self-center">
        <Image src="/ellipse.svg" alt="shadow" width={80} height={6} priority />
      </div>
      <p className="mt-2 mx-2 text-[10px] font-semibold text-[#151515] self-start">
        {product.name}
      </p>
      {productStates[index]?.quantity === 0 ? (
        <div className="flex justify-between">
          <div className="flex ml-2">
            <Image
              src="/openmoji_coin.svg"
              alt="coin"
              width={14}
              height={14}
              priority
            />
            <p className="text-xs font-bold text-[#6595D7] self-center">
              +{product.point}
            </p>
          </div>
          <div
            className="self-center mr-3 bg-[#E4EDF2] rounded-full p-2 cursor-pointer"
            onClick={() => {
              updateQuantityWeightPoint(
                index,
                product.name,
                1,
                product.weight,
                product.point
              );
            }}
          >
            <Image src="/plus.svg" alt="plus" width={11} height={11} priority />
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="flex self-center mx-2 mt-1 bg-[#E4EDF2] rounded-full p-2 justify-between">
              <Image
                src="/minus.svg"
                alt="minus"
                width={11}
                height={11}
                priority
                onClick={() => {
                  if (productStates[index].quantity > 0) {
                    updateQuantityWeightPoint(
                      index,
                      product.name,
                      -1,
                      -product.weight,
                      -product.point
                    );
                  }
                }}
                className="cursor-pointer"
              />
              <p className="text-xs font-bold text-[#474747]">
                {productStates[index]?.quantity}pcs
              </p>
              <Image
                src="/plus.svg"
                alt="plus"
                width={11}
                height={11}
                priority
                onClick={() => {
                  updateQuantityWeightPoint(
                    index,
                    product.name,
                    1,
                    product.weight,
                    product.point
                  );
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </>
      )}
    </div>
  ));

  return (
    <>
      <div className="flex justify-center gap-4 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">{cardElements}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
