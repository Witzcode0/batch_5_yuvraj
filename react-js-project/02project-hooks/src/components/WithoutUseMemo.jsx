import React, {useState} from 'react'

function WithoutUseMemo() {
    const [count, setCount] = useState(0);
    const [numbers] = useState([5, 1, 4, 2, 3]);
    // Expensive function (runs on every render)
  const sortedNumbers = numbers.sort((a, b) => a - b);
  console.log("Sorting numbers...");

  return (
    <>
        <div>withoutUseMemo</div>
        <h2>Sorted Numbers: {sortedNumbers.join(", ")}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

    </>
  )
}

export default WithoutUseMemo