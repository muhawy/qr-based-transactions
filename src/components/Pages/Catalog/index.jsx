"use client";
import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { useProductsContext } from "@/context/ProductsContext";

const products = [
  {
    name: "Kopi Konnichiwa Plastic",
    point: 5,
    weight: 1,
    image: "/assets/kopi.png",
  },
  {
    name: "Kopi Gula Aren",
    point: 10,
    weight: 0.5,
    image: "/assets/kopi.png",
  },
  {
    name: "Kopikir Sendiri",
    point: 15,
    weight: 0.5,
    image: "/assets/kopi.png",
  },
  { name: "Kopi Botol", point: 5, weight: 0.5, image: "/assets/kopi.png" },
  { name: "Kopi Kopian", point: 10, weight: 0.5, image: "/assets/kopi.png" },
];

const CatalogComponent = () => {
  const { productsState, setProductsState } = useProductsContext();

  // const [productsState, setProductsState] = useState(null);

  console.log({ productsState });

  // Callback function to receive data from the child
  const receiveProductStateFromCard = (data) => {
    setProductsState(data);
  };

  const calculateTotalQuantityWeightPoint = (data) => {
    let totalQuantity = 0;
    let totalWeight = 0;
    let totalPoint = 0;

    data?.forEach((item) => {
      totalQuantity += item.quantity;
      totalWeight += item.weight;
      totalPoint += item.point;
    });

    return { totalQuantity, totalWeight, totalPoint };
  };

  const { totalQuantity, totalWeight, totalPoint } =
    calculateTotalQuantityWeightPoint(productsState);

  console.log({ totalQuantity, totalWeight, totalPoint });

  return (
    <>
      <div className="p-6">
        <p className="text-xl text-[#44B598] font-bold">WASTE CATALOG</p>
        <p className="text-[10px] text-white font-bold bg-[#6595D7] py-1 px-4 rounded-xl w-fit mt-8">
          Kopi Konnichiwa Product
        </p>
        <p className="text-lg font-semibold text-[#151515] mt-6">
          Kopi Konnichiwa Product
        </p>
      </div>

      <div className="mb-32">
        <Card
          quantityWeightPointData={receiveProductStateFromCard}
          productsData={products}
        />
      </div>

      <div className="flex justify-center items-center">
        <Modal
          isOpen={totalQuantity >= 1}
          onClose={totalQuantity === 0}
          weight={totalWeight}
          quantity={totalQuantity}
        />
      </div>
    </>
  );
};

export default CatalogComponent;
