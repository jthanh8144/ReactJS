import { useEffect, useState } from 'react';

// 1. useEffect(callback)
// - gọi callback mỗi khi rerender 
// - ít dùng
// - gọi callback sau khi thêm component vào DOM
// 2. useEffect(callback, [])
// - chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi
// Note:
// 1. callback luôn được chạy sau khi component mounted
// 2. Clean up function sẽ luôn được gọi trước khi component unmounted
// 3. clean up function luôn được gọi trước khi callback được gọi (trừ lần mounted đầu tiên)

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    // --------------------------useEffect----------------------------------
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const [countdown, setCountdown] = useState(180);

    const [avatar, setAvatar] = useState();
    
    // useEffect(() => {
    //     document.title = title;
    // });

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts);
    //         })
    // }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setGoToTop(true);
            } else {
                setGoToTop(false);
            }
            // setGoToTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1);
    //     }, 1000);
    // }, [countdown]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="avatar" width="80%" />
            )}
            <h1>{width}</h1>
            <h1>{countdown}</h1>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Content;