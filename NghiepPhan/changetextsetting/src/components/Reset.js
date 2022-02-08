import { useContext } from 'react';
import { AppContext } from '../App';

function Reset() {
    const appContext = useContext(AppContext);
    const reset = () => {
        appContext.setColor('red');
        appContext.setSize(14);
    }

    return (
        <>
            <button
                onClick={reset}
            >
                Reset
            </button>
        </>
    );
}

export default Reset;
