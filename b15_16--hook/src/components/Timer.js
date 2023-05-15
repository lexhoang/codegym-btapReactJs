import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [time, setTime] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => {
                let countDown = time - 1
                if (countDown >= 0) {
                    return countDown
                } else {
                    clearInterval(interval)
                    alert('Đếm ngược đã kết thúc')
                }
            })
        }, 1000)
        return (() => clearInterval(interval));
    }, []);


    return (
        <div>
            <h2 style={{ color: `${time == 0 ? "green" : ""}` }}>
                Count Down: {time}
            </h2>
        </div>
    )
}
