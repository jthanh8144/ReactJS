import { useContext } from 'react';
import { AppContext } from '../App';

const colors = ['red', 'green', 'blue', 'pink'];

function ColorPicker() {
    const appContext = useContext(AppContext);

    return (
        <div className="color-picker">
            <div className="color-picker__heading">
                Color Picker
            </div>
            <div className="color-picker__body">
                {colors.map((color, index) => {
                    return (
                        <button 
                            key={index}
                            className={appContext.color === color ? 'active' : '' }
                            onClick={() => appContext.setColor(color)}
                        >
                            {color}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ColorPicker;
