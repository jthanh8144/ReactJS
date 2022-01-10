import { useEffect, useState } from 'react';

// 1. useEffect(callback)
// - gọi callback mỗi khi rerender 
// - ít dùng
// - gọi callback sau khi thêm component vào DOM
// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// Note:
// 1. callback luôn được chạy sau khi component mounted

function Content() {
    // --------------------------useEffect----------------------------------
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    
    // useEffect(() => {
    //     document.title = title;
    // })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, []);

    return (
        <div>
            <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;