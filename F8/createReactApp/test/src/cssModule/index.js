import Heading from './Heading';
import Paragraph from './Paragraph';
import GlobalStyles from './GlobalStyles';
import Button from './Button';

function CssModule() {
    return (
        <GlobalStyles>
            <Heading />
            <Paragraph />
            <Button primary />
            <Button disabled />
        </GlobalStyles>
    );
}

export default CssModule;