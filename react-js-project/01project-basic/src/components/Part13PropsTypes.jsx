import React from 'react'
import PropTypes from "prop-types";

function Part13PropsTypes({ name, age }) {
  return (
    <>
        <div>Part13PropsTypes</div>
         <h1>Hello, {name}. You are {age} years old.
    </h1>

    </>
  )
}

Part13PropsTypes.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number

}

export default Part13PropsTypes