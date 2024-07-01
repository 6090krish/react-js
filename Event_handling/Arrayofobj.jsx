import React from 'react'

function Arrayofobj() {
    const array = ["apple", "banana", "orange"];

    const array_obj = [{ id: 1, name: "Siddharth" },
    { id: 2, name: "Nikunj" },
    { id: 3, name: "Meet" }
    ]
    return (
        <>
            <h2>Array of String : </h2>
            <ul>
                {array.map((i, index) => {
                    return <li key={index}>{i}</li>
                })}
            </ul>

            <h2>Array of object : </h2>
            {array_obj.map((i, index) => {
                return <ul key={index}>
                    <li>Id : {i.id} </li>
                    <li>Name : {i.name}</li>
                </ul>
            })}
        </>
    )
}

export default Arrayofobj
