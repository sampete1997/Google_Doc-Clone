import React, { useEffect, useRef, useState } from "react";

let C = `This text is really long and the height of its container is only 100
pixels. Therefore, a scrollbar is added to help the reader to scroll
the content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna

This text is really long and the height of its container is only 100
pixels. Therefore, a scrollbar is added to help the reader to scroll
the content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna`;


const TextEditor = () => {
  const pageRef = useRef(null);
  const toralPagesRef = useRef(null);
  const [page, setPage] = useState([{ pageNo: 0, content: C }]);
  const [content, setContent] = useState(C);
  const [store , setStore] = useState(content)
  let contentChangingCount = 0 
  
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
    <div ref={toralPagesRef} onScroll={handleScroll} className="overflow-y-scroll text-center border border-1 border-[#C7C7C7] w-full border-r-0 p-4 ">
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
