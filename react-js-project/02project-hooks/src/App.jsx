import Hook01useState from "./components/Hook01useState"
import Hook02useEffect from "./components/Hook02useEffect"
import { TheamProvider } from "./components/Hook03useContext"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      {/* <Hook01useState /> */}
      {/* <Hook02useEffect /> */}
      <TheamProvider>
        <Navbar />
      </TheamProvider>
    </>
  )
}

export default App
