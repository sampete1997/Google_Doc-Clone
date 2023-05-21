import { useEffect, useRef, useState } from "react";

const TitleBar = () => {
  const [titleText, setTitleText] = useState("Untitled document");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  console.log("state", titleText);
  const handleChange = (e) => {
    console.log("e.target.value", e);
    setTitleText(e.target.value);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }

  }, [titleText]);
  const handleBlur = (e) => {
    console.log("blue", e.target.value === "");
    if (e.target.value === "") {
      console.log("dddd", e.target.value);
      setTitleText("Untitled document");
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  return (
    <div className="text-[18px]">
      <input
        ref={inputRef}
        type="text"
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={titleText}
        readOnly={!isFocused}
        onChange={handleChange}
        className="px-2 border border-1 border-transparent rounded-md hover:border-gray-700 bg-transparent focus::bg-white"
      ></input>
    </div>
  );
};

export default TitleBar;
