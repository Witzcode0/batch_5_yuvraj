import Part1 from "./components/Part1"
import Part10DefaultProps from "./components/Part10DefaultProps"
import Part11FunctionsasProps from "./components/Part11FunctionsasProps"
import Part12ObjectArrayProps from "./components/Part12ObjectArrayProps"
import Part13PropsTypes from "./components/Part13PropsTypes"
import Part2Func from "./components/Part2Func"
import Part3Class from "./components/Part3Class"
import Part3State from "./components/Part3State"
import { MountingClassExample, MountingFunctionExample } from "./components/Part4Mounting"
import { UpdatingClassExample, UpdatingFunctionExample } from "./components/Part5Updating"
import { UnmountingClassExample, UnmountingFunctionExample } from "./components/Part6Unmounting"
import Part7propsmain from "./components/Part7propsmain"
import Part8PropsObject from "./components/Part8PropsObject"
import Part9DestructuringProps from "./components/Part9DestructuringProps"

function App() {
   const showAlert = () => {
    alert("Button clicked!");
  };

  const personData = [
    {id: "1", name: "Brijesh", age: 30, hobbies: ["reading", "painting"]},
    {id: "2", name: "Ravi", age: 28, hobbies: ["cooking", "dancing"]},
    {id: "3", name: "yuvraj", age: 24, hobbies: ["cooking", "dancing"]},
  ];


  return (
    <>
     <Part1 />
     {/* <Part2Func name="Brijesh Gondaliya" /> */}
     {/* <Part3Class name="Yuvraj singh" /> */}
     {/* <Part3State text_color="Submit" /> */}
     {/* <MountingClassExample /> */}
    {/* <MountingFunctionExample />     */}
    {/* <UpdatingClassExample /> */}
    {/* <UpdatingFunctionExample /> */}
    {/* <UnmountingClassExample /> */}
    {/* <UnmountingFunctionExample /> */}
    {/* <Part7propsmain  name="Brijesh" color="red" /> */}
    {/* <Part8PropsObject  name="Brijesh" age={28} /> */}
     {/* <Part9DestructuringProps name="Brijesh" age={28} /> */}
     {/* <Part10DefaultProps /> */}
     {/* <Part11FunctionsasProps handleClick={showAlert}/> */}
     {/* <Part12ObjectArrayProps people={personData} /> */}
     <Part13PropsTypes name="Brijesh" age={28}/>
    </>
  )
}

export default App
