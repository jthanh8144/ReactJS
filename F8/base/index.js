// =======================React.createElement()=======================

// // DOM
// const h1DOM = document.createElement('h1');
// h1DOM.title = 'Hello';
// h1DOM.className = 'heading';
// h1DOM.innerText = 'Hello';
// document.body.appendChild(h1DOM);

// // React
// // React.createElement(type, props, children, n)
// const h1React = React.createElement('h1', {
//     title: 'Hello',
//     className: 'heading',
// }, 'Hello');

// console.dir(h1DOM);
// console.log(h1React);

// --------------------------------------------------------
// DOM
// const ulDOM = document.createElement('ul');
// const liDOM1 = document.createElement('li');
// const liDOM2 = document.createElement('li');
// liDOM1.innerText = 'JS';
// liDOM2.innerText = 'React';
// ulDOM.appendChild(liDOM1);
// ulDOM.appendChild(liDOM2);
// document.body.appendChild(ulDOM);
// // React
// const ulReact = React.createElement(
//     'ul', 
//     null, 
//     React.createElement('li', null, 'JS'),
//     React.createElement('li', null, 'React'),
// );
// console.log(ulReact);

// --------------------------------------------------------
// // DOM
// const divDOM = document.createElement('div');
// divDOM.className = 'post-item';
// const h2DOM = document.createElement('h2');
// h2DOM.title = 'Học React';
// h2DOM.innerText = 'Học React';
// const pDOM = document.createElement('p');
// pDOM.innerText = 'Học ReactJS từ cơ bản tới nâng cao';
// divDOM.appendChild(h2DOM);
// divDOM.appendChild(pDOM);
// document.body.appendChild(divDOM);

// =======================React DOM=======================
// // React
// const divReact = React.createElement(
//     'div', 
//     {
//         className: 'post-item',
//     },
//     React.createElement(
//         'h2',
//         {
//             title: 'Học React',
//         },
//         'Học React'
//     ),
//     React.createElement('p', null, 'Học ReactJS từ cơ bản tới nâng cao')
// );
// const root = document.querySelector('#root');
// ReactDOM.render(divReact, root);

// =======================JSX - babel=======================
// const course = 'ReactJS';
// const ul = <ul>
//     <li>Js</li>
//     <li>React</li>
// </ul>
// ReactDOM.render(ul, document.querySelector('#root'));
// --------------------------------------------------------

// =======================JSX render arrays=======================
// const courses = [
//     {
//         name: 'HTML, CSS',
//     },
//     {
//         name: 'Javascript',
//     },
//     {
//         name: 'ReactJS',
//     }
// ];
// const ul = (
//     <ul>
//         {
//             courses.map((course, index) => 
//                 <li key={index}>{course.name}</li>
//             )
//         }
//     </ul>
// );
// ReactDOM.render(ul, document.querySelector('#root'));
// --------------------------------------------------------

// // const jsx = React.createElement(
// //     React.Fragment,
// //     null,
// //     React.createElement('h1', null, 'Heading 1'),
// //     React.createElement('h2', null, 'Heading 2'),
// // )
// const jsx = (
//     <React.Fragment>
//         <h1>Heading 1</h1>
//         <h2>Heading 1</h2>
//     </React.Fragment>
// );
// ReactDOM.render(jsx, document.querySelector('#root'));

// =======================React element types=======================
// function Header() {
//     return (
//         <div className="header">Header</div>
//     );
// }
// class Main extends React.Component {
//     render() {
//         return (
//             <div className="main">Main</div>
//         );
//     }
// }
// const app = (
//     <div className="wrapper">
//         <Header/>
//         <Main/>
//         <div className="footer">footer</div>
//     </div>

// )
// ReactDOM.render(app, document.querySelector('#root'));

// --------------------------------------------------------
// function PostItem() {
//     return (
//         <div className="post-item">
//             <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg" alt="Thời gian và Động lực"/>
//             <h2 className="post-title">Thời gian và Động lực</h2>
//             <p className="post-desc">Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật"</p>
//             <p className="post-published">18 ngày trước · 6 phút đọc</p>
//         </div>
//     );
// }
// const app = (
//     <div className="post-list">
//         <PostItem/>
//     </div>
// );

// // correcting exercise

// // app.js
// function App() {
//     return (
//         <div className="post-list">
//             <PostItem/>
//         </div>
//     )
// }
// // index.js
// ReactDOM.render(<App/>, document.querySelector('#root'));

// =======================Props=======================
// function Input() {
//     return (
//         <div>
//             <label htmlFor="email">Email</label>
//             <input id="email"/>
//         </div>
//     )
// }
// ReactDOM.render(<Input/>, document.querySelector('#root'));

