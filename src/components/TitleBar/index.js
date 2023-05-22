import { useContext, useEffect, useRef, useState } from "react";
import { ShareDocContext } from "../GlobalContext/DocShareContext";

const TitleBar = () => {
  const [titleText, setTitleText] = useState("Untitled document");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const {setTitle} = useContext(ShareDocContext)

  const handleChange = (e) => {
    setTitleText(e.target.value);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  }, [titleText]);
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setTitleText("Untitled document");
    }
    setTimeout(()=>setTitle(titleText),200)
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
        className="w-[200px] outline-blue-600 px-3 border border-1 border-transparent rounded-md hover:border-gray-700 bg-transparent focus::bg-white"
      ></input>
    </div>
  );
};

export default TitleBar;
