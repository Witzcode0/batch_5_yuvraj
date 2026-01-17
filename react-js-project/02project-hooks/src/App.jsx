import Hook01useState from "./components/Hook01useState"
import Hook02useEffect from "./components/Hook02useEffect"
import { TheamProvider } from "./components/Hook03useContext"
import Hook04useRef from "./components/Hook04useRef"
import Hook05useReducer from "./components/Hook05useReducer"
import Hook06useMemo from "./components/Hook06useMemo"
import Hook07useCallback from "./components/Hook07useCallback"
import Navbar from "./components/Navbar"
import ShoppingCart from "./components/ShoppingCart"
import TodoList from "./components/TodoList"
import { UsercontextProvider } from "./components/Usercontext"
import WithoutUseMemo from "./components/withoutUseMemo"

function App() {

  return (
    <>
      {/* <Hook01useState /> */}
      {/* <Hook02useEffect /> */}
      {/* <TheamProvider>
        <Navbar />
      </TheamProvider> */}
      {/* <UsercontextProvider /> */}
      {/* <Hook04useRef /> */}
      {/* <Hook05useReducer /> */}
      {/* <ShoppingCart /> */}
      {/* <WithoutUseMemo/> */}
      {/* <Hook06useMemo /> */}
      <Hook07useCallback />
      {/* <TodoList /> */}
    </>
  )
}

export default App
