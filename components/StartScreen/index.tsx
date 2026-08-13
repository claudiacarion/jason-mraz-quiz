"use client";
import { useState, type ChangeEvent } from "react";

type StartScreenProp = {
  handleStart: (username: string) => void;
};

const StartScreen = ({ handleStart }: StartScreenProp) => {
  const [username, setUsername] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <label htmlFor="name">Enter your name*</label>
      <input
        id="name"
        value={username}
        onChange={handleChange}
        className="bg-white p-2 rounded-xl m-2 md:m-8 text-black outline-none"></input>
      {username.trim() !== "" && (
        <button onClick={() => handleStart(username)} disabled={username.trim() === ""} className="cursor-pointer border border-white rounded-3xl p-4 w-fit mx-auto">
          Start
        </button>
      )}
    </>
  );
};

export default StartScreen;
