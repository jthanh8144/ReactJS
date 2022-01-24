import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Paragraph from '../Paragraph';

function Content1() {
    return (
        <>
            <Paragraph />
        </>
    );
}

function Content() {
    const context = useContext(ThemeContext);

    return (
        <>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <Content1 />
        </>
    );
}

export default Content;
