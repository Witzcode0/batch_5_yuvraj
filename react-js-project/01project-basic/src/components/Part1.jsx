import React from 'react'

function Part1() {
    const width_ = "80px";
  return (
    <>

    {/* 0. comments */}

    {/* 1. wrapp your code inside <> </> */}
    {/* <h1>This is my first web page</h1>
    <p>this is a my paragraph</p> */}

    {/* 2. Self-Closing Tags: Tags like <img>, <input>, and <br> must be self-closed in JSX.  */}
    {/* <img src="https://img.freepik.com/premium-photo/facebook-logo_1080029-107.jpg?semt=ais_hybrid&w=740&q=80" alt="" /> */}

    {/* 3. JavaScript Expressions in Curly Braces: You can use JavaScript expressions inside {} in JSX. */}
    {/* <img src="https://img.freepik.com/premium-photo/facebook-logo_1080029-107.jpg?semt=ais_hybrid&w=740&q=80" width={width_} alt="" /> */}

    {/* 4. Class becomes className: Since class is a reserved word in JavaScript, use className instead of class. */}
    {/* <h1 className="title">Welcome</h1> */}

    {/* 5. CamelCase Property Naming: Properties like onclick become onClick, and tabindex becomes tabIndex. */}
    {/* <button onClick={() => alert("Button clicked")}>Click me</button> */}

    {/* 6. Inline Styles: Inline styles are written as objects in JSX. */}
    {/* <h1 style={{color:"red", fontSize:"64px"}}>This a red in a big size</h1> */}
    </>
  )
}

export default Part1