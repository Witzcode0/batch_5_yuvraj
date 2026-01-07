import React from 'react'

function Part10DefaultProps({name}) {
  return (
    <>
        <div>Part10DefaultProps</div>
        <p> Hello, {name}.</p>
    </>
  )
}

Part10DefaultProps.defaultProps = {
    name: "Brijesh",
}
export default Part10DefaultProps
