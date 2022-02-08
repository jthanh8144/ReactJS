import { useContext } from 'react';
import { AppContext } from '../App';

function SizePicker() {
    const appContext = useContext(AppContext);

    const increaseSize = () => {
        appContext.setSize(prev => {
            var next = prev + 2;
            if (next > 32 || next < 8) {
                next -= 2;
            }
            return next;
        });
    }

    const decreaseSize = () => {
        appContext.setSize(prev => {
            var next = prev - 2;
            if (next > 32 || next < 8) {
                next += 2;
            }
            return next;
        });
    }
    
    return (
        <div className="size-picker">
            <div className="size-picker__heading">
                Size: {appContext.size}px
            </div>
            <div className="size-picker__body">
                <button onClick={decreaseSize}>Giảm</button>
                <button onClick={increaseSize}>Tăng</button>
            </div>
        </div>
    );
}

export default SizePicker;
