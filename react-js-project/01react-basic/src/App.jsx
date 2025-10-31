import Button from "./Components/Button"

function App() {
  return (
    <>
      <form action="">
        <label htmlFor="">Email : </label>
        <input type="text" /> <br /><br />
        <label htmlFor="">Mobile : </label>
        <input type="text" /> <br /><br />
        <label htmlFor="">Password : </label>
        <input type="text" /> <br /><br />
        <label htmlFor="">Confirm Password : </label>
        <input type="text" /> <br /><br />
        <Button value="Register" />
        <Button value="Login" />
      </form>
    </>

  )
}

export default App
