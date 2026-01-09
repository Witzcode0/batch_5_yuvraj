import React, { useState } from 'react'

function Part14Events() {
    const [data, setData] = useState("Type something...");
    const [textColor, setTextColor] = useState("black");

    const handleChange = (event) => {
        if(event.target.value === ""){
            setData("Type something...")
        }else{
            setData(event.target.value)
        }
    }

    const changeColorRed = () => {
        setTextColor("red")
    }

    const changeColorGreen = () => {
        setTextColor("Green");
    }


  return (
    <>
        <div>Part14Events</div>
        <input type="text" onChange={handleChange} name="" id="" />

        <p onMouseEnter={changeColorRed} onMouseLeave={changeColorGreen}  style={{"color": textColor}}>{data.toUpperCase()}</p>
    </>
  )
}

export default Part14Events


// 1. Mouse Events
// onClick – Fired when an element is clicked.
// onDoubleClick – Fired when an element is double-clicked.
// onMouseEnter – Triggered when the mouse enters an element.
// onMouseLeave – Triggered when the mouse leaves an element.

// 2. Keyboard Events
// onKeyDown – Fires when a key is pressed.
// onKeyPress – (Deprecated) Similar to onKeyDown, but only for character keys.
// onKeyUp – Fires when a key is released.

// 3. Form Events
// onChange – Fires when the value of an input field changes.
// onSubmit – Triggered when a form is submitted.
// onFocus – Fires when an element gets focus.
// onBlur – Fires when an element loses focus.

// 4. Clipboard Events
// onCopy – Fires when text is copied.
// onCut – Fires when text is cut.
// onPaste – Fires when text is pasted.

// 5. Other Events
// onScroll – Fires when the user scrolls.
// onLoad – Fires when an image or script is loaded.
// onError – Fires when an error occurs in an image or script.
