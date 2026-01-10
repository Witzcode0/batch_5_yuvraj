// import React, { useEffect, useState } from 'react';

// function Hook02useEffect() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(data => setData(data))
//             .catch(err => console.error(err));
//     }, []);

//     return (
//         <>
//             <h3>Hook02useEffect</h3>

//             <ul>
//                 {
//                     data.slice(0,10).map(post => (
//                         <li key={post.id}>
//                             {post.title}
//                             <ul>
//                                 <li>{post.body}</li>
//                             </ul>
//                         </li> 
//                     ))
//                 }
//             </ul>
//         </>
//     );
// }

// export default Hook02useEffect;


import React, { useEffect, useState } from 'react'

function Hook02useEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

  return (
    <>  
        <div>Hook02useEffect</div>
        <h2> Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default Hook02useEffect