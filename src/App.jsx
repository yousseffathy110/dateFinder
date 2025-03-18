import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(step);
  const date = new Date();
  date.setDate(date.getDate() + value); // Adjust date based on value

  return (
    <div className="bg-black text-white p-4 flex justify-center items-center h-screen flex-col">
      <div className="flex items-center gap-4 justify-center">
        <input
          type="range"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p className="text-3xl">{step}</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setValue(value + Number(step))}
          className="bg-white text-black border-none outline-none rounded-full h-10 w-10 font-bold text-3xl flex items-center justify-center"
        >
          +
        </button>
        <input
          type="text"
          className="border border-white rounded-md bg-white outline-none text-black text-xl font-bold text-center"
          value={value}
          readOnly
        />
        <button
          onClick={() => setValue(value - Number(step))}
          className="bg-white text-black border-none outline-none rounded-full h-10 w-10 font-bold text-3xl flex items-center justify-center"
        >
          -
        </button>
      </div>
      <p className="text-white text-2xl mt-4">Today is {date.toDateString()}</p>
    </div>
  );
}
