import React from 'react'

function Part12ObjectArrayProps({people}) {
  return (
    <>  
        <div>Part12ObjectArrayProps</div>
        {
          people.map((person) => (
                <div data-key={person.id}>
                    <hr />
                    <li>Name: {person.name}</li>
                    <li>Age: {person.age}</li>
                    <li>Hobbies: {person.hobbies.join(",")}</li>
                </div>
            ))
        }

    </>
  )
}

export default Part12ObjectArrayProps