// --------------------------------------------------------
// function PostItem(props) {
//     if (typeof props.callback === 'function' ) {
//         props.callback(Math.random());
//     }
//     return (
//         <div className="post-item">
//             <img src={props.image} alt={props.title}/>
//             <h2 className="post-title">{props.title}</h2>
//             <p className="post-desc">{props.description}</p>
//             <p className="post-published">{props.publishedAt}</p>
//         </div>
//     );
// }
// // app.js
// function App() {
//     return (
//         <div className="post-list">
//             <PostItem
//                 title="Thời gian và Động lực"
//                 image="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg"
//                 description='Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật"'
//                 publishedAt="18 ngày trước · 6 phút đọc"
//                 callback={(random) => {
//                     console.log(random);
//                 }}
//             />
//         </div>
//     )
// }
// // index.js
// ReactDOM.render(<App/>, document.querySelector('#root'));

// --------------------------------------------------------
// function PostItem({
//     image,
//     title,
//     description,
//     publishedAt,
//     callback = () => {},
// }) {
//     if (typeof callback === 'function' ) {
//         callback(Math.random());
//     }
//     return (
//         <div className="post-item">
//             <img src={image} alt={title}/>
//             <h2 className="post-title">{title}</h2>
//             <p className="post-desc">{description}</p>
//             <p className="post-published">{publishedAt}</p>
//         </div>
//     );
// }
// // app.js
// function App() {
//     return (
//         <div className="post-list">
//             <PostItem
//                 title="Thời gian và Động lực"
//                 image="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg"
//                 description='Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật"'
//                 publishedAt="18 ngày trước · 6 phút đọc"
//                 callback={(random) => {
//                     console.log(random);
//                 }}
//             />
//         </div>
//     )
// }
// // index.js
// ReactDOM.render(<App/>, document.querySelector('#root'));

// --------------------------------------------------------
const courses = [
    {
      "id": 2,
      "title": "HTML, CSS từ Zero đến Hero",
      "slug": "html-css",
      "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
      "thumbnail": "courses/2.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "R6plN3FvzFY",
      "preview_video": null,
      "language": "html",
      "syntax_highlight": "language-html",
      "level": "Trình độ cơ bản",
      "priority": 10,
      "students_count": 103211,
      "deleted_at": null,
      "created_at": "2020-04-10T14:23:13.000000Z",
      "updated_at": "2021-12-31T11:10:48.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png",
      "preview_video_cdn": ""
    },
    {
      "id": 1,
      "title": "JavaScript Cơ Bản",
      "slug": "javascript-co-ban",
      "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
      "thumbnail": "courses/1.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "0SJE9dYdpps",
      "preview_video": null,
      "language": "javascript",
      "syntax_highlight": "language-javascript",
      "level": "Trình độ cơ bản",
      "priority": 30,
      "students_count": 62465,
      "deleted_at": null,
      "created_at": "2020-06-10T14:23:13.000000Z",
      "updated_at": "2021-12-31T10:56:22.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png",
      "preview_video_cdn": ""
    },
    {
      "id": 7,
      "title": "Kiến Thức Nhập Môn",
      "slug": "lessons-for-newbie",
      "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
      "thumbnail": "courses/7.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "M62l1xA5Eu8",
      "preview_video": null,
      "language": null,
      "syntax_highlight": null,
      "level": "Trình độ cơ bản",
      "priority": 0,
      "students_count": 46264,
      "deleted_at": null,
      "created_at": "2020-02-10T14:23:13.000000Z",
      "updated_at": "2021-12-31T11:06:31.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png",
      "preview_video_cdn": ""
    },
    {
      "id": 3,
      "title": "Responsive Với Grid System",
      "slug": "responsive-web-design",
      "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
      "thumbnail": "courses/3.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "uz5LIP85J5Y",
      "preview_video": null,
      "language": "html",
      "syntax_highlight": "language-html",
      "level": "Trình độ cơ bản",
      "priority": 20,
      "students_count": 17359,
      "deleted_at": null,
      "created_at": "2020-05-10T14:23:13.000000Z",
      "updated_at": "2021-12-31T10:22:33.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png",
      "preview_video_cdn": ""
    }
];
function CourseItem({
    title,
    thumbnail_cdn,
    description,
    students_count,
}) {
    return (
        <div className="course-item">
            <img src={thumbnail_cdn} alt={title}/>
            <h2 className="course-title">{title}</h2>
            <p className="course-desc">{description}</p>
            <p className="course-student-count">{students_count}</p>
        </div>
    );
}

function CourseList() {
    return (
        <div className="courses-list">
            {
                courses.map((course, index) => {
                    return <CourseItem
                        key={index}
                        title={course.title}
                        thumbnail_cdn={course.thumbnail_cdn}
                        description={course.description}
                        students_count={course.students_count}
                    />
                })
            }
        </div>
    );
}
ReactDOM.render(<CourseList/>, document.querySelector('#root'));

