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
const courses = [
    {
        name: 'HTML, CSS',
    },
    {
        name: 'Javascript',
    },
    {
        name: 'ReactJS',
    }
];
const ul = <ul>
    {
        courses.map(course => {
            return <li>{course.name}</li>;
        })
    }
</ul>
ReactDOM.render(ul, document.querySelector('#root'));
