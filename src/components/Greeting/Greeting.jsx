import React, { useState } from 'react'

const Greeting = ({message}) => {
    
    const [count, setCount] = useState(0)
    const [countHover, setCountHover] = useState(0)






    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }
    

    const handleMover = () => {
        setCountHover(prevCountHover => prevCountHover + 1)
    }

    
    return (
        <>
            <h1>{message}</h1>
            <button onClick={handleClick}>Hola</button>
            <span>{count}</span>
            <div className='pichu' onMouseEnter={handleMover}><span>{countHover}</span> 
            </div>
        </>
    )
}

export default Greeting
