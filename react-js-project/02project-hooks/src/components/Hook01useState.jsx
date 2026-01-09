import React, { useState } from 'react'

function Hook01useState() {
    const [qty, setQty] = useState(1);
    const [disabledForDec, setDisabledForDec] = useState(false)
    const [disabledForInc, setDisabledForInc] = useState(false)

    const inc = () => {
        if (qty > 0){
            setDisabledForDec(false)
        }
        if (qty < 5){
            setQty(qty + 1)
        }else{
            alert("You can only add 5 qty at once")
            disabledForInc(true)
        }
    }
    const dec = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
        if(qty === 0){
            setDisabledForDec(true)
        }
    }
  return (
    <>
        <div>Hook01useState</div>

        <p>Update Cart Qty using <b>"useState"</b> hook</p>

        <button onClick={dec} disabled={disabledForDec}>-</button>
        <p>{qty}</p>
        <button onClick={inc} disabled={disabledForInc}>+</button>
    </>
  )
}

export default Hook01useState