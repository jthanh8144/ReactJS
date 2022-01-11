import { useRef, useState, useEffect } from 'react';

function Content() {
    const [count, setCount] = useState(60);
    const timerId = useRef();
    const preCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        preCount.current = count;
    }, [count]);
    useEffect(() => {
        console.log(h1Ref.current);
    })
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        console.log();
    };
    const handleStop = () => {
        clearInterval(timerId.current);
    };
    console.log(count, preCount.current);

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Content;