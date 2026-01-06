// import React, { Component } from 'react'

// export default class Part3State extends Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             bg_color : "orange",
//             text_color : "white",
//             font_size : "32px",
//             padding : "10px",
//             border_radius : "10px",
//             button_name : "Submit"
//         }
//     }

//     changeButtonColor = () => {
//         this.setState({bg_color: "black"})
//     }
//   render() {
//     return (
//         <>
//             <div>Part3State</div>
//             <button style={{color:this.state.text_color, backgroundColor: this.state.bg_color, fontSize: this.state.font_size,padding: this.state.padding, borderRadius:this.state.border_radius}} onClick={this.changeButtonColor}>{this.props.text_color}</button>
//         </>
//     )
//   }
// }



// import React, { Component } from 'react';

// class Part3State extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       background_color: 'darkgreen',
//       font_color: 'orange',
//       text: 'Toggle State',
//     };
//   }

//   toggleState = () => {
//     this.setState((prevState) => ({
//       font_color: prevState.font_color === 'orange' ? 'pink' : 'orange',
//       background_color: prevState.background_color === 'darkgreen' ? 'yellow' : 'darkgreen',
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1
//           style={{
//             color: this.state.font_color,
//             backgroundColor: this.state.background_color,
//           }}
//         >
//           {this.state.text}
//         </h1>
//         <button onClick={this.toggleState}>Toggle Color</button>
//       </div>
//     );
//   }
// }

// export default Part3State;

// import React, { Component } from 'react'

// export default class Part3State extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             bg_color: "black",
//             text_color: "white"
//         }
//     }

    // toggle = () => {
    //     this.setState((prevState) => {
    //         bg_color: prevState.bg_color === "black" ? "white" : "black",
    //         text_color: prevState.text_color === "white" ? "black" : "white",
    //     })
    // }

//     toggle = () => {
//     this.setState(prevState => ({
//         bg_color: prevState.bg_color === "black" ? "white" : "black",
//         text_color: prevState.text_color === "white" ? "black" : "white",
//     }))
// }


//     render() {
//         return (
//             <>
//                 <div>Part3State</div>
//                 <div style={{ height: "200px", width: "200px", border: "1px solid black", backgroundColor: this.state.bg_color, color: this.state.text_color }}>
//                     this is somthing....
//                 </div>
//                 <button onClick={this.toggle}>toggle</button>
//             </>
//         )
//     }
// }


import React, { useState } from "react";

// Define themes
const LightTheme = {
  background: "white",
  color: "black",
  padding: "20px",
  textAlign: "center",
};

const DarkTheme = {
  background: "black",
  color: "white",
  padding: "20px",
  textAlign: "center",
};

function Part3State() {
  // state to track theme
  const [isDark, setIsDark] = useState(false);

  // toggle handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={isDark ? DarkTheme : LightTheme}>
      <h1>{isDark ? "Dark Theme 🌙" : "Light Theme ☀️"}</h1>
      <button onClick={toggleTheme} style={isDark ? LightTheme  : DarkTheme }>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default Part3State;

