// import React, { useEffect, useRef, useState } from 'react'

// function Hook04useRef() {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//         count.current = count.current + 1;
//     });

//     return (
//         <>
//             <p>Type in the input field:</p>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }

// export default Hook04useRef

import React, {useRef} from 'react'

function Hook04useRef() {
    const inputElement = useRef();
    const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.style.color = "red";
    inputElement.current.style.fontSize = "100px";
  };
  return (
    <>  
        <div>Hook04useRef</div>
        <input type="text" name="" ref={inputElement} id="" />
        <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default Hook04useRef