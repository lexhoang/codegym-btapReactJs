import React, { useState } from 'react'

export default function ComponentCounter() {
    const [count_1, setCount_1] = useState(1);
    const [count_2, setCount_2] = useState(2);

    const handleAddCount_1 = () => {
        setCount_1(count_1 + 1);
    }

    const handleAddCount_2 = () => {
        setCount_2(count_2 + 2);
    }

    return (
        <div className="m-5 row" style={{ width: '500px' }}>
            <div className="col-6">
                <p>Count: {count_1}</p>
                <button className='btn btn-info' onClick={() => handleAddCount_1()}>Add count 1</button>
            </div>

            <div className="col-6">
                <p>Count: {count_2}</p>
                <button className='btn btn-info' onClick={() => handleAddCount_2()}>Add count 2</button>
            </div>
        </div>
    )
}
