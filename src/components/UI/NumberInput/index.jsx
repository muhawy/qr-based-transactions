const NumberInput = ({ value, onChange, placeholder, icon }) => {
  const formatNumber = (number) => {
    return number.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatNumber(inputValue);
    onChange(formattedValue);
  };

  return (
    <div className="relative">
      <img
        src="/phone.svg"
        alt="Phone Icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 py-2 pr-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-[#F3F2F7]"
      />
    </div>
  );
};

export default NumberInput;
