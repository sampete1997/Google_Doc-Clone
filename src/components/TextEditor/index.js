import React, { useEffect, useRef, useState } from "react";

let C = `Once upon a time there was a component that wanted to pass information down to its grandchildren, and any subsequent children in the application hierarchy. This worked well until the family started getting really big and the parent component noticed that many of the children were nearly identical and only needed slightly different information to be passed down through props.

The most basic implementation of props is to define props in the parent component and pass it down to the next child component in the hierarchy, and then pass the value again through props in the child component, and then again through the grandchild — which is repeated as needed until the passed value arrives in the target component. The process is tedious, error prone, and also makes the code less flexible.`;


const TextEditor = () => {
  const pageRef = useRef(null);
  const toralPagesRef = useRef(null);
  const [page, setPage] = useState([{ pageNo: 0, content: C }]);
  const [content, setContent] = useState(C);
  const [store , setStore] = useState(content)

  
  useEffect(() => {
    const height = pageRef.current.scrollHeight;
    if (height >= 1080) {

      setPage([...page, { pageNo: page.length + 1, content: " " }]);

      pageRef.current.focus()
  
    }
    console.log('height', height,);
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
              className="resize-none overflow-hidden my-0.5  bg-white border border-1 border-b-[#C7C7C7] p-5 w-[856px] h-[1080px] outline-none"
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
