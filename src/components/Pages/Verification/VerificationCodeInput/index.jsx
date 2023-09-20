"use client";
import React, { useState, useEffect } from "react";

const VerificationCodeInput = ({ verificationCode }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [];

  useEffect(() => {
    verificationCode(code);
  }, [code]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < inputRefs.length - 1 && value !== "") {
        inputRefs[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs[index - 1].focus();
    }
  };

  return (
    <div className="flex space-x-4">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs[index] = el)}
          type="text"
          maxLength="1"
          className={`w-16 h-16 rounded-full text-center border-2 ${
            digit ? "bg-[#44B598] text-white" : "border-gray-300"
          } text-2xl font-semibold focus:outline-none focus:border-[#44B598]`}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
