import { useContext } from 'react';
import { AppContext } from '../App';

function Result() {
    const appContext = useContext(AppContext);
    const styles = {
        color: appContext.color,
        fontSize: appContext.size
    }

    return (
        <div>
            <p>Color: {styles.color} - Fontsize: {styles.fontSize}px</p>
            <div 
                id="content"
                style={styles}
            >
                Võ Văn Thành
            </div>
        </div>
    );
}

export default Result;
