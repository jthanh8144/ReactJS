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
        </GlobalStyles>
    );
}

export default CssModule;