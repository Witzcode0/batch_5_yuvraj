import Part1 from "./components/Part1"
import Part10DefaultProps from "./components/Part10DefaultProps"
import Part11FunctionsasProps from "./components/Part11FunctionsasProps"
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
     <Part11FunctionsasProps handleClick={showAlert}/>
    </>
  )
}

export default App
