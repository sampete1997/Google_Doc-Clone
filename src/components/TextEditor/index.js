import React, { useEffect, useRef, useState } from "react";


const TextEditor = () => {
  const pageRef = useRef(null);
  const toralPagesRef = useRef(null);
  const [page, setPage] = useState([{ pageNo: 0, content: " " }]);
  const [content, setContent] = useState(" ");
 

  
  useEffect(() => {
    const height = pageRef.current.scrollHeight;
    if (height >= 1080) {

      setPage([...page, { pageNo: page.length + 1, content: " " }]);

      pageRef.current.focus()
  
    }
  }, [content, page]);

  const handleInput = (e) =>{

    console.log('countinp',e);

   setContent(e.target.value)
  }

  const handleScroll = (e) => {
    console.log('total scroll',     toralPagesRef.current.scrollHeight
    );
  }

  const handleSelection = (e) => {
    // const x = window.getSelection()
    // const range = x.getRangeAt(0);
    // if (range) {
    //   const newNode = document.createElement('strong');
    //   range.surroundContents(newNode);
    // }
  };
  return (
    <div ref={toralPagesRef} onScroll={handleScroll} className="overflow-y-scroll text-center border border-1 border-[#C7C7C7] w-full border-r-0 px-4 py-2 ">
      <div className="w-[856px] inline-block ">
        {page.map((ele) => {
          return (
            <textarea
              contentEditable
              onMouseUp={handleSelection}
              onInput={handleInput}
              ref={pageRef}
              className="resize-none overflow-hidden my-0.5  bg-white border border-1 border-[#c0c0c0] p-5 w-[856px] h-[1080px] outline-none"
            >
              {ele.content || " "}
            </textarea>
          );
        })}
      </div>
    </div>
  );
};

export default TextEditor;
