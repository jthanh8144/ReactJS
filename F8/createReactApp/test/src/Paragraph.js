import { useContext } from 'react';
import { ThemeContext } from './UseContext/ThemeContext';

function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>
            Dead is like the wind. Always by my side.
        </p>
    );
}

export default Paragraph;
