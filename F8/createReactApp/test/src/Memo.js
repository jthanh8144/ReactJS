import { memo } from 'react';

function Content({ count }) {
    console.log('re-render');
    return (
        <div>
            <h2>hello {count}</h2>
        </div>
    );
}

export default memo(Content